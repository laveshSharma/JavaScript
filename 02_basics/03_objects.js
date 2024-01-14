// object.create this is also an way to creat an object using object constuctor which can create a singleton object.

// Object literal
/*
Special case in interview where we have to add an symbol in object as a symbol
*/
const mySym = Symbol("key1") 
const jsUser = {
    name: "Lavesh",
    "full name": "Lavesh Sharma",
    [mySym]: "myKey1",
    age: 21,
    email: "lavesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}
// access an object
console.log(jsUser.email);
console.log(jsUser["full name"]);

// How to edit a value in object
jsUser.email = "lavesh@microsoft.com";
console.log(jsUser.email);
Object.freeze(jsUser); //this will freeze the object which means further change in the object can't be done for e.g:-
jsUser.email = "lavesh@chatgpt.com"
console.log(jsUser.email);
console.log(jsUser);