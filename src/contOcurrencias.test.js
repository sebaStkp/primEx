import frase from "./contOcurrencias";

describe("Cuenta la cantidad de ocurrencias de una frase", () => {
    it("muestra la frase ingresada por el usuario", () => {
      expect(frase("Esto es una frase de prueba")).toEqual("Esto es una frase de prueba");
    });

  });
  