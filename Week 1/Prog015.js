const fs = require('fs');

function examplePromise(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8", function(err, data){
            resolve(data);
        });
    });
}

function displayData(data){
    console.log(data);
}

examplePromise().then(displayData);
