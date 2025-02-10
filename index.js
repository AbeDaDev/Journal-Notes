// ---------------------------------------------------------------- Variables ----------------------------------------------------------------

let myName = "Abe";
let myLastName = "Perez";  // .innerHTML will change the HTML element or add if there is nothing. .textContent will  
let myAge = 34;
let myTown = "Guadalajara"; 

document.getElementById("p1").textContent = `Hello World I am ${myName} ${myLastName}` // Review .textContent to make sure how it's used 
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
let message = age >= 18 ? "You're an adult" : "You are underage"; // this is still an if else statement


// ---------------------------------------------------------------- switches ----------------------------------------------------------------

let day = 6 // reviewing switches on 2/1/25

switch(day) { // review switches 
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

let username = email.slice(0, email.indexOf("@")); // .slicing(0) will output Bro but slicing(1) will output the second letter and on. With a negative number it will backtrack in the array
let extension = email.slice(email.indexOf("@") + 1); 
console.log(username); 
console.log(extension); 

// ---------------------------------------------------------------- method chaining ----------------------------------------------------------------

// let userName = window.prompt("Enter your userName address"); 

userName = userName.trim(); // Seems to trim down white spaces
let letter = userName.charAt(0); // ?
letter = letter.toUpperCase(); // this will upper case the sentence or all letters

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase(); // it will lower case the sentence or all letters
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

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); // .max gives you the biggest number in the array
let minimum = Math.min(...numbers); // .min gives you the smallest number in the array

console.log(maximum); // this will log the maximum number of the array which is 5. Without the ... the number would log 2 arrays, one of just 5 and another with all the numbers 

let username = "Bro Code";

let letters = [...username];

console.log(letters); // this will log all the letters as an array of characters

// ---------------------------------------------------------------- filter() ----------------------------------------------------------------

const products = [
     {name: "laptop", price: 499, color: "white"},
     {name: "smartphone", price: 899, color: "black"},
     {name: "headphones", price: 50, color: "white"},
     {name: "tablet", price: 199, color: "grey"},
     {name: "keyboard", price: 210, color: "blue"}, // this is an array of multiple items with different values strings
 ]
 
 const affordableProducts = products.filter(product => product.price < 200) // this will look into the array of products and search for all products by filtering out those with price under 200
 console.log(affordableProducts) // this logs the products with the price under 200

 OR 

 const affordableProducts = products.filter(product => {
     return product.color === "white" && product.price < 100 // this statement gets more specific about the product you want to return by giving 2 conditions 
 })

 // ---------------------------------------------------------------- Objects ----------------------------------------------------------------

 const person1 = {
     firstName: "Spongebob",
     latName: "Squarepants",
     age: 30,
     isEmployed: true,
     sayHello: function(){console.log("Hi I'm Spongebob!")},
     eat: function(){console.log("I'm eating a Krabby Patty")},
 }
 
 
 
 const person2 = {
     firstName: "Patrick",
     latName: "Star",
     age: 42,
     isEmployed: false,
     sayHello: function(){console.log("Nooooooooo! I'm Patrick")},
     eat: function(){console.log("I'm SpongeBob tonight")},
 } 
 
 person1.eat();
 person2.eat();

// ---------------------------------------------------------------- this ----------------------------------------------------------------

function car(make, model, year, color) {
     this.make = make;
     this.model = model;
     this.year = year;
     this.color = color;
 }
 
 const car1 = Car("Ford", "Mustang", 2024, "red");
 const car2 = Car("Chevrolet", "Camaro", 2025, "blue");
 const car3 = Car("Dodge", "Charger", 2026, "silver");
 
 console.log(car1.make);
 console.log(car1.model);
 console.log(car1.year);
 console.log(car1.color);
 
 console.log(car2.make);
 console.log(car2.model);
 console.log(car2.year);
 console.log(car2.color);
 
 console.log(car3.make);
 console.log(car3.model);
 console.log(car3.year);
 console.log(car3.color);

 // ---------------------------------------------------------------- Static ----------------------------------------------------------------

 class MathUtil {
     static PI = 3.14159;
 
     static getDiameter(radius){
         return radius * 2; 
     }
 
     static getCircumference(radius){
         return 2 * this.PI * radius;
     }
 
     static getArea(radius){
         return this.PI * radius * radius;
     }
 }
 
 console.log(MathUtil.PI); // output will be 3.14159
 console.log(MathUtil.getDiameter(10)); // output will be 20
 console.log(MathUtil.getCircumference(10)); // output wil be 62.8318
 console.log(MathUtil.getArea(10)); // output will be 314.159 

 // ---------------------------------------------------------------- Static ----------------------------------------------------------------

 class User {

     static userCount = 0; // user count is currently at 0
 
     constructor(userName) {
         this.userName = userName; // this will make it so that if a user logs in that username is used for that user
         User.userCount++; // increment the user count by 1 
     }
 
     static getUserCount(){
         console.log(`There are ${user1.userCount} users online`); // this will log how many users are online
     }
     sayHello(){
 
         console.log(`Hello, my use rname is ${this.userName}`); // this will create a greeting for that username who logs in 
     }
 }
 
 const user1 = new User("SpongeBob"); // this will make it so that if a user logs in that username is used for that user 
 const user2 = new User("Patrick");
 const user3 = new User("Sandy");
 
 console.log(user1.userName); // this will let us know which user logged in and his username
 console.log(user2.userName);
 console.log(user3.userName);
 console.log(User.userCount); // this will let us know how many users are there

 // ----------------------------------------------------------------

 // parameters
 function greetUser(greeting, name) {
     welcomeEl.textContent = `${greeting}, ${name}`;
 }

 // argument
 let hi = "Howdy"
 greeting(hi, "James")

 function add(num1, num2) {
     return num1 + num2;
 }

 add(3, 4)

 // greeting & name = parameter
 // "Howdy" & "James" = arguments
 // num1 & num2 = parameters
 // 3 & 4 = arguments

 // ----------------------------------------------------------------

 // callback function
 function greet(name, callback) {
     console.log(`Hello, ${name}!`);
     callback();
 }

 function sayGoodbye() {
     console.log("Goodbye!");
 }

 greet("James", sayGoodbye);

 // ----------------------------------------------------------------

 // Promise
 const promise = new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve("Promise Resolved!");
     }, 2000);
 });

 promise.then((result) => {
     console.log(result);
 }).catch((error) => {
     console.log(error);
 });

 // ----------------------------------------------------------------

 // async & await functions
 async function fetchData() {
     try {
         const response = await fetch("https://api.example.com/data");
         if (!response.ok) {
             throw new Error(`HTTP error! status: ${response.status}`);
         }
         const data = await response.json();
         console.log(data);
     } catch (error) {
         console.error("Error:", error);
     }
 }

 fetchData();

// ------------------------------------

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function logItems(arr) {
     for (let i = 0; i < arr.length; i++) {
          console.log(arr[i])
     }
}

logItems(myCourses)

// ------------------------------------