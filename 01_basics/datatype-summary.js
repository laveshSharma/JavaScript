// javaScript is a dynamically typed language which means we can't define the type of data js automatically detect it.

/*
dataType summary:

Primitve:- 7 types = number, boolean, string, null, undefined, symbol, bigInt.

Reference(non-primitive):- Array, Function, Objects.

typeof tells the dataType of a Variable.

non-primitive ka data type hamesa object hota hai par function ka object function hota

*/
const heros =["shkatiman", "IronMan","Captain-America"];
console.log(typeof heros);
// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
Memory in javaScript

Stack(primitive), Heap(non-primitive values)
stack => copy of value milati hai which means change in the other variable does not effect the original value for e.g.:-

Heap => it take the reference of the value which means change in the other variable effect the origianl value, it take the reference which means pointing to original value for e.gl:-

*/

// stack example

let userName = "lavesh" 
let userNameTwo = userName;
userNameTwo = "Kunal";
console.log(userName);
console.log(userNameTwo);//{ouput be userName = lavesh and userNameTwo = kunal couz it copy the value of the userName variable thats why the changes will only shown in the userNameTwo Variable}

// Heap Example
let userOne ={
    email: "user@google.com",
    age: 19
}

let userTwo = userOne;
userTwo.email = "lavesh@google.com";

console.log(userOne);
console.log(userTwo); //{outbe userOne email = "lavesh@gmail.com" and userTwo email = "lavesh@gmail.com" couz it will take the reference from the original value that's why the changes effect in both the variables}