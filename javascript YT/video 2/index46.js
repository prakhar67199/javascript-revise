// how javascript works
// javascript is synchronous programming language (it means untill 1st line is not executed then other line will not executed)

// javascript is single threaded programming language

// compilation 
// code execution

// why compilation 


// How javascript code executes 


// what is global exection context ? 
// what is local execution context ? 
// closures
console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Harshit";
console.log(firstName);

// <---------------------hoisting fact given below----------------------->
// hoisting
console.log(this);
console.log(window);
console.log(myFunction);

console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma"
var fullName = firstName + " " + lastName;
console.log(fullName);

// <----------------what happens to function expressions---------------->
console.log(myFunction);

var myFunction = function(){
    console.log("this is my function");
}

console.log(myFunction);
// <--------------- are let and const are hoisted------------------>
// fact-> yes let and const ki hoisting hoti hai


// Uncaught ReferenceError: 
// Cannot access 'firstName' before initialization


// error-1
// Uncaught ReferenceError: 
// firstName is not defined

// console.log(firstName);

// console.log(firstName);
// let firstName;
// console.log(firstName);

// console.log(typeof firstName);

// let firstName = "harshit";