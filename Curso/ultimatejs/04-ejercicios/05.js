/**
 * crear algoritmo que devuelva numero
 * menor y mayot de array
 */

let array = [2, 5, 7, 15, -5, -100, 55]
function getMenorMayor(arr) {
    let mayor = 0;
    let menor = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i]
        }

        if (arr[i] < menor) {
            menor = arr[i]
        }
    }

    return numero = [menor, mayor]
}

let numeros = getMenorMayor(array);
console.log(numeros)