console.log("Hola codespaces");

var nuevoHeroe = 'SUperman';
function returnName() {
    return nuevoHeroe;
}

const heroeNombre = returnName();
let otraVariable = returnName();
console.log('De que tipo es: ', typeof otraVariable);


//Parametros obligatorios en funciones

const nombreCompleto = (nombre:string, apellido:string) => {
    return `El nombre completo es ${nombre} ${apellido}`
}


const tuNombre = nombreCompleto("Diego", "Rojas");
console.log(tuNombre);

//Parametros opcionales en funciones
const nombreCompletoOpcional = (nombre:string, apellido?:string, mayusculas: boolean = false) => {   //Poniendole el signo de interrogacion el apellido no se obligatorio
   /*  if (mayusculas){
        return `El nombre completo es ${nombre} ${apellido || ""}`.toUpperCase();
    }else{
        return `El nombre completo es ${nombre} ${apellido || ""}`
    } */

    return mayusculas ? `El nombre completo es ${nombre} ${apellido || ""}`.toUpperCase() : `El nombre completo es ${nombre} ${apellido || ""}`;
}

const tuNombreOpcional = nombreCompletoOpcional("Saul","Delgado",true);
console.log(tuNombreOpcional);

//Operador REST

const nombreCompletoRest = (nombre:string, ...restoApellidos:string[])=>{
    return `El nombre completo es ${nombre} ...RESTO ${restoApellidos.join(' ')}`
}

const tuNombreRest = nombreCompletoRest("Saul","Delgado","Guadarrama","Perez");
console.log(tuNombreRest);