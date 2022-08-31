function isDivisibleBy10(n) {
    let arrNum = n.toString().split('');
    let sum = 0
    for (let value of arrNum) {
        sum += +value
    }
    return !Boolean(sum % 10)
}

console.log(isDivisibleBy10(1234))
console.log(isDivisibleBy10(19))
console.log(isDivisibleBy10(10))