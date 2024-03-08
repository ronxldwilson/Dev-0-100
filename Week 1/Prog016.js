
// Promises in JS
// Promises don't have callbacks attached to them
//
 
const fs = require('fs');

function readFileFun(){
	
	return new Promise(function(resolve){
		fs.readFile("a.txt","utf-8", function(err,data){
			resolve(data);
		});
	})
}

function onDone(data){
	console.log(data);
}

readFileFun().then(onDone);
