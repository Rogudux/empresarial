var normalx = 'hola';
normalx = 10;
normalx = true;
var usuario = 21;
console.log(normalx);
var value;
console.log(value);
//Hola mundo 
value = true;
value = 10;
value = 'hola';
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
console.log(value);
var myValue;
console.log('Tipo desconocido cawn', myValue);
var edad = 18;
console.log("edad", edad);
console.log('edad: ', edad);
var sueldo = 1.234;
var total = Number('5678'); //CAST 
console.log(sueldo);
console.log(total);
var personaje = "el chavo";
var otroPersonaje = "Jirafales";
var otroMas = "Profesor jirafales y ".concat(personaje);
console.log(otroMas);
var heroe = 'deadpool\'s house';
console.log(heroe);
console.log(heroe.toUpperCase());
var vengador;
vengador = 'Dr. strange';
console.log(vengador.charAt(0));
vengador = 150.55;
console.log(vengador.toFixed(1)); //el uno representa cuantos decimales queremos despues del punto
console.log(vengador.toFixed(1));
console.log(vengador.toFixed(1));
var personas = ["Carlos", "Saul", "Luis"];
console.log(personas);
console.log(personas[0]);
console.log(personas[3]);
var numeros = [1, 2, 3, 4, 5];
var numeros2 = [6, 7, 8, 9, 10];
console.log(numeros, numeros2);
var listaNumeros = document.getElementById("listaNumeros");
var listaNumeros2 = document.getElementById("listaNumeros2");
for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
    var numero = numeros_1[_i];
    listaNumeros.innerHTML += "<li>".concat(numero, "</li>");
}
for (var _a = 0, numeros2_1 = numeros2; _a < numeros2_1.length; _a++) {
    var numero2 = numeros2_1[_a];
    listaNumeros2.innerHTML += "<li>".concat(numero2, "</li>");
}
var miArray = ['Carlos', 54, 24, 'Saul', 19, 'Luis', 20];
console.log(miArray);
var miArray2 = ['Mate', 'Rayo McQueen', 19, 'Hudson Hornet'];
console.log(miArray2);
var miArray3 = [true, 10, 'hola', 20.5];
console.log(miArray3);
var miArray4 = [];
miArray4.push(1);
miArray4.push(2);
miArray4.push(3);
console.log(miArray4.length);
console.log(miArray4.reverse());
var miArray5 = [];
miArray5.push('Diego');
miArray5.push(20);
miArray5.push(true);
miArray5.push('https://static.wikia.nocookie.net/doblaje/images/3/34/Diego_%281%29.png/revision/latest?cb=20140802080253&path-prefix=es');
miArray5.push('Sebastian');
miArray5.push(25);
miArray5.push('https://disneyypixar.fandom.com/es/wiki/Sebastian?file=Sebastian_KH2.png');
// Obtener las figuras por ID
var figura1 = document.getElementById("figura1");
var figura2 = document.getElementById("figura2");
// Crear y agregar la primera imagen con su caption
var imagen1 = document.createElement("img");
imagen1.src = miArray5[3]; // URL de la imagen 1
var caption1 = document.createElement("figcaption");
caption1.textContent = "Carlos"; // Título de la imagen 1
figura1.appendChild(imagen1);
figura1.appendChild(caption1);
// Crear y agregar la segunda imagen con su caption
var imagen2 = document.createElement("img");
imagen2.src = miArray5[6]; // URL de la imagen 2
var caption2 = document.createElement("figcaption");
caption2.textContent = "Juan"; // Título de la imagen 2
figura2.appendChild(imagen2);
figura2.appendChild(caption2);