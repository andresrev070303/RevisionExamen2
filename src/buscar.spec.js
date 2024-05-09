import buscarProyecto from './buscar';

describe('buscador', () => {
    it("no deberia encontrar ningun proyecto", () => {
        let proyectos = [];
        expect(buscarProyecto("ejercicio1", proyectos)).toEqual("");
    });
    it("Deberia encontrar un proyecto si esta en la lista", () => {
        let proyectos = []
        proyectos.push("ejercicio1");
        expect(buscarProyecto("ejercicio1", proyectos)).toEqual("ejercicio1");
    });
});