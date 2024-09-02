let tupla:[string, number, boolean] = ["oli", 43, true];

console.log(tupla[0]);

let estadoCivil:string = (tupla[2]) ? 'Soltero':"Casado";

console.log(estadoCivil);

const ourReadonTuple: readonly [number, number, string] = [32, 54, 'Diego ']

//ourReadonTuple.push ('ds')
//ourReadonTuple.push ('d') 

console.log(ourReadonTuple)
console.log(ourReadonTuple[2])

const person = {
    first:"Diego",
    second:"Sebastian",
    age:43
};

person.first = "Pablo";



let {first, second, age =30} = person;

first = "Pipe";

console.log(first);

for(let i=0; i = 100; i++)
    {
        i=0
    }