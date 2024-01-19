//for each loop
const coding = ["js", "Python", "Ruby", "Rust", "Swift"]

coding.forEach( function(item){
    // console.log(item)
} )

coding.forEach( (val) => {
    // console.log(val);
}  )

function printMe(item, index, arr) {
    // console.log(item, index, arr);
}

coding.forEach(printMe);

const programming = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }

]

programming.forEach( (item) => {
    console.log(item.languageName);
}   )