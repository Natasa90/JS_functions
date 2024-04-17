/* Question 2: Conditional Return

Write a function called gradeTest that takes a score out of 100 and returns "Pass" if the score is 50 or higher, and "Fail" if the score is less than 50. */

function gradeTest (score) { 
    if (score >= 50) { 
        return "Pass"; 
    } if (score < 50) { 
        return "Fail";
    } 
}
    
console.log(gradeTest(68));
