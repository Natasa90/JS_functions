/* Question 3: Multiple Returns

Create a function processUserInput that accepts an integer. If the integer is less than 10, return "Input is less than 10". 
If the integer is between 10 and 20, return "Input is between 10 and 20". Otherwise, return "Input is greater than 20". */

function processUserInput (integer) { 
    if (integer < 10) { 
        return "Input is less than 10.";
    } if (integer >= 10 & integer <= 20) {
        return "Input is between 10 and 20."; 
    } else 
    return "Input is greater than 20.";
}

console.log (processUserInput(15));