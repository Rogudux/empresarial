const person = {
    first:"Diego",
    second:"Sebastian",
    age:43
};

let {first, second, age =30} = person;

console.log(first);

let nombre = "Diego";
let [a1,a2,a3,a4,a5]:any= nombre;
console.log (a1,a2,a3,a4,a5);

class Persona{
    nombre:string;
    edades:number;
    constructor(nombre:string, edades:number){
        this.nombre = nombre;
        this.edades = edades;
    }
    getEdad():number{
        return this.edades;
    }
    setEdad(edades:number){
        this.edades = edades; 
    }

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }
}
let juan = new Persona('Juan', 30);
console.log(juan);
console.log(juan.nombre);
juan.nombre = "Pedro"
juan.setEdad(23);

console.log("Nombre:",  juan.getNombre());
console.log("Edad:",  juan.getEdad());