// Promises example
//
//

let p = new Promise(function(resolve){
	resolve("hi there");
});

let p1 = new Promise(function(resolve){
	resolve();
});

function doSomething(){
	console.log("new");
}

p.then(function(){
	console.log("Hello World");
})

p1.then(doSomething);

