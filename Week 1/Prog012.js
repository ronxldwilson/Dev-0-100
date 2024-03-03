// Anonymous functions in JS

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function calculate(n, callback){
    return callback(n);
}
// This is an example of callback
console.log(calculate(2,cube));


// now to implement an anonymous function 

console.log(calculate(3,function (n){
    return n*n;
}));


// this is an anonymous function over here we don't need to define a name to the function, since it is being called once and not again





