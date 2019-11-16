// EJERCICIO 1
// Dado el array playlistFoo, mostrar en consola la canción que está en segundo y quinto lugar.

let playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Best of You', 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood'];

console.log(playlistFoo[1]);
console.log(playlistFoo[4]);


// EJERCICIO 2

let bandas = ["Royal Blood", "Highly Suspect", "Cage the Elephant", "Arctic Monkeys", "The Strokes", "Greta Van Fleet", "Haim", 
    "The Clash", "The Doors", "foo fighters"];
let nombreDePrimerBanda = bandas[0];
let nombreDeTercerBanda = bandas[2];
let nombreDeSextaBanda = bandas[5];

console.log(`La banda en primer lugar es: ${nombreDePrimerBanda}`);
console.log(`La banda en tercer lugar es: ${nombreDeTercerBanda}`);
console.log(`La banda en sexto lugar es: ${nombreDeSextaBanda}`);


// EJERCICIO 5

let alumnas = [];
alumnas[0] = "Ada";
alumnas[1] = "Grace";
alumnas[2] = "Radia";
alumnas[3] = "Janie";
alumnas[4] = "Sheryl";
alumnas[5] = "Hedy";

console.log(alumnas[0])
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);
console.log(alumnas[5]);


// EJERCICIO 8

let etiquetasHtml = ["head", "body", "link", "form", "INPUT"];

console.log(etiquetasHtml[1].toUpperCase());

console.log(etiquetasHtml[4].toLowerCase());

console.log(etiquetasHtml.length);


// EJERCICIO 9

var ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon', 'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria'];

console.log(ganadorasRupaul[0]);
console.log(ganadorasRupaul[ganadorasRupaul.length - 1]);


//EJERCICIO 10

var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
 playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];

let longitudPlaylistNirvana = playlistNirvana.length;
let longitudPlaylistFoo =  playlistFoo.length;

if (longitudPlaylistNirvana > longitudPlaylistFoo) {
    console.log(`La playlist de Nirvana tiene más canciones`)
}
else if (longitudPlaylistFoo > longitudPlaylistNirvana) {
    console.log(`La playlist de Foo Fighters tiene más canciones`)
}
else {
    console.log(`Ambas playlists tienen la misma cantidad de canciones`)
};

