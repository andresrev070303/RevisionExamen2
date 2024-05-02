import Practicas from "./datosPracticas.js";
import Metrica from "./metrica.js";
import MetricaArray from "./metricasArray.js";



describe("Practicas System Tests - Search Feature", () => {
    let practicas = [];
  
    beforeEach(() => {
      practicas = [];
      let practica1 = new Practicas();
      practica1.cargarDatos("FizzBuzz", "Some description", "2024-01-01", "http://example.com");
      practicas.push(practica1);
      let practica2 = new Practicas();
      practica2.cargarDatos("Totalizador", "Another description", "2024-02-02", "http://example2.com");
      practicas.push(practica2);
    });
  
        it("Deberia encontrar una practica por su nombre como el de FizzBuzz", () => {
            const foundPractica = practicas.find(practica => practica.nombre === "FizzBuzz");
            expect(foundPractica.nombre).toEqual("FizzBuzz");
        });
    
      it("NO encuentra practica si no la encuentra", () => {
        const foundPractica = practicas.find(practica => practica.nombre === "NonExistent");
        expect(foundPractica).toBeUndefined();
      });
  
    it("Verifica si practica tiene los datos correctos", () => {
      const foundPractica = practicas.find(practica => practica.nombre === "Totalizador");
      expect(foundPractica.descripcion).toEqual("Another description");
      expect(foundPractica.fecha).toEqual("2024-02-02");
      expect(foundPractica.enlace).toEqual("http://example2.com");
    });
  
  });