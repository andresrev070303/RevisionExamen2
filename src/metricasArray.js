import Metrica from "./metrica.js";

class ArrayMetrica {
    constructor() {
        this.arrayMetrica = [];
    }

    aniadirMetrica(numeroCommit) {
        const nuevoCommit = new Metrica(numeroCommit);
        this.arrayMetrica.push(nuevoCommit);
    }
}

export default ArrayMetrica;