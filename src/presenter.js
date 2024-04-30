import Practicas from "./datosPracticas.js";

let nombres = ["FizzBuzz", "Totalizador"];
let descripciones = ["Una practica de TDD donde se retorna una cadena de Fizz, Buzz o FizzBuzz de acuerdo a ciertas reglas", "Una practica de TDD donde se realiza un totalizador que calcula el precio total de una cantidad de productos aplicando ciertos impuestos y descuentos"];
let fechas = ["2024-02-20", "2024-03-24"];
let enlaces = ["https://github.com/DeimaxRow1342/SecuenciaFizzBuzz", "https://github.com/Dylancalle/Tarea7"];
let practicas = [];

document.addEventListener("DOMContentLoaded", function() {
  cargarPracticasIniciales();

  document.getElementById("proyectoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.toString();
    const descripcion = document.getElementById("descripcion").value.toString();
    const fecha = document.getElementById("fecha").value.toString();
    const enlace = document.getElementById("enlace").value.toString();

    const nuevaPractica = new Practicas();
    nuevaPractica.cargarDatos(nombre, descripcion, fecha, enlace);
    practicas.push(nuevaPractica);

    this.reset();

    actualizarTablaPracticas();
  });
});

function cargarPracticasIniciales() {
  for (let i = 0; i < nombres.length; i++) {
    const nuevaPractica = new Practicas();
    nuevaPractica.cargarDatos(nombres[i], descripciones[i], fechas[i], enlaces[i]);
    practicas.push(nuevaPractica);
  }

  actualizarTablaPracticas();
}

function eliminarPractica(nombre) {
  // Eliminar del array
  console.log("Eliminando la practica: ", nombre);
  practicas = practicas.filter(practica => practica.nombre !== nombre);
  // Actualizar la tabla para reflejar los cambios
  actualizarTablaPracticas();
}

function actualizarTablaPracticas() {
  const contenido = document.querySelector("#tabla-practicas");
  let salida = "";

  practicas.forEach(practica => {
    salida += `
      <tr>
        <td>${practica.nombre}</td>
        <td>${practica.descripcion}</td>
        <td>${practica.fecha}</td>
        <td><a href="${practica.enlace}">${practica.enlace}</a></td>
        <td><button onclick="eliminarPractica('${practica.nombre}')">Eliminar</button></td>
      </tr>
    `;
  });

  contenido.innerHTML = salida;
}

window.eliminarPractica = eliminarPractica;