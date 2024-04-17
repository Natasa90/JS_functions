/* Question 6: Function Currying

Define a curried function add  that can take three numbers as arguments but does so one at a time. For example,
add(1)(2)(3) should return 6. */

function add (a) {
    return function (b) {
        return function (c) {
            return a + b + c; 
        }
    } 
}

const result = add(1)(2)(3);
console.log(result);