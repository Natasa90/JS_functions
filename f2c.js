function f2c (f) {
    let c = (f - 32) * 5 / 9; 
    return c;
}

console.log(f2c(150).toFixed(2)); // 2 decimals 