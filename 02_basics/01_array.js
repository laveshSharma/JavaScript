/*
Array: -The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name
a) JavaScript arrays are resizable and can contain a mix of different data types. 
b) JavaScript array are zero index


*/
// How to create an array
const myArr = [0, 1, 2, 3, 4, 5];
const heroes = new Array("Batman", "wonderWoman", "Superman");

console.log(myArr);
console.log(heroes);

// Array Methods

myArr.push(6) //push an element at the end of array => ouput:- [0, 1, 2, 3, 4, 5, 6]
myArr.pop(); // removes an element form the end of an array => ouput:- [0, 1, 2, 3, 4, 5]
myArr.unshift(6) //add an element at the start of an array => ouput:- [6, 0, 1, 2, 3, 4, 5]
myArr.shift() //removes an element from the start of an array => ouput:- [0, 1, 2, 3, 4, 5]

console.log(myArr);

// slice, splice
console.log("A ", myArr);
const myN1 = myArr.slice(1, 3)
console.log(myN1);

console.log("B ", myArr);
const myN2 = myArr.splice(1, 3)
console.log(myN2);

console.log("C ", myArr);
