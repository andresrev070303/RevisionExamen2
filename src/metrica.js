class Metrica {
    constructor(numeroCommit, puntaje, explicacion) {
        this.numeroCommit = numeroCommit;
        this.puntaje = puntaje;
        this.explicacion = explicacion;
    }

    getNumreroCommit() {
        return this.numeroCommit;
    }

    getPuntaje() {
        return this.puntaje;
    }

    getExplicacion() {
        return this.explicacion;
    }

}

export default Metrica;