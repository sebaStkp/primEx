export function frase(cadena){
    return cadena;
}

export function contPalabras(cadena){
    var cad = cadena + "";
    var contador = 0;
    for(var i = 0;i<cad.length;i++)
    {
        if(cad[i] == " "){
            contador += 1;
        }
    }
    return contador + 1;
}
