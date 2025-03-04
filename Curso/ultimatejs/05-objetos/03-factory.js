
function crearUsuario(email, name) {
    return {

        email,
        name,
        activo: true,
        // una funcion que esta vacia se le llama anonima
        recuperarClave: function () {

            console.log('recuperando clave..')
        }

    };
}

let user1 = crearUsuario('Gary@gmail.com', 'Gary');
let user2 = crearUsuario('Cristina@gmail.com', 'Cristina');

console.log(user1, user2);