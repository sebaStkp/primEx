export function frase(cadena){
    return cadena;
}

export function contPalabras(cadena){
    var cad = cadena + "";
    var contador = 0;
    var arrayPalabras = [];
    var posArray = 0;
    var subString = "";
    for(var i = 0;i<cad.length;i++)
    {
        subString += cad[i];
        if(cad[i] == " "){
            contador += 1;
            arrayPalabras[posArray] = subString; 
            posArray++;
            subString = "";
        }
        if(cad[i] == "-"){
            contador += 1;
            arrayPalabras[posArray] = subString; 
            posArray++;
            subString = "";
        }
        if(cad[i] == ","){
            contador += 1;
            arrayPalabras[posArray] = subString; 
            posArray++;
            subString = "";
        }
        if(cad[i] == ";"){
            contador += 1;
            arrayPalabras[posArray] = subString; 
            posArray++;
            subString = "";
        }
        if(cad[i] == "."){
            contador += 1;
            arrayPalabras[posArray] = subString; 
            posArray++;
            subString = "";
        }
    }
    contador++;
    return [contador, arrayPalabras];
}


