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

console.log(isIncreasingNumberByDistance(11,1));
console.log(isIncreasingNumberByDistance(123,1));
console.log(isIncreasingNumberByDistance(135,2));
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

// ------------------------------ARRAY----------------------

// Array check 09
isIncreasingNumberList = (numberList) => {
    for (let i = 0; i < numberList.length - 1; i++) {
        if(numberList[i] >= numberList[i+1]) return false
    }
    return true
}

console.log(isIncreasingNumberList([1,2,4,6]));


// Array check 11
function isSymetricList(numberList) {
    return numberList.join("") === numberList.reverse().join("")
}

console.log(isSymetricList([1,3,3,1]))


// Array check 12
function hasFibonaciNumber(numberList) {
    let i = 1,
        listFibonaciNumber = [0,1];
    while(listFibonaciNumber[i] <= 100){
        i++;       
        listFibonaciNumber[i] = listFibonaciNumber[i-1] + listFibonaciNumber[i-2]
    }
    listFibonaciNumber.pop()
    console.log(listFibonaciNumber)
    return numberList.some((item) => listFibonaciNumber.includes(item))
}


let x = [4,6,7,5]

console.log(hasFibonaciNumber(x));


// Array count 05
function countNumbersNotInB(a,b) {
    let count = 0;
    a.forEach(item => {
        if (!b.includes(item)) {
            count++;
        }
    });
    return count;
}
console.log(countNumbersNotInB([1,2,3],[2,3,4]));


// Array find 05
function findSecondLargestNumber(numberList){
    if (numberList.length <= 1) return undefined
    const numberListSort = [...numberList].sort((a,b) => {console.log(a, b);})
    return numberListSort[1]
    // let newNumberList = numberList.filter(item => item !== Math.max(...numberList))
    // return Math.max(...newNumberList)
}

let n = [-1, 1, 2, 3, 4, 6, 4]

console.log(findSecondLargestNumber(n))

// Array find 
function findLastPerfectSquare(numberList) {
    for(let result of numberList.reverse()){
        if (isPerfectSquare(result)) {
            return result
        }
    }
    return undefined
}   

let y = [2,-1,3,2,1,5, 4,6,8, 9, 1, 16,7]

console.log(findLastPerfectSquare(y));

// ----------------------STRING------------------------

// String 01
function countWords(str) {
    str = str.trim()
    str = str.split(" ")
    console.log(str)
    let result = str.reduce((a,b) => {
        if(b != '') {
            a++
        }
        return a
    }, 0)
    return result
}

console.log(countWords("   xin   chao   cac ban"));

// String 02
function statisticsWords(str) {
    let result = str.trim().split(" ").reduce((a,b) => {
        if(b != '') {
            a[b] = a[b] + 1 || 1
        }
        return a
    }, {})
    return result
}

console.log(statisticsWords("   easy      frontend          easy"));


// String 03
function statisticsCharacters(str) {
    const strArr = str.split('')
    return strArr.reduce((a,b) => {
        if(b == ' ') {
            a['space'] = a['space'] + 1 || 1
        } else{
            a[b] = a[b] + 1 || 1
        }
        return a
    }, {})
}
console.log(statisticsCharacters("aa vv ccc"));


