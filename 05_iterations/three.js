// for of loop
const number = [1, 2, 3, 4, 5]
for (const num of number){
    // console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting){
    if(greet == " "){
        continue
    }
    // console.log(greet);
}

//Maps
const map = new Map();
map.set("IN", "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("UK", "UNITED KINGDOM")

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

// for of loop is not iterable on objects 