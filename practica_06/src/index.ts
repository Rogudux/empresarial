//ENUMS

enum Color { 
    Rojo = 200,
    Verde,
    Azul
}

console.log(Color.Verde);

console.log(Color.Rojo);

let color1 = Color.Rojo;

color1 = Color.Verde;
 // color1 = 29;  --------- no deja porque la variable color1 ahora es de tipo 'Color'
console.log('Color1 ',color1)

enum CardinalDirections{
    North = 'Norte',
    South = 'Sur',
    East = 'Este',
    West = 'Oeste'
}

let direction:CardinalDirections = CardinalDirections.North;
console.log('direction ', direction); 

enum StatusCodes{
    Success = 200,
    NotFound = 404,
    InternalServerError = 500
}

let statusCode : StatusCodes = StatusCodes.Success;

console.log('status code: ',statusCode);

enum Volumen{
    min = 1,
    mid = 5,
    max = 10
}

let volumen: Volumen = Volumen.mid;
console.log('Volumen ',volumen);