function mayusculasMinusculas(texto) {
    var minusculas = texto.toLowerCase();
    var mayusculas = texto.toUpperCase();

    if (texto == minusculas) {
        console.log('todas son minusculas');
    } else  if (texto == mayusculas) {
        console.log('todas son mayusculas');
    } else {
        console.log('es una mezcla');
    }
} 