import MetricaArray from "./metricasArray";

class Practicas{
  constructor(){
    this.nombre = null;
    this.descripcion = null;
    this.fecha = null;
    this.enlace = null;
    this.metricaArray = new MetricaArray();
    this.highestCommit = 0;
  }

  cargarDatos(nombre, descripcion, fecha, enlace){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.enlace = enlace;
  }

  obtenerPractica(nombre){
    if(this.nombre == nombre){
        return this;
    }
  }

  anadirMetrica(numeroCommit, puntaje, explicacion) {
    if (numeroCommit <= this.highestCommit) {
      return false; // Return false if commit number is not higher than the highest
    }
    if (numeroCommit != null && !isNaN(numeroCommit) && numeroCommit > 0) {
      this.metricaArray.anadirMetricaCommit(numeroCommit, puntaje, explicacion);
      this.highestCommit = numeroCommit;  // Update the highest commit number
      return true;
    }
    return false;
  }

  motrarMetricas(){
    return this.metricaArray.desplegarMetrica();
  }

  eliminarDatos(nombre){
    if(this.nombre == nombre){
        this.nombre = null;
        this.descripcion = null;
        this.fecha = null;
        this.enlace = null;
    }
  }
}

export default Practicas;
