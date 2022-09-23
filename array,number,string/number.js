// ---------------NUMBER-----------------


// Number 01 - số tăng dần
const isIncreasingNumber = (n) => { 
    let strNum = n.toString();
    for (let i = 0; i < strNum.length - 1; i++) {
        if(+strNum[i] >= +strNum[i+1]) return false                
    }
    return true
}

console.log("123: " + isIncreasingNumber(123))

// Number 03 - số tăng dần theo khoảng cách
const isIncreasingNumberByDistance = (n,x) => {
    let strNum = n.toString();
    for (let i = 0; i < strNum.length - 1; i++) {
        if(+strNum[i] >= +strNum[i+1] || +strNum[i+1] - +strNum[i] !== x) return false                
    }
    return true
}

console.log(isIncreasingNumberByDistance(1358,2));

// Number 04 - Số nguyên tố
const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return true
}

console.log(isPrime(2));

// Number 05 - số chính phương
const isPerfectSquare = (n) => {
    return parseInt(Math.sqrt(n)) === Math.sqrt(n) ? true : false
}

console.log(isPerfectSquare(1000000));


// Number 06 - Số hoàn hảo
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


//Number 07 - số đối xứng
function isSymetricNumber(n){
    const arrNum = n.toString().split('');
    return n === +arrNum.reverse().join("")
}

console.log(isSymetricNumber(1321))


// Number 08 - tổng các chữ số chia hết cho 10
function isDivisibleBy10(n) {
    const strNum = n.toString();
    let sum = 0;
    for (let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i])
    }
    return !Boolean(sum % 10)
}

console.log(isDivisibleBy10(1234))