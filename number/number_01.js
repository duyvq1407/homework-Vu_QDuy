const isIncreasingNumber = (n) => { 
    let arrNum = n.toString().split('')
    for (let i = 0; i < arrNum.length - 1; i++) {
        if(arrNum[i] >= arrNum[i+1]) return false                
    }
    return true
}

console.log("11: " + isIncreasingNumber(11))
console.log("123: " + isIncreasingNumber(123))
console.log("1235: " + isIncreasingNumber(1235))
console.log("12351: " + isIncreasingNumber(12351))
