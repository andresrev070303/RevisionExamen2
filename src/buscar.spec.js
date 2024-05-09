import buscarProyecto from './buscar';

describe('buscador', () => {
    it("no deberia encontrar ningun proyecto", () => {
        let proyectos = [];
        expect(buscarProyecto("ejercicio1", proyectos)).toEqual([]);
    });
    it("Deberia encontrar un proyecto si esta en la lista", () => {
        let proyectos = []
        proyectos.push("ejercicio1");
        expect(buscarProyecto("ejercicio1", proyectos)).toEqual(["ejercicio1"]);
    });
    it("Encuentra un proyecto cuando el mismo existe en una lista de varios proyectos", () => {
        let proyectos = [];
        proyectos.push("ejercicio1");
        proyectos.push("ejercicio2");
        proyectos.push("ejercicio3");
        expect(buscarProyecto("ejercicio2", proyectos)).toEqual(["ejercicio2"]);
    });
    it("Deberia encontrar mas de una coincidencia de proyectos", () => {
        let proyectos = [];
        proyectos.push("ejercicio1");
        proyectos.push("ejercicio2");
        proyectos.push("ejercicio1");
        proyectos.push("ejercicio3");
        expect(buscarProyecto("ejercicio1", proyectos)).toEqual(["ejercicio1", "ejercicio1"]);
    });
    it("Deberia enceontrar proyectos cuyo nombre empieza con el criterio de busqueda", () => {
        let proyectos = [];
        proyectos.push("ejercicio1");
        proyectos.push("ejercicio2");
        proyectos.push("ejercicio3");
        expect(buscarProyecto("ejerc", proyectos)).toEqual(["ejercicio1", "ejercicio2", "ejercicio3"]);
    });
});