const person = {
    first:"Diego",
    second:"Sebastian",
    age:43
};

let {first, second, age =30} = person;

console.log(first);

let nombre = "Diego";
let [a1,a2,a3,a4,a5]:any= nombre;
console.log (a1,a2,a3,a4,a5);
