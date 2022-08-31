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