// Immediately invoked function expression
(function chai() {
    console.log("DB CONNECTED");
})();

( (name) => {console.log(`DB CONNECTED TWO ${name}`);})("lavesh")

/*
named iffe
unmaed iffe
parameter iffe
two iffe at same time
*/