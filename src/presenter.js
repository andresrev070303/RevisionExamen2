// Importar las clases necesarias
import Practicas from "./datosPracticas.js";
import Metrica from "./metrica.js";
import MetricaArray from "./metricasArray.js";

let practicas = [];

document.addEventListener("DOMContentLoaded", function() {
  cargarPracticasIniciales();

  document.getElementById("proyectoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    agregarNuevaPractica();
  });
});

function agregarNuevaPractica() {
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  const fecha = document.getElementById("fecha").value;
  const enlace = document.getElementById("enlace").value;

  const nuevaPractica = new Practicas();
  nuevaPractica.cargarDatos(nombre, descripcion, fecha, enlace);
  practicas.push(nuevaPractica);

  actualizarTablaPracticas();
}

function cargarPracticasIniciales() {
  let nombres = ["FizzBuzz", "Totalizador"];
  let descripciones = ["Una practica de TDD donde se retorna una cadena de Fizz, Buzz o FizzBuzz de acuerdo a ciertas reglas", "Una practica de TDD donde se realiza un totalizador que calcula el precio total de una cantidad de productos aplicando ciertos impuestos y descuentos"];
  let fechas = ["2024-02-20", "2024-03-24"];
  let enlaces = ["https://github.com/DeimaxRow1342/SecuenciaFizzBuzz", "https://github.com/Dylancalle/Tarea7"];

  for (let i = 0; i < nombres.length; i++) {
    const nuevaPractica = new Practicas();
    nuevaPractica.cargarDatos(nombres[i], descripciones[i], fechas[i], enlaces[i]);
    practicas.push(nuevaPractica);
  }

  actualizarTablaPracticas();
}


function eliminarPractica(nombre) {
  if(confirm("¿Estás seguro de eliminar la práctica?")) {
    const nuevaPractica = new Practicas();
    nuevaPractica.eliminarDatos(nombre);
    practicas = practicas.filter(practica => practica.nombre !== nombre);
    actualizarTablaPracticas();
  }
  else{
    console.log("No se eliminó la práctica");
  }

}

function actualizarTablaPracticas() {
  const contenido = document.querySelector("#tabla-practicas");
  contenido.innerHTML = practicas.map(practica => `
    <tr>
      <td>${practica.nombre}</td>
      <td>${practica.descripcion}</td>
      <td>${practica.fecha}</td>
      <td><a href="${practica.enlace}">Enlace</a></td>
      <td>
        <button onclick="eliminarPractica('${practica.nombre}')">Eliminar</button>
        <button onclick="ingresarAMetricaDePractica('${practica.nombre}')">Ver Métricas</button>
      </td>
    </tr>
  `).join('');
}

function ingresarAMetricaDePractica(nombrePractica){
  const practicaSeleccionada = practicas.find(practica => practica.nombre === nombrePractica);
  const proyectoContainer = document.querySelector('#proyectoContainer');
  const tablaPracticas = document.querySelector('#tabla-practicas');
  const formularioPractica = document.querySelector('#proyectoForm');

  // Ocultar la tabla de prácticas y el formulario de entrada
  tablaPracticas.style.display = 'none';
  formularioPractica.style.display = 'none';

  // Limpiar el contenedor de proyecto y prepararlo para mostrar métricas
  proyectoContainer.innerHTML = '';
  proyectoContainer.style.display = 'block'; // Asegurar que el contenedor está visible

  if (practicaSeleccionada) {
    const tituloPracticaElement = document.createElement('h2');
    tituloPracticaElement.textContent = `Práctica: ${nombrePractica}`;
    proyectoContainer.appendChild(tituloPracticaElement);

    const btnVolver = document.createElement('button');
    btnVolver.textContent = 'Volver a la lista de prácticas';
    btnVolver.addEventListener('click', function() {
      proyectoContainer.innerHTML = ''; // Limpiar contenedor de proyectos
      tablaPracticas.style.display = 'table'; // Mostrar la tabla de nuevo
      formularioPractica.style.display = 'block'; // Mostrar formulario de nuevo
    });
    proyectoContainer.appendChild(btnVolver);

    const listaMetricas = document.createElement('ul');
    const metricasPractica = practicaSeleccionada.motrarMetricas();
    metricasPractica.forEach(metrica => {
      const metricaItem = document.createElement('li');
      metricaItem.textContent = `Commit: ${metrica.numeroCommit}, Puntaje: ${metrica.puntaje}, Explicación: ${metrica.explicacion}`;
      listaMetricas.appendChild(metricaItem);
    });
    proyectoContainer.appendChild(listaMetricas);

    const formMetrica = document.createElement('form');
    const inputNumeroCommit = document.createElement('input');
    inputNumeroCommit.type = 'number';
    inputNumeroCommit.placeholder = 'Número de commit';
    const inputPuntaje = document.createElement('input');
    inputPuntaje.type = 'number';
    inputPuntaje.placeholder = 'Puntaje';
    const inputExplicacion = document.createElement('input');
    inputExplicacion.type = 'text';
    inputExplicacion.placeholder = 'Explicación';
    const btnConfirmMetrica = document.createElement('button');
    btnConfirmMetrica.textContent = 'Agregar Métrica';
    btnConfirmMetrica.addEventListener('click', (event) => {
      event.preventDefault();
      const numeroCommit = parseInt(inputNumeroCommit.value);
      const puntaje = parseInt(inputPuntaje.value);
      const explicacion = inputExplicacion.value;

      if (!isNaN(numeroCommit) && !isNaN(puntaje) && explicacion) {
        practicaSeleccionada.anadirMetrica(numeroCommit, puntaje, explicacion);
        ingresarAMetricaDePractica(nombrePractica); // Actualiza la lista de métricas en pantalla
      } else {
        alert('Por favor ingrese valores válidos.');
      }
    });
    formMetrica.appendChild(inputNumeroCommit);
    formMetrica.appendChild(inputPuntaje);
    formMetrica.appendChild(inputExplicacion);
    formMetrica.appendChild(btnConfirmMetrica);
    proyectoContainer.appendChild(formMetrica);
  }
  
}

window.eliminarPractica = eliminarPractica;
window.ingresarAMetricaDePractica = ingresarAMetricaDePractica;