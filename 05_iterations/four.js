const myObject = {
 js: "javaScript",
 cpp: "c++",
 py: "python",
 rb: "ruby"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "java", "py", "ruby", "swift"]
for (const key in programming) {
//    console.log(programming[key]);
}

//for in loop m map m iteration nahi hota hai