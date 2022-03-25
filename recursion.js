function exp(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * exp(x, n - 1);
    }
}
console.log(exp(2, 5));
console.log(exp(7, 3));
console.log(exp(12, 2));
console.log(exp(9, 4));