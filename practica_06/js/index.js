//ENUMS
var Color;
(function (Color) {
    Color[Color["Rojo"] = 200] = "Rojo";
    Color[Color["Verde"] = 201] = "Verde";
    Color[Color["Azul"] = 202] = "Azul";
})(Color || (Color = {}));
console.log(Color.Verde);
console.log(Color.Rojo);
var color1 = Color.Rojo;
color1 = Color.Verde;
// color1 = 29;  --------- no deja porque la variable color1 ahora es de tipo 'Color'
console.log('Color1 ', color1);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "Norte";
    CardinalDirections["South"] = "Sur";
    CardinalDirections["East"] = "Este";
    CardinalDirections["West"] = "Oeste";
})(CardinalDirections || (CardinalDirections = {}));
var direction = CardinalDirections.North;
console.log('direction ', direction);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["InternalServerError"] = 500] = "InternalServerError";
})(StatusCodes || (StatusCodes = {}));
var statusCode = StatusCodes.Success;
console.log('status code: ', statusCode);
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["mid"] = 5] = "mid";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var volumen = Volumen.mid;
console.log('Volumen ', volumen);
var CantidadProductos;
(function (CantidadProductos) {
    CantidadProductos[CantidadProductos["max"] = 200] = "max";
    CantidadProductos[CantidadProductos["mix"] = 1] = "mix";
    CantidadProductos[CantidadProductos["vacio"] = 0] = "vacio";
})(CantidadProductos || (CantidadProductos = {}));
var productos = CantidadProductos.max;
console.log('Cantidad de productos en el carrito: ', productos);
