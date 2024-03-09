// Promises in JS
//

const newFunction = new Promise((resolve,reject)=>{

	setTimeout(()=>{
		const randomNum = Math.random();
		console.log(randomNum);
		if(randomNum>0.5){
			resolve(randomNum);
		}
		else{
			reject("Failure");
		}
	},1000)
});

function log(data){
	console.log(data);
}

newFunction.then(log).catch(log);


