// CallBacks

// the first one is a normal implemention which can be done without callbacks and the second one has the call back implementation

// function calculate(a, b, type){
//     if(type== "sum"){
//         return a+b;
//     }
//     if(type == "sub"){
//         return a-b
//     }
// }

// const value = calculate(1,2,"sum");
// console.log(value);

// Now we implement the same code using callbacks

function calculate(a,b, thisCouldBeKuchBhi){
    const value = thisCouldBeKuchBhi(a,b);
    return value;
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const value = calculate(1,2,sub);
console.log(value);

