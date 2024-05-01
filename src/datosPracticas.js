import MetricaArray from "./metricasArray";

class Practicas{
  constructor(){
    this.nombre = null;
    this.descripcion = null;
    this.fecha = null;
    this.enlace = null;
    this.metricaArray = new MetricaArray();
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

  anadirMetrica(numeroCommit,puntaje,explicacion){
    this.metricaArray.anadirMetricaCommit(numeroCommit,puntaje,explicacion);
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
