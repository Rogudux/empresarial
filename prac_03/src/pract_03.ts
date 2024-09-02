let normalx:any = 'hola'
normalx = 10;
normalx = true;


let usuario:any = 21
console.log(normalx);

let value: any;
console.log(value)
//Hola mundo 

value = true;
value = 10;
value = 'hola'
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
console.log(value);

let myValue:any;
console.log('Tipo desconocido cawn', myValue)

const edad:number = 18;
console.log("edad",edad);
console.log('edad: ',edad);

const sueldo:number = 1.234;
const total:number = Number('5678'); //CAST 

console.log(sueldo);
console.log(total);

const  personaje: string = "el chavo"
const  otroPersonaje: string = "Jirafales"
const otroMas:string = `Profesor jirafales y ${personaje}`;
console.log(otroMas);

const heroe:string = 'deadpool\'s house'
console.log(heroe);
console.log(heroe.toUpperCase());

let vengador: any;
vengador = 'Dr. strange';
console.log(vengador.charAt(0));

vengador = 150.55;

console.log(vengador.toFixed(1)) //el uno representa cuantos decimales queremos despues del punto
console.log((vengador as number).toFixed(1));
console.log(<number>vengador.toFixed(1));

let personas:string[] = ["Carlos","Saul","Luis"];
console.log(personas)
console.log(personas[0])
console.log(personas[3])

let numeros:number[] = [1,2,3,4,5];
let numeros2: Array<number> = [6,7,8,9,10];

console.log(numeros, numeros2);

let listaNumeros : any = document.getElementById("listaNumeros");
let listaNumeros2 : any = document.getElementById("listaNumeros2");

for (let numero of numeros){
    listaNumeros.innerHTML += `<li>${numero}</li>`
}

for (let numero2 of numeros2){
    listaNumeros2.innerHTML += `<li>${numero2}</li>`
}

let miArray : (string | number)[] = ['Carlos',54,24,'Saul',19, 'Luis',20];
console.log(miArray);
let miArray2 : Array <string | number> = ['Mate', 'Rayo McQueen', 19, 'Hudson Hornet'];
console.log(miArray2);
let miArray3 : Array <any> = [true, 10, 'hola', 20.5]
console.log(miArray3);
let miArray4 : number[] = [];
miArray4.push(1);
miArray4.push(2);
miArray4.push(3);
console.log(miArray4.length);
console.log(miArray4.reverse())

let miArray5 = [];
miArray5.push('Carlos');
miArray5.push(20);
miArray5.push(true);
miArray5.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhCRLDorEoL4rXQ5P6ZbeTBIJemh2vakP_A&s');
miArray5.push('Juan');
miArray5.push(25);
miArray5.push('https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/36969.png'); 

// Obtener las figuras por ID
let figura1: any = document.getElementById("figura1");
let figura2:any = document.getElementById("figura2");

// Crear y agregar la primera imagen con su caption
let imagen1 : any = document.createElement("img");
imagen1.src = miArray5[3]; // URL de la imagen 1
let caption1 = document.createElement("figcaption");
caption1.textContent = "Carlos"; // Título de la imagen 1
figura1.appendChild(imagen1);
figura1.appendChild(caption1);

// Crear y agregar la segunda imagen con su caption
let imagen2:any = document.createElement("img");
imagen2.src = miArray5[6]; // URL de la imagen 2
let caption2 = document.createElement("figcaption");
caption2.textContent = "Juan"; // Título de la imagen 2
figura2.appendChild(imagen2);
figura2.appendChild(caption2);