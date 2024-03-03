// JSON workings

const onj = {
    firstName : "Hello",
    secondName : "world"
}


let finalString = JSON.stringify(onj);

console.log(finalString);

const newObj = JSON.parse(finalString);

console.log(newObj);