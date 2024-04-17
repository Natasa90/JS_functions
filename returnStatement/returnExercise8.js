/* Question 8: Complex Currying and Closures

Create a function createMathOp that takes a mathematical operator as a string ('+', '-', '*', '/'). 
Return a function that takes two parameters (a and b). When this returned function is called, it should apply
the operation to a and b and return the result. Use currying and closures to encapsulate the operator and operands. */


function createMathOp (operator) {
    return function (a, b) { 
        switch (operator) {
            case "+" : 
                return a + b; 
            case "-" : 
                return a - b; 
            case "*" :
                return a * b; 
            case "/" : 
                return a / b;
            default: 
                console.log("Invalid operator."); 
        }
    }
}

const add = createMathOp ("+"); 
const substract = createMathOp ("-");
const multiply = createMathOp ("*");
const divide = createMathOp ("/");   


console.log (add(10, 5));
console.log (substract(10, 5));
console.log (multiply(10, 5));
console.log (divide(10, 5));