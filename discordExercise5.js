/* Exercise 5: Rest Parameters
Write a function named sum that uses rest parameters to take any number of arguments, calculate the sum, and return it. */

function sum (...numbers) { 
    return numbers.reduce((total, current) => total + current,0); 
}

console.log(sum(2, 6, 87));

