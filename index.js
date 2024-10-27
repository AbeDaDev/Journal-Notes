// ---------------------------------------------------------------- Variables

let myName = "Abe";
let myLastName = "Perez";
let myAge = 34;
let myTown = "Guadalajara"; 

document.getElementById("p1").textContent = `Hello World I am ${myName} ${myLastName}`;
document.getElementById("p2").textContent = `I am currently ${myAge} years old`;
document.getElementById("p3").textContent = `I live in ${myTown}`;


console.log(`Hello I am ${myName} ${myLastName}`); 
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


// ---------------------------------------------------------------- switches 

let day = 6

switch(day) {
     case 1: 
          console.log("Today is Monday");
          break; // the reason for the break is so if a case it's true it doesn't console.log everything after it. 
     case 2: 
          console.log("Today is Tuesday");
          break;
     case 3: 
          console.log("Today is Wednesday");
          break;
     case 4: 
          console.log("Today is Thursday");
          break;
     case 5: 
          console.log("Today is Friday");
          break;
     case 6: 
          console.log("Today is Saturday");
          break;
     case 7: 
          console.log("Today is Sunday");
          break;
     default: // default case it's incase none of the cases match or turned out to be true
          console.log("Invalid day number");
}

// OR 


let testScore = 62;
let letterGrade;

switch(true) {
     case testScore >= 90:
          letterGrade = "A";
          break;
     case testScore >= 80:
          letterGrade = "B";
          break;
     case testScore >= 70:
          letterGrade = "C";
          break;
     case testScore >= 60:
          letterGrade = "D";
          break;
     default:
          letterGrade = "F";
}

console.log(testScore = letterGrade)