import Metrica from "./metrica.js"

class MetricaArray{
    constructor(){
        this.metricaArray = [];
    } 

    anadirMetricaCommit(numeroCommit, puntaje, explicacion){
        const commitMetric = new Metrica(numeroCommit, puntaje, explicacion);
        this.metricaArray.push(commitMetric);
    }

    desplegarMetrica(){
        return this.metricaArray.map(metrica => (
            {numeroCommit: metrica.getNumeroCommit(), puntaje: metrica.getPuntaje(), explicacion: metrica.getExplicacion()}
        ))

    }

}

export default MetricaArray;