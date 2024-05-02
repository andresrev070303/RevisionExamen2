import Practicas from "./datosPracticas.js";
import Metrica from "./metrica.js";
import MetricaArray from "./metricasArray.js";



describe("Practicas System Tests - Search Feature", () => {
    let practicas = [];
  
    beforeEach(() => {
      practicas = [];
      let practica1 = new Practicas();
      practica1.cargarDatos("FizzBuzz", "Some description", "2024-01-01", "http://example.com");
      practicas.push(practica1);
      
    });
  
    it("Deberia encontrar una practica por su nombre como el de FizzBuzz", () => {
      const foundPractica = practicas.find(practica => practica.nombre === "FizzBuzz");
      expect(foundPractica.nombre).toEqual("FizzBuzz");
    });
  
    it("should not find a practice if the name does not match", () => {
      const foundPractica = practicas.find(practica => practica.nombre === "NonExistent");
      expect(foundPractica).toBeUndefined();
    });
  
  
  });