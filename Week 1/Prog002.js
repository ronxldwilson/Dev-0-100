
const prompt = require('prompt-sync')();

const gender = prompt("What's your Gender?");

if(gender==="Male"){
    console.log("Howdy Sir");
}
else if(gender === "Female") {
    console.log("Hello Ma'am");
}