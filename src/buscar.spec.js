import buscarProyecto from './buscar';

describe('buscador', () => {
    it("no deberia encontrar ningun proyecto", () => {
        let proyectos = [];
        expect(buscarProyecto("ejercicio1", proyectos)).toEqual("");
    });
});