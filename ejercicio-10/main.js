function numeroPar(a, b) {
    if (a > b) {
        console.log('el primer número es mayor');
    } else {
        console.log('el segundo número es mayor');
    }

    if (a%2 == 0 && b%2 == 0) {
        console.log('los dos numeros son pares');
    } else if (a%2 == 0) {
        console.log('el primer número es par');
    } else if (b%2 == 0) {
        console.log('el número '+ b + ' es par');
    } else {
        console.log('ninguno es par');
    }
}

numeroPar(3, 7);