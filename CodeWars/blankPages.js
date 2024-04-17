function blankPages (n, m) { 
    if (n < 0 | m < 0) {
        return 0; 
    } else 
        return n * m ; 
}

console.log(blankPages(5,5));