// Write a program that prints all the male persons first name in a complex object

// Single object
const person = {
    firstName : "Ron",
    lastName : "Wilson",
    gender : "Male"
}

console.log(person["gender"]);
console.log(person.firstName);

// Array of objects

const personArray = [{
    firstName : "Ron",
    lastName : "Wilson",
    gender : "Male"
},{
    firstName : "Don",
    lastName : "Bjorn",
    gender : "Male"
}
]

for(let i =0; i<personArray.length;i++){
    if(personArray[i]["gender"] ==="Male"){
        console.log(personArray[i]["firstName"]);
    }
}



