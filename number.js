// ---------------NUMBER-----------------


// Number 01
const isIncreasingNumber = (n) => { 
    let arrNum = n.toString().split('')
    for (let i = 0; i < arrNum.length - 1; i++) {
        if(arrNum[i] >= arrNum[i+1]) return false                
    }
    return true
}

console.log("11: " + isIncreasingNumber(11))
console.log("123: " + isIncreasingNumber(123))

// Number 03

const isIncreasingNumberByDistance = (n,x) => {
    let arrNum = n.toString().split('')
    for (let i = 0; i < arrNum.length - 1; i++) {
        if(arrNum[i] >= arrNum[i+1] || arrNum[i+1] - arrNum[i] !== x) return false                
    }
    return true
}

console.log(isIncreasingNumberByDistance(1358,2));

// Number 04

const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return true
}

console.log(isPrime(2));

// Number 05
const isPerfectSquare = (n) => {
    return parseInt(Math.sqrt(n)) === Math.sqrt(n) ? true : false
}


console.log(isPerfectSquare(1000000));


// Number 06
const isPerfectNumber = (n) => {
    let sumDivisor = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sumDivisor += i;
        }
    }
    return sumDivisor === n 
}

console.log(isPerfectNumber(4))


//Number 07
function isSymetricNumber(n){
    let arrNum = n.toString().split('')
    return n === +arrNum.reverse().join("")
}

console.log(isSymetricNumber(1321))


// Number 08
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