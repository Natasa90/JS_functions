function boolToWord (bool) {
    switch (bool) { 
        case true:
            return "Yes";
        case false: 
            return "No"; 
        default: 
         return "Error";
    }
}

console.log(boolToWord(true));