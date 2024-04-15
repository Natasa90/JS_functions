/* Exercise 4: Default Parameters
Write a function named greet that takes two parameters: a name and a greeting, with "Hello" as the default greeting. 
The function should log the greeting and name to the console.*/

function greet (name) { 
    console.log ("Hello,", name); 
}

greet("Natasa");

function greet2 (name = "Guest") { 
    console.log (`Hello, ${name}!`); 
}

greet2("Milutin");