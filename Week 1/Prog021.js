// Async Await functions
//
function asyncFn(){
	return new Promise(function(resolve){
	resolve("Hello World");
	});
}

async function main(){
	const value = await asyncFn();
	console.log(value);
}


console.log("Before Main");
main();
console.log("After Main");

let a = 0;
for (let i =0; i<10000000;i++){
	a++
}
console.log(a);

