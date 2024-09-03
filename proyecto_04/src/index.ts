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

function fibonacciSeries(n: number): number[] {
    const series: number[] = [0, 1];
 
    for (let i = 2; i < n; i++) {
        const nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
 
    return series;
}
 
const n:number = 10; // Change this value to generate Fibonacci series up to a different number
const fibonacci:number[] = fibonacciSeries(n);
console.log(fibonacci);
