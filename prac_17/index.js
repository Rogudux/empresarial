const _ = require('lodash');

const array = [1,2,3,4,5,6,7,8,9,10];

console.log(_.chunk(array, 5));

let arreglo = ["juan", '', 'Pedro', 'Luis', 'Ana', 'Maria', 'Jose', 'Carlos', ''];

console.log(_.chunk(arreglo, 2));
console.log(_.compact(arreglo));

let array1 = ['superman','Batman', 'Flash'];
let array2 = ['Thor', 'Ironman', 'Quicksilver'];

console.log(_.concat(array1, array2));

let array3 = ['El chavo', 'El chapulin colorado', 'Doctor Chapatin'];
let array4 = ['El chavo', 'El chompiras','El botijas', 'El peterete' ];

console.log(_.difference(array3,array4));

let array5 = ['a','b','c','d','e','f','g','h','i','j'];
//elimina los primeros n en el array
console.log(_.drop(array5, 3));

const numeroAleatorio = _.random(0,100);
console.log(numeroAleatorio);

const saludar = () =>{
    console.log('Hola mundo');
}

const saludarMundo = _.once(saludar);

saludarMundo();
saludarMundo();
saludarMundo();
saludarMundo();
saludarMundo();
saludarMundo();
saludarMundo();

const users = [
    {usuario: 'Pipe', edad: 25},
    {usuario: 'Juanito', edad: 25},
    {usuario: 'Marco', edad: 25},
    {usuario: 'Sebastian', edad: 25},
    {usuario: 'Cris', edad: 25}
]

const sortedUsers = _.sortBy(users, ['usuario'],['asc']);
console.log(sortedUsers);

const obtieneNumero = () =>{
    return _.random(0,100);
}

let result = _.times(5, obtieneNumero);
console.log(result);

//Reto1
//Crear un arreglo con 100 numeros aleatorios y mostrar los numeros pares y los impares en distintos arreglos

//RETO2
//Crear un arreglo con 100 numeros aleatorios y mostrar los numeros primos y los no primos en arreglos distintos 

//Reto 3
//Crear un arreglo de nombres y mostrar los nombres que empiecen con la letra a
//los q no empiecen ponlo en arreglo diferente 