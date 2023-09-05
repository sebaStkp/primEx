import {frase, contPalabras} from "./contOcurrencias";

describe("Cuenta la cantidad de ocurrencias de una frase", () => {
    it("muestra la frase ingresada por el usuario", () => {
      expect(frase("Esto es una frase de prueba")).toEqual("Esto es una frase de prueba");
    });
    // it("separa la frase ingresada tomando como criterio el espacio ' ' ", () => {
    //     expect(contPalabras("Esto es una frase de prueba")).toEqual(6);
    // });
    // it("en caso de estar separado por un caracter extraño no toma en cuenta como parabra", () => {
    //     expect(contPalabras("Esto&es una frase de prueba")).toEqual(5);
    // });
    // it("separa la frase ingresada tomando como criterio el guion '-' y coma ',' ", () => {
    //     expect(contPalabras("Esto-es,una frase de$prueba")).toEqual(5);
    // });
    // it("separa la frase ingresada tomando como criterio el punto y coma ';' y punto '.' ", () => {
    //     expect(contPalabras("Esto$es%una.frase;es&prueba")).toEqual(3);
    // });
    it("Muestra las palabras contenidas en una cadena ", () => {
        const [cantPalabras, array] = contPalabras("Esto es una frase es prueba");
        expect(array[0]).toEqual("Esto ");
        expect(array[1]).toEqual("es ");
        expect(array[2]).toEqual("una ");
        expect(array[3]).toEqual("frase ");
        expect(array[4]).toEqual("es ");

    });
  });
  