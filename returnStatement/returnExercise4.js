/* Question 4: Returning Functions

Write a function makeMultiplier
that takes one parameter. This function should return another function that takes one parameter and returns the product of both parameters.*/

function makeMultiplier (number1) { 
    return function (number2) {
        return number1 * number2; 
    }
}

const multiplier = makeMultiplier(4); 
console.log(multiplier(3)); 
