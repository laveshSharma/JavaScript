/*
const, let, var are used to declare a variable in js
const are used to declare a constant variable which mean it's immutable(once declare doesn't change later)
let, var are mutable variable declaration which means we can re-assign value later

why we need three different variable declaration?
1) (a) let, const are modern js variable delcaration
   (b) var is old js varibale declaration.

2) (a) var is a global scoped varibale declaration
   (b) let and const are braces scoped variable declaration {we will discuss scoping in detail}  
*/
/*
Data Types
There are two major type of data types:
a) primitive and b) non-primitive dataTypes
a) Primitve: number, boolean, string(these three are most used or important one), null, undefined, symbol, bigInt.
b) nonPrimitve: Objects, Arrays, Functions.

type of operator:-  tells the dataType of the value
null ka dataType vo ek object ??
NaN{not a number} uska dataType bhi ek number hai??

Conversion/Type Conversion
string to number:- Number() keyword se convert karte hai
"33":- type number value 33
" ":- type number value 0
"hitesh":- type number value NaN
boolean ko number m convet kiya toh:- true => 1 and false => 0;

Number to String:- String() keyword se convert karte hai

boolean m convert karne k liye Boolean() keyword se karte hai
"":- false
0:- false
NaN:- false
udefined:- false
null:- false

// const string = true;
// console.log(typeof string);
// const num = Number(string);
// console.log(typeof Number(string), Number(string));

// const num = undefined;
// console.log(typeof num);
// const string = Boolean(num);
// console.log(typeof string, string);

*/

/*
Mathematical Operations
Addition, Subtracion, Multiplication, Division, Modulus
Type Corecion:- Javascript automatically trying to convert one dataType into another dataType
a)When a numeric value is concatenated with a string using the + operator, JavaScript coerces the number to a string.
b)When a string value is involved in an arithmetic operation, JavaScript attempts to convert it to a numeric value.
c)When comparing values using the == (loose equality) or != (loose inequality) operators, JavaScript performs type coercion to make the values comparable.
d)JavaScript has a concept of truthy and falsy values, where certain values are coerced to true or false in a boolean context.
e)Falsy values include false, 0, “” (empty string), null, undefined, and NaN. All other values are considered truthy when coerced to a boolean.

Maths methods{i don't know what to call}:-
Math.abs, Math.ceil, Math.floor, Math.random(), Math.max, Math.min

*/

/*
Array/Array Methods
*/
// const arr = [1, 2, 3, 4, 5];
// arr[1] = 6;
// console.log(arr);
// const arr1 = new Array(6, 7,  8, 9, 10);

// const marvelHeros = ["ironMan", "spiderMan",  "captianAmerica", "thor", "blackPanther"]

// const dcHeros = ["superMan", "batMan", "wonderWoman", "flash", "aquaMan"]

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[0][5]);
// const newHeros = marvelHeros.concat(dcHeros);
// console.log(newHeros);
// console.log(arr[2]);
// console.log(arr1);

// arr.push(6);
// arr.pop();
// arr.unshift(0);
// arr.shift();
// console.log(arr.indexOf(5));
// console.log(arr1.includes(15));

// slice, splice
// console.log("A: ", marvelHeros);
// const slice = marvelHeros.slice(1,4);
// console.log("Slice:", slice)

// console.log("B: ", dcHeros); 
// const splice = dcHeros.splice(1,4);
// console.log("Splice: ", splice);
// console.log("C: ", dcHeros);

/*
objects/objects methods
*/

const isLoggedIn = {
   name: "lavesh",
   age: 21,
   isLoggedIn: true
}

