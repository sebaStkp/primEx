import {frase, contPalabras} from "./contOcurrencias";

describe("Cuenta la cantidad de ocurrencias de una frase", () => {
    it("muestra la frase ingresada por el usuario", () => {
      expect(frase("Esto es una frase de prueba")).toEqual("Esto es una frase de prueba");
    });
    it("separa la frase ingresada tomando como criterio el espacio ' ' ", () => {
        expect(contPalabras("Esto es una frase de prueba")).toEqual(6);
    });
  });
  