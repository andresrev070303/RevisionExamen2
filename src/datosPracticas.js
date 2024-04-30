class Practicas{
  constructor(){
    this.nombre = null;
    this.descripcion = null;
    this.fecha = null;
    this.enlace = null;
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
}

export default Practicas;
