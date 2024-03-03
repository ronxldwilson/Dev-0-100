
const fs = require("fs");


// This is an asynchronus function here as it ensures that main thread is not blocked during execution
fs.readFile("a.txt","utf-8", function(err, data){
    console.log(data);

});

console.log("Hello There");
