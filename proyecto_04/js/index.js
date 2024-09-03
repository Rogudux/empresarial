var tupla = ["oli", 43, true];
console.log(tupla[0]);
var estadoCivil = (tupla[2]) ? 'Soltero' : "Casado";
console.log(estadoCivil);
var ourReadonTuple = [32, 54, 'Diego '];
//ourReadonTuple.push ('ds')
//ourReadonTuple.push ('d') 
console.log(ourReadonTuple);
console.log(ourReadonTuple[2]);
var person = {
    first: "Diego",
    second: "Sebastian",
    age: 43
};
person.first = "Pablo";
var first = person.first, second = person.second, _a = person.age, age = _a === void 0 ? 30 : _a;
first = "Pipe";
console.log(first);
function fibonacciSeries(n) {
    var series = [0, 1];
    for (var i = 2; i < n; i++) {
        var nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
    return series;
}
var n = 10; // Change this value to generate Fibonacci series up to a different number
var fibonacci = fibonacciSeries(n);
console.log(fibonacci);
