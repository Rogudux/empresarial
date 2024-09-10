// const person = {
//     first:"Diego",
//     second:"Sebastian",
//     age:43
// };
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let {first, second, age =30} = person;
// console.log(first);
// let nombre = "Diego";
// let [a1,a2,a3,a4,a5]:any= nombre;
// console.log (a1,a2,a3,a4,a5);
var Persona = /** @class */ (function () {
    function Persona(nombre, edades, correo) {
        this.nombre = nombre;
        this.edad = edades;
        this.correo = correo;
    }
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edades) {
        this.edad = edades;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.setCorreo = function (correo) {
        this.correo = correo;
    };
    Persona.prototype.getCorreo = function () {
        return this.correo;
    };
    Persona.prototype.nombreEdad = function () {
        return "El nombre completo es:".concat(this.getNombre, " tiene ").concat(this.getEdad());
    };
    Persona.prototype.nombreCorreo = function () {
        return "El nombre es: ".concat(this.getNombre, " y el correo: ").concat(this.getCorreo);
    };
    Persona.prototype.mostrarInformacion = function () {
        return "Nombre: ".concat(this.getNombre(), ", Edad: ").concat(this.getEdad(), ", Correo: ").concat(this.getCorreo());
    };
    return Persona;
}());
var Productos = /** @class */ (function () {
    function Productos(nombre, id, categoria) {
        this.nombre = nombre;
        this.id = id;
        this.categoria = categoria;
    }
    Productos.prototype.getNombre = function () {
        return this.nombre;
    };
    Productos.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Productos.prototype.getID = function () {
        return this.id;
    };
    Productos.prototype.setID = function (id) {
        this.id = id;
    };
    Productos.prototype.getCategoria = function () {
        return this.categoria;
    };
    Productos.prototype.setCategoria = function (categoria) {
        this.categoria = categoria;
    };
    Productos.prototype.Inventario = function () {
        return " ID: ".concat(this.id, ", Nombre: ").concat(this.nombre, ", Categoria: ").concat(this.categoria);
    };
    Productos.prototype.agregarProductoCarrito = function () {
        return "Se agre tu prducto con exito";
    };
    Productos.prototype.eliminarProductoCarrito = function () {
        return "Se elimino tu producto con exito";
    };
    return Productos;
}());
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(nombre, edad, correo, id) {
        var _this = _super.call(this, nombre, edad, correo) || this;
        _this.id = id;
        return _this;
    }
    Usuario.prototype.getID = function () {
        return this.id;
    };
    Usuario.prototype.setID = function (id) {
        this.id = id;
    };
    Usuario.prototype.Info = function () {
        return "El nombre completo es: ".concat(this.getNombre(), ", tiene ").concat(this.getEdad(), ", Correo: ").concat(this.getCorreo(), " y su ID es: ").concat(this.getID());
    };
    Usuario.prototype.iniciarSesion = function (inicio) {
        if (inicio === this.getCorreo()) {
            console.log("Pago validado");
        }
        else {
            console.log("Pago no validado");
        }
    };
    Usuario.prototype.consultarID = function () {
        return "Tu ID de usuario es: ".concat(this.getID());
    };
    return Usuario;
}(Persona));
var Carrito = /** @class */ (function () {
    function Carrito(total, productos, subtotal) {
        this.total = total;
        this.productos = productos;
        this.subtotal = subtotal;
    }
    Carrito.prototype.getTotal = function () {
        return this.total;
    };
    Carrito.prototype.setTotal = function (total) {
        this.total = total;
    };
    Carrito.prototype.getSubtotal = function () {
        return this.subtotal;
    };
    Carrito.prototype.setSubtotal = function (subtotal) {
        this.subtotal = subtotal;
    };
    Carrito.prototype.getProductos = function () {
        return this.productos;
    };
    Carrito.prototype.setProductos = function (productos) {
        this.productos = productos;
    };
    Carrito.prototype.agregarProducto = function () {
        this.productos++;
        return this.getProductos();
    };
    Carrito.prototype.eliminarProducto = function () {
        this.productos--;
        return this.getProductos();
    };
    Carrito.prototype.calcularTotal = function () {
        this.total = this.subtotal * 1.16;
        return this.getTotal();
    };
    return Carrito;
}());
var Pago = /** @class */ (function () {
    function Pago(pago, codigo, banco) {
        this.pago = pago;
        this.codigo = codigo;
        this.banco = banco;
    }
    Pago.prototype.getPago = function () {
        return this.pago;
    };
    Pago.prototype.setPago = function (pago) {
        this.pago = pago;
    };
    Pago.prototype.getBanco = function () {
        return this.banco;
    };
    Pago.prototype.setBanco = function (banco) {
        this.banco = banco;
    };
    Pago.prototype.getCodigo = function () {
        return this.codigo;
    };
    Pago.prototype.setCodigo = function (codigo) {
        this.codigo = codigo;
    };
    Pago.prototype.realizarPago = function () {
        return "Se realizo el pago de ".concat(this.getPago(), " en ").concat(this.getBanco(), " con el codigo ").concat(this.getCodigo());
    };
    Pago.prototype.validarPago = function (valido) {
        if (valido === this.getCodigo()) {
            console.log("Pago validado");
        }
        else {
            console.log("Pago no validado");
        }
    };
    Pago.prototype.mensajeDeGracias = function () {
        return "Gracias por su compra";
    };
    return Pago;
}());
var pago = new Pago(1000, 32, "Bancomer");
console.log(pago.realizarPago());
pago.validarPago(32);
console.log(pago.mensajeDeGracias());
