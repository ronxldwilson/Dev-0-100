# Dev-0-100


## Week 0

HTML and CSS


# Week 1 

## Javascript 

JS is interpretted language and not a compiled language

Single threaded Nature of Javascript
    JS can only ise one of the threads at a time.
    This is why it is considered not good as a language for scalable systms

    There's a way to make it multi threaded - Using Cluster Module

    Sub routines in Go lang are used for multi threading

Callback functions in JS

```Javascript 
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


```
    
Epoch Timestamp - How many milisecond has passed since 1970 has passed
received in JS via obj.getTime();

### JSON - Javascript Object Notation


Two important functions for JSON are JSON.stringyfy and JSON.parse
### Anonymous functions


``` Javascript 

function calculate(n, callback){
    return callback(n);
}

console.log(calculate(3,function (n){
    return n*n;
}));

// Here the function is not given a name, an unanmed function is an anonymous function

```
### Async function 

Async function are functions that do not block the main thread of JS and allows following lines to execute without any blocking

Examples of Asynchronus functions:
    1. SetTimout
    2. fs.readFile - To read file from local filesystem
    3. Fetch - to fetch some data from an API end point

### Sync Function

### Real use of Callbacks

## JS Browser architecture



Call Stack -   
Web APIs - 
Callback queue - 


## Promises 

If you are using promises then we don't use callbacks

Promises 

// Will continue later

## Async Await

