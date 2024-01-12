const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString()); //convert the number into string



// ++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math);
console.log(Math.round(4.6)); // round the number to the nearest integer
console.log(Math.ceil(4.2)); //always round up the number => output: 5
console.log(Math.floor(4.6)); //always round dowm the number => output: 4
console.log(Math.max(4, 8, 15)); //always return the largest of the numbers given as the input parameter => output: 15
console.log(Math.min(5, 10, 100)); //always return the minimum of the numbers given as the input parameter => output: 5

console.log(Math.random()); //always return a random number which is greater or equal to 0 and less than 1
// Dice Example
const min = 1;
const max = 6;
console.log(Math.floor(Math.random() * ( max - min + 1)) + min);