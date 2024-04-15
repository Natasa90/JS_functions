/* Exercise 8: Closures
Create a function named counter that has no arguments. 
It should return another function that, when invoked, returns an incremented number starting from 1.
Each call should increase the count without using global variables. */ 

function counter () { 
    let count = 1; 
    return function() {
        return count++ ;
    }
}

const increment = counter(); 

console.log(increment()); 
console.log(increment()); 
console.log(increment()); 
console.log(increment()); 

