// const person = {
//     first:"Diego",
//     second:"Sebastian",
//     age:43
// };

// let {first, second, age =30} = person;

// console.log(first);

// let nombre = "Diego";
// let [a1,a2,a3,a4,a5]:any= nombre;
// console.log (a1,a2,a3,a4,a5);

class Persona{
    nombre:string;
    edad:number;
    correo:string;
    constructor(nombre:string, edades:number, correo:string){
        this.nombre = nombre;
        this.edad = edades;
        this.correo = correo;
    }
    getEdad():number{
        return this.edad;
    }
    setEdad(edades:number){
        this.edad = edades; 
    }

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }
    setCorreo(correo:string){
        this.correo =correo;
    }
    getCorreo():string{
        return this.correo;
    }

    nombreEdad():string{
        return `El nombre completo es:${this.getNombre} tiene ${this.getEdad()}`  
    }
    nombreCorreo():string{ 
        return `El nombre es: ${this.getNombre} y el correo: ${this.getCorreo}`
    }
    mostrarInformacion():string{
        return `Nombre: ${this.getNombre()}, Edad: ${this.getEdad()}, Correo: ${this.getCorreo()}`;
    }

}

class Productos{
    nombre:string;
    id:number;
    categoria:string;
    constructor(nombre:string, id:number, categoria:string){
        this.nombre = nombre;
        this.id = id;
        this.categoria = categoria;
    }
    
    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }
    getID():number{
        return this.id;
    }
    setID(id:number){
        this.id = id;
    }
    getCategoria():string{
        return this.categoria;
    }
    setCategoria(categoria:string){
        this.categoria = categoria;
    }
    Inventario():string{
        return ` ID: ${this.id}, Nombre: ${this.nombre}, Categoria: ${this.categoria}`;
    }
    agregarProductoCarrito():string{
        return `Se agre tu prducto con exito`
    }
    eliminarProductoCarrito():string{
        return `Se elimino tu producto con exito`
    }
}

class Usuario extends Persona{
    id:number;
    constructor(nombre:string, edad:number, correo:string, id:number){
        super(nombre, edad, correo);
        this.id = id;
    }
    getID():number{
        return this.id;
    }
    setID(id:number){
        this.id = id;
    }
    Info():string{
        return `El nombre completo es: ${this.getNombre()}, tiene ${this.getEdad()}, Correo: ${this.getCorreo()} y su ID es: ${this.getID()}`;
    }
    iniciarSesion(inicio:string){
        if (inicio === this.getCorreo()) {
            console.log("Pago validado");
        } else {
            console.log("Pago no validado");
        }
    }
    consultarID(){
        return `Tu ID de usuario es: ${this.getID()}`
    }

}

class Carrito{
    total:number;
    productos:number;
    subtotal:number;
    constructor(total:number, productos:number, subtotal:number){
        this.total = total;
        this.productos = productos;
        this.subtotal = subtotal;
}

    getTotal():number{
        return this.total;
    }
    setTotal(total:number){
        this.total = total;
    }
    getSubtotal():number{
        return this.subtotal;
    }
    setSubtotal(subtotal:number){
        this.subtotal = subtotal;
    }
    getProductos():number{
        return this.productos;
    }
    setProductos(productos:number){
        this.productos = productos;
    }
    agregarProducto():number{
        this.productos++;
        return this.getProductos();
    }
    eliminarProducto():number{
        this.productos--;
        return this.getProductos();
    }
    calcularTotal():number{
        this.total = this.subtotal *1.16 ;
        return this.getTotal();
    }

}

class Pago{
    pago:number;
    banco:string;
    protected codigo:number;
    constructor (pago:number, codigo:number, banco:string){
        this.pago = pago;
        this.codigo = codigo;
        this.banco = banco;
    }
    getPago():number{
        return this.pago;
    }
    setPago(pago:number){
        this.pago = pago;
    }
    getBanco():string{
        return this.banco;
    }
    setBanco(banco:string){
        this.banco = banco;
    }
    getCodigo():number{
        return this.codigo;
    }
    setCodigo(codigo:number){
        this.codigo = codigo;
    }
    realizarPago():string{
        return `Se realizo el pago de ${this.getPago()} en ${this.getBanco()} con el codigo ${this.getCodigo()}`;
    }
    validarPago(valido: number) {
        if (valido === this.getCodigo()) {
            console.log("Pago validado");
        } else {
            console.log("Pago no validado");
        }
    }
    mensajeDeGracias():string {
        return "Gracias por su compra";
    }
}

const pago = new Pago(1000, 32, "Bancomer");
console.log(pago.realizarPago());
pago.validarPago(32);
console.log(pago.mensajeDeGracias());
