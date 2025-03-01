//Tipo de referencia
// es una agrupacion de datos que hacen sentido tenerlos junstos

//Personaje de TV

let nombre = "Tanjito";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
  nombre: "Tanjiro",
  anime: "Demon Slayer",
  edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 13;

let llave = "edad";

personaje["llave"] = 16;

console.log(personaje);

delete personaje.anime;

console.log(personaje);
