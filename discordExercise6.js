/* Exercise 6: Higher-Order Functions
Write a higher-order function named repeatOperation
that takes a function and a number as arguments. It should call the passed function the number of times indicated by the number argument. */ 

function repeatOperation(number, action) {
    for (let i = 0; i < number; i++) { 
        action(i); 
    }
}
repeatOperation(5, console.log); 