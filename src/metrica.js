class Metrica {
    constructor(numeroCommit, puntaje, explicacion) {
        this.numeroCommit = numeroCommit;
        this.puntaje = puntaje;
        this.explicacion = explicacion;
        this.pruebas = null;
        this.cobertura = null;
    }

    getNumeroCommit() {
        return this.numeroCommit;
    }

    getPuntaje() {
        return this.puntaje;
    }

    getExplicacion() {
        return this.explicacion;
    }

    cargarMetricas(pruebas, cobertura){
        this.pruebas = pruebas;
        this.cobertura = cobertura;
    }

}

export default Metrica;