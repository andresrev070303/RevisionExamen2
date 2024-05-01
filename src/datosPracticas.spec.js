import Practicas from "./datosPracticas.js";
import Metrica from "./metrica.js";

describe("Crear un programa gamificado para TDDLab", () => {
  it("Si ingreso el nombre de una practica, me regresa el nombre", () => {
    const practica = new Practicas();
    practica.cargarDatos("FizzBuzz");
    expect(practica.nombre).toEqual("FizzBuzz");
  });
  it("Si ingreso el nombre y la descripcion de una practica, me regresa el nombre y la descripcion en una clase", () => {
    const practica = new Practicas();
    practica.cargarDatos("FizzBuzz", "Una practica de TDD donde se retorna una cadena de Fizz, Buzz o FizzBuzz de acuerdo a ciertas reglas");
    expect(practica.descripcion).toEqual("Una practica de TDD donde se retorna una cadena de Fizz, Buzz o FizzBuzz de acuerdo a ciertas reglas");
  });
  it("Si ingreso el nombre, la descripcion y la fecha de una practica, me regresa el nombre, la descripcion y la fecha en una clase", () => {
      const practica = new Practicas();
      practica.cargarDatos("FizzBuzz", "Una practica de TDD donde se retorna una cadena de Fizz, Buzz o FizzBuzz de acuerdo a ciertas reglas","20/02/2024");
      expect(practica.fecha).toEqual("20/02/2024");
  });
  it("Si ingreso el nombre, la descripcion, la fecha y el enlace de una practica, me regresa el nombre, la descripcion, la fecha y el enlace en una clase", () => {
    const practica = new Practicas();
    practica.cargarDatos("FizzBuzz", "Una practica de TDD donde se retorna una cadena de Fizz, Buzz o FizzBuzz de acuerdo a ciertas reglas","20/02/2024", "https://github.com/DeimaxRow1342/SecuenciaFizzBuzz");
    expect(practica.enlace).toEqual("https://github.com/DeimaxRow1342/SecuenciaFizzBuzz");
  });
  it("Si ingreso el nombre de una práctica y luego la busco, debería regresar la práctica", () => {
    const practica = new Practicas();
    practica.cargarDatos("FizzBuzz");
    expect(practica.obtenerPractica("FizzBuzz")).toEqual(practica);
  });
  it("Si ingreso el nombre de una práctica y luego la elimino, debería ser nula", () => {
    const practica = new Practicas();
    practica.cargarDatos("FizzBuzz");
    practica.eliminarDatos("FizzBuzz");
    expect(practica.obtenerPractica("FizzBuzz")).toBeUndefined(); 
  });
  
  it("Se debe añadir un primer commit en las metricas", () => {
    let numCommit = 1;

    let metric = new Metrica(numCommit)
    expect(metric.getNumreroCommit()).toEqual(1);
  });

  it("Se debe añadir un segundo commit en las metricas", () => {
    let numCommit1 = 2;
    
    let metric = new Metrica(numCommit1)
    expect(metric.getNumreroCommit()).toEqual(2);
  });

  it("Se debe añadir un Puntaje ademas del numero de commit en las metricas", () => {
    let numCommit1 = 1;
    let puntaje = 100;
    
    let puntCommit = new Metrica(numCommit1, puntaje)
    expect(puntCommit.getPuntaje()).toEqual(100);
  });

  it("Se debe añadir un Puntaje ademas del numero de commit en las metricas", () => {
    let numCommit2 = 2;
    let puntaje = 90;
    
    let puntCommit = new Metrica(numCommit2, puntaje)
    expect(puntCommit.getPuntaje()).toEqual(90);
  });
});

