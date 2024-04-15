/*  Exercise 7: Returning Functions
Write a function named multiplier that takes a number as an argument and returns a function.
 The returned function should take another number as an argument and return the product of the two numbers. */

 function multiplier (factor) { 
    return function (number) { 
        return number * factor; 
    }
 }

const double = multiplier(2); 
console.log(double(5)); 