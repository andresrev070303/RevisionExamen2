import Metrica from "./metrica.js"

class MetricaArray{
    constructor(){
        this.metricaArray = [];
    } 

    anadirMetricaCommit(numeroCommit, puntaje, explicacion) {
    const existingMetric = this.metricaArray.find(m => m.numeroCommit === numeroCommit);
    if (existingMetric) {
      // Actualiza la métrica existente
      existingMetric.puntaje = puntaje;
      existingMetric.explicacion = explicacion;
    } else {
      // Añade una nueva métrica
      const commitMetric = new Metrica(numeroCommit, puntaje, explicacion);
      this.metricaArray.push(commitMetric);
    }
  }

  desplegarMetrica() {
    return this.metricaArray.map(metrica => ({
      numeroCommit: metrica.getNumeroCommit(),
      puntaje: metrica.getPuntaje(),
      explicacion: metrica.getExplicacion()
    }));
  }

  eliminarMetricaCommit(numeroCommit) {
    this.metricaArray = this.metricaArray.filter(metrica => metrica.numeroCommit !== numeroCommit);
  }

}

export default MetricaArray;