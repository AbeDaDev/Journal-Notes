// ---------------------------------------------------------------- Variables ----------------------------------------------------------------

let myName = "Abe";
let myLastName = "Perez";
let myAge = 34;
let myTown = "Guadalajara"; 

document.getElementById("p1").textContent = `Hello World I am ${myName} ${myLastName}`;
document.getElementById("p2").textContent = `I am currently ${myAge} years old`;
document.getElementById("p3").textContent = `I live in ${myTown}`;


console.log(`Hello I am ${myName} ${myLastName}`); 
// ---------------------------------------------------------------- if statements ----------------------------------------------------------------

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


// ---------------------------------------------------------------- switches ----------------------------------------------------------------

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
          break
     case testScore >= 70:
          letterGrade = "C";
          break;
     case testScore >= 60:
          letterGrade = "D";
          break;
     default:
          letterGrade = "F";
}

console.log(testScore = letterGrade);
// ---------------------------------------------------------------- index slicing ----------------------------------------------------------------

const email = "Bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username); 
console.log(extension); 

// ---------------------------------------------------------------- method chaining ----------------------------------------------------------------

// let userName = window.prompt("Enter your userName address"); 

userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase(); 

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();
userName = letter + extraChars; 

console.log(userName); 

// OR 

let userName = window.prompt("Enter your userName");

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase()

console.log(userName);

// ---------------------------------------------------------------- strict equality ----------------------------------------------------------------

// an = sign is an assignment operator 
// a == sign is a comparison operator (compare if values are equal)
// if its a === sign then it's a strict equality operator (compare if values & datatypes are equal)

const PI = 3.14

if(PI === "3.14") { // if using a === sign it will not match because one is a string. == doesn't care about the data type 
     console.log("That is PI");
}
else {
     console.log("That is not PI");
}

// ---------------------------------------------------------------- while loops ----------------------------------------------------------------

let username = "";

while(username === "" || username === null) { // while loop will continue to execute forever while it's true 
     username = window.prompt(`Enter your name`); // once a name was enter the condition would be false and the loop will not execute 
}

// OR

let username;

do { // will execute this once. Do the code first then check the condition 
     username = window.prompt(`Enter your name`);
} while(username === "" || username === null)

     console.log(`Hello ${username}`);


let loggedIn = false;
let username;
let password;

while(!loggedIn) { // you can add this condition to the end and replace it with do{ function 
     username = window.prompt("Enter your username");
     password = window.prompt("Enter your password");

     if(username === "myUsername" && password === "myPassword") {
          loggedIn = true
          console.log("Logged in successfully");
     } else {
          console.log("Invalid credentials. Please try again.");
}

//---------------------------------------------------------------- for loops ----------------------------------------------------------------

for(let i = 0; i <= 2; i ++) { // i++ increments by 1 but i+=2 increments by 2
     console.log("hello world!") // this will log to the console 3 times. If you replace it with i it will log 0,1,2
} // you can add a break; to break out of loops

 // ---------------------------------------------------------------- functions ----------------------------------------------------------------

 function happyBirthday(username, age) { // for the arguments to be passed we added username and age 
     console.log("Happy Birthday to you!");
     console.log("Happy Birthday to you!");
     console.log("Happy Birthday to you!");
     console.log(`Happy Birthday ${username} you are ${age}`); // turned this line into a template literal
 }

 happyBirthday("Abe", 35); // calling the function and sent arguments when calling it 

 // ---------------------------------------------------------------- variable scopes ----------------------------------------------------------------

 // let x = 3; if we add this variable, this one is global. Thi can access any function or variable that is declared. function 2 x will equal 3 but we have to remove their variables for it to be declared 

function2(); // this is a global scope 

function function1() { // this is a local scope. 
     let x = 1;
     console.log(x);
}
function function2() {
     let x = 2; // if x = 1 was renamed to y = 1 and we try calling it from function 2 it wouldn't work because this function cant see outside of its function 
     console.log(x);
} 

// scope means you can have to variables called x and have different values as long as they are in different scopes or functions 

// ---------------------------------------------------------------- arrays ---------------------------------------------------------------- 

let fruit = ["apple", "orange", "banana"];

fruit[2] = "coconut" // this will replace banana with coconut 
fruit.push("cherry") // this will add cherry to the end of the array fruit 
// .pop() will remove the last element of the array 
// .unshift() will add it to the beginning of the array
// .shift() will remove an element from the beginning of the array
// fruit.length will count the number of elements in the array 
// fruit.sort() will sort the array in alphabetical order. if you want it in reverse you add type fruit.sort().reverse()
for(let i = 0; i < fruit.length; i++){
     console.log(fruit[i]); // this will log a loop of the fruit array 
}
console.log(fruit[0]); // this will log "apple"


// ---------------------------------------------------------------- spread operators ----------------------------------------------------------------