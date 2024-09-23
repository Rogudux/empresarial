function sum(a, b) {
    return a + b;
}
var resultado = sum(2, 4);
console.log(resultado);
var Fsuma = sum(1, 3);
console.log(Fsuma);
//Funciones arrow
var sumaArrow = function (a, b) { return a + b; };
var resultadoArrow = sumaArrow(2, 4);
console.log(resultadoArrow);
var xd = function (a, b) {
    var suma = a + b;
    return suma;
};
var funcionAnonima = function () {
    console.log("Hola gente");
};
console.log(xd(5, 6));
console.log(funcionAnonima());
function presentacion(nombre) {
    return "Hola ".concat(nombre);
}
console.log(presentacion("Diego"));
var hola = function (nombre) { return "Hola ".concat(nombre); };
hola('Diego');
function error(mensaje) {
    var mensajeError = document.getElementById("error");
    mensajeError.innerHTML = "Fuck Error";
    throw new Error(mensaje);
}
var operacion = function (a, b, accion) { return accion === "suma" ? a + b : accion === "resta" ? a - b : accion === "multi" ? a * b : accion === "divi" ? a / b : 0; };
console.log(operacion(2, 3, "suma"));
console.log(operacion(2, 3, "resta"));
console.log(operacion(2, 3, "multi"));
console.log(operacion(2, 3, "divi"));
