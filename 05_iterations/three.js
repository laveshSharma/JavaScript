const number = [1, 2, 3, 4, 5]
for (const num of number){
    console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting){
    if(greet == " "){
        continue
    }
    console.log(greet);
}