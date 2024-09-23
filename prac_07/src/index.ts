function sum(a:number, b:number):number{
    return a + b;
}

let resultado = sum(2,4);
console.log(resultado);

const Fsuma = sum(1,3);
console.log(Fsuma);

//Funciones arrow

const sumaArrow = (a:number, b:number):number => a + b;
let resultadoArrow:number = sumaArrow(2,4);
console.log(resultadoArrow);

const xd = (a:number, b:number):number =>{
    let suma:number = a + b;
    return suma;
}


let funcionAnonima = function (){
    console.log ("Hola gente");
}

console.log(xd(5,6));

console.log(funcionAnonima());

function presentacion(nombre:string):string {
    return `Hola ${nombre}`;
}

console.log(presentacion("Diego"));  

let hola = (nombre:string):string => `Hola ${nombre}`;
hola('Diego')

// function error(mensaje:string):never {
    
//     let mensajeError:any = document.getElementById("error");
//     mensajeError.innerHTML = "Fuck Error"

//     throw new Error(mensaje);
// }

type accion = "suma" |"resta" |"multi" |"divi"

let operacion = (a:number, b:number, accion:accion) =>{ return accion==="suma" ? a + b : accion === "resta" ? a-b: accion === "multi" ? a*b: accion === "divi" ? a/b: 0;}

console.log(operacion(2,3,"suma"))
console.log(operacion(2,3,"resta"))
console.log(operacion(2,3,"multi"))
console.log(operacion(2,3,"divi"))













