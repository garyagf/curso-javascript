/**
 * 
 * crear algoritmo que tome un array de objetos y devielva un array de pares
 */

let array = [{
    id: 1,
    name: 'nicolas'
}, {
    id: 2,
    name: 'felipe'
}, {
    id: 3,
    name: 'chanchito'
},
]

let pares = [
    [1, { id: 1, name: 'Nicolas' }],
    [2, { id: 2, name: 'Felipe' }],
    [3, { id: 3, name: 'chanchito' }],
]

function toPairs(arr) {

    let pairs = [];

    for (idx in arr) {
        let elemento = arr[idx]
        pairs[idx] = [elemento.id, elemento];
    }

    return pairs;

}

let resultado = toPairs(array);
console.log(resultado);