function precioCompleto(precio, impueto) {
    return precio + precio * impueto
}

let resultado = precioCompleto(19.90, 0.15);

console.log(resultado);