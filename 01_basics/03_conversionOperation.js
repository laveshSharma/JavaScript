let score = true;
let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
"33" => 33 number
"33abc" => type=number par value NaN(not a number)
"lavesh" => type=number par value NaN(not a number)
undefined => same as above
null => type=number par value 0
boolean => type=number par vaulue true = 1 and false = 0
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn, booleanIsLoggedIn);
/*
1 => true and 0 => false
" " => flase
"hitesh" => true 
yah par ek concept hai truthy and falsy value ka
0, "", NaN,  undefined, null are falsy value they always give false as a value inke alwa jo value hai vo true hai.
*/

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber, stringNumber);