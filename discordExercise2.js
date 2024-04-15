/* Exercise 2: Function Expressions
Convert the following function declaration into a function expression and assign it to a variable namedcalculateArea.

function calculateArea(width, height) {
  return width * height;
} */ 

const calculateArea = function (width, height) {
    return width * height;
  }

console.log(calculateArea(5, 10));