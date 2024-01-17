function sayMyName(){
    console.log("L");
    console.log("a");
    console.log("v");
    console.log("e");
    console.log("s");
    console.log("h");
}
// sayMyName();

// function isLoggedIn(userName){
//     return `${userName} just loggedIn`
// }

// const result = isLoggedIn("Lavesh")
// console.log(result);

// if user not passed any value
function isLoggedIn(userName){
    if(!userName){
        return `Please give me username`
    }
    return `${userName} just loggedIn`
}
const result = isLoggedIn()
console.log(result);

// you don't know how many arguments will come like in e-commerce shopping website
function calcualteCartPrice(...num1) {
    return num1;
} //using rest operator 
/*
rest and spread operator look same three dots(...), but we will study them later in detail
*/
console.log(calcualteCartPrice(200, 400, 500));

// How to pass an object in function
const user = {
    name: "Lavesh",
    price: 99
}

function handleObject(anyObject) {
    return `Username is ${anyObject.name} and price is ${anyObject.price} `

}

console.log(handleObject(user));
console.log(handleObject({
    name: "Kunal",
    price: 399
}));

// How to pass an array in function
const myNewArray = [200, 400, 1000, 8000];

function handleArray(anyArray) {
    return anyArray[1]
}

console.log(handleArray(myNewArray));
console.log(handleArray([100, 5000, 3000, 8000]));