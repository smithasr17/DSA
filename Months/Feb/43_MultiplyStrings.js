var multiply = function(num1, num2) {
    let a = BigInt(num1)
    let b = BigInt(num2)
    let prod = a*b
    return String(prod)
}
console.log(multiply(2,3))