module.exports = function reverse (n) {
    n = Math.abs(n)
    if (n <= 0) {
        return n
    }
    else {
        return n % 10 * (10**(n.toString().length - 1)) + reverse(Math.trunc(n / 10))
    }
}