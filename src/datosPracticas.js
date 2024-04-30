class Practicas{
  constructor(){
    this.nombre = null;
    this.descripcion = null;
    this.fecha = null;
  }

  cargarDatos(nombre, descripcion, fecha){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = fecha;
  }
}

export default Practicas;
