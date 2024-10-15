
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



// Reto 1: Pares e impares
const numerosAleatorios = _.times(100, () => _.random(0, 100));
const [pares, impares] = _.partition(numerosAleatorios, (n) => n % 2 === 0);
document.getElementById('paresImpares').textContent = `Pares: ${pares}\nImpares: ${impares}`;


// Reto 2: Primos y no primos
const esPrimo = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const [primos, noPrimos] = _.partition(numerosAleatorios, esPrimo);
document.getElementById('primosNoPrimos').textContent = `Primos: ${primos}\nNo Primos: ${noPrimos}`;


// Reto 3: Nombres con 'A'
let nombres = ['Ana', 'Pedro', 'Alfredo', 'Luis', 'Amelia', 'Carlos', 'Andrea', 'Sebastian', 'Alonso', 'Maria'];
const [nombresConA, nombresSinA] = _.partition(nombres, (nombre) => nombre.toLowerCase().startsWith('a'));
document.getElementById('nombresConA').textContent = `Con A: ${nombresConA}\nSin A: ${nombresSinA}`;

