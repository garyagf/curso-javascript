
// {id:1, recuoerarClave: function(){}}
function Usuario() {
    this.id = 1;
    this.recuperar = function () { // metodos es una  funcion asignada a una propiedad de un objeto
        console.log('recuperando clave')
    }
};

/**
 * se crea un objeto vacio
 * se vincula el prototipo de la funcion
 * el objetivo vacio se vincula a this
 * retorna a this si no retorna nada
 */
let usuario = new Usuario();

console.log(usuario)