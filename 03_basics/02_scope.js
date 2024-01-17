/*
scope: two types
a)global scope:- var variable declaration (we avoid using var variable declaration)
b)block scope:- let, const variable declaration ({} curly braces are scoped )
(in global whichever variable we declare we can access in any scope but in block scope variable can't access outside the scope of the fucntion.)
*/
let a = 300;
if(true){
    let a = 30;
    const b = 40;
    console.log("Inner:" , a);
}
console.log(a);

//Nested Scope (the inner fucntion can access the outer function variable because for them the outer function is the globle scope but the outer function can't access the inner varable because they are block scope {(there is analogy i used to remember them, is that the younger sibling can take the ice-cream form the elder sibling but the eldert slibling can't take the ice-cream form the younger sbling 😅 )})
function one(){
    const username = "Lavesh"
    function two(){
        const website = " Youtube channel"
        console.log(username + website);
    }
    two()
}
one()
// ++++++++++++++++++++++ Interesting +++++++++++++++++
// function declaration
console.log(addOne(5));

function addOne(num){
    return num + 1

} 
// This means we can access function declaration before declaring the function 

// function expression
// console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}
// This meand we can't access function expression without declarting the function and there is a concept called hoisting which we learn later 
