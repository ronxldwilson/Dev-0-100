// New promise application w/ file system read
//
//

const fs = require('fs');

let newPro = new Promise(function(resolve,reject){
	fs.readFile("ab.txt","utf-8",function(err,data){
		if(err){
			reject('Error');
			
		}
		resolve(data);

	});
});

function log(data){
	console.log(data);
}


newPro.then(log).catch(()=>{
	console.error("Error");
});

