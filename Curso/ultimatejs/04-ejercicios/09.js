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

let pairs = [
    [1, { name: 'Nicolas' }],
    [2, { name: 'Felipe' }],
    [3, { name: 'chanchito' }],
]

function toCollection(arr) {

    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }

    return collection;

}

let resultado = toCollection(pairs);
console.log(resultado);