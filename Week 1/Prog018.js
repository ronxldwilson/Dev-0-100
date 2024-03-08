// Async Awaits
//

function asyncFunction(){
	let p = new Promise(function(resolve){
		resolve('Hi There');
	});
	return p;
}

async function main(){

	const value = await asyncFunction();
	console.log(value);
}

main();
