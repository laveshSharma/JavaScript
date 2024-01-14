//a) const tinderUsers = new Object(); they both are the empty object but the only difference between them is this is singleton object. 
const tinderUsers = {}; //b) non-singleton object
tinderUsers.id = 12;
tinderUsers.email = "lavesh@google.com"
tinderUsers.password = "someone@4132"
console.log(tinderUsers);

const anotherApp = {
    email: "lavesh@microsoft.com",
    fullName: {
        useFullName: {
            firstName: "Lavesh",
            lastName: "Sharma"
        }
    }
}

// How to join  objects together
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {...obj1, ...obj2};
console.log(obj3);