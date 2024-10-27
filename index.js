// ---------------------------------------------------------------- Variables

let myName = "Abe";
let myLastName = "Perez";
let myAge = 34;
let myTown = "Guadalajara"; 

document.getElementById("p1").textContent = `Hello World I am ${myName} ${myLastName}`;
document.getElementById("p2").textContent = `I am currently ${myAge} years old`;
document.getElementById("p3").textContent = `I live in ${myTown}`;


console.log(`Hello I am ${myName} ${myLastName}`); 

// ---------------------------------------------------------------- constants 

const PI = 3.14159; 
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() { // select the button - when we select button everything in the curly braces executes 
     radius = document.getElementById("myText").value; // get the value from the text box
     radius = Number(radius); // cast out input into a number
     circumference = 2 * PI * radius; // calculate our circumference 
     document.getElementById("myH3").textContent = circumference + "cm"; // added am h3 element to change and give us our answer 

}

// ---------------------------------------------------------------- if statements

let thisAge = 25; 

if(thisAge >= 18) {
     console.log("You are old enough to enter this site");
} else {
     console.log("You MUST be 18 to enter this site");
}


let time = 9;

if(time < 12) {
     console.log("Good morning");
} else if(time >= 12 && time < 19) {
     console.log("Good afternoon");
} else {
     console.log("Good Evening");
}

// another way of writing an if statement 

let age = 25
let message = age >= 18 ? "You're an adult" : "You are underage"; 