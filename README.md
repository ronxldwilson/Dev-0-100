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
    


