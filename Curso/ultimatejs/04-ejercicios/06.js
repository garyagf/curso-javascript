/**
 * crear algoritmo que devuelva numero
 * menor y mayot de array
 */

let array = [2, 5, 7, 15, -5, -100, 55]
function getCuantosPositivos(arr) {
    let cantidad = 0;
    
    for (elemento of arr) {
        if(elemento > 0){
            cantidad++
        }
    }

    return cantidad
}

let numeros = getCuantosPositivos(array);
console.log(numeros)