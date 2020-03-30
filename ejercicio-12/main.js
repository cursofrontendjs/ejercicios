function palindromo(texto) {
    var textoJunto = texto.split(" ").join("").toLowerCase();
    var dadoVuelta = textoJunto.split("").reverse().join("");
    if (textoJunto == dadoVuelta) {
        console.log("es un palíndromo");
    } else {
        console.log("no es un palíndromo");
    }
}