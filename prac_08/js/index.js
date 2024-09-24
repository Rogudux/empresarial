console.log("Hola codespaces");
var nuevoHeroe = 'SUperman';
function returnName() {
    return nuevoHeroe;
}
var heroeNombre = returnName();
var otraVariable = returnName();
console.log('De que tipo es: ', typeof otraVariable);
//Parametros obligatorios en funciones
var nombreCompleto = function (nombre, apellido) {
    return "El nombre completo es ".concat(nombre, " ").concat(apellido);
};
var tuNombre = nombreCompleto("Diego", "Rojas");
console.log(tuNombre);
//Parametros opcionales en funciones
var nombreCompletoOpcional = function (nombre, apellido, mayusculas) {
    /*  if (mayusculas){
         return `El nombre completo es ${nombre} ${apellido || ""}`.toUpperCase();
     }else{
         return `El nombre completo es ${nombre} ${apellido || ""}`
     } */
    if (mayusculas === void 0) { mayusculas = false; }
    return mayusculas ? "El nombre completo es ".concat(nombre, " ").concat(apellido || "").toUpperCase() : "El nombre completo es ".concat(nombre, " ").concat(apellido || "");
};
var tuNombreOpcional = nombreCompletoOpcional("Saul", "Delgado", true);
console.log(tuNombreOpcional);
//Operador REST
var nombreCompletoRest = function (nombre) {
    var restoApellidos = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restoApellidos[_i - 1] = arguments[_i];
    }
    return "El nombre completo es ".concat(nombre, " ...RESTO ").concat(restoApellidos.join(' '));
};
var tuNombreRest = nombreCompletoRest("Saul", "Delgado", "Guadarrama", "Perez");
console.log(tuNombreRest);
