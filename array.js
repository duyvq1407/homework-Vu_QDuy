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
        let nextFibonaciNumber = listFibonaciNumber[i-1] + listFibonaciNumber[i-2];
        if(nextFibonaciNumber < 100){
            listFibonaciNumber.push(nextFibonaciNumber)
        }
    }
    return numberList.some((item) => listFibonaciNumber.includes(item))
}

console.log(hasFibonaciNumber([4,6,7,5]));


// Array count 05
function countNumbersNotInB(a,b) {
    let count = 0;
    a.forEach(item => {
        if (!b.includes(item)) count++;
    });
    return count;
}
console.log(countNumbersNotInB([1,2,3],[2,3,4]));


// Array find 05
function findSecondLargestNumber(numberList){
    if (numberList.length <= 1) 
        return null;
    if(!numberList.some(item => item !== numberList[0])) 
        return null;
    // let newNumberList = numberList.filter(item => item !== Math.max(...numberList))
    // return Math.max(...newNumberList)
    let max = numberList[0],
        secondMax = numberList[0];
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] > max) {
            secondMax = max;
            max = numberList[i];
        } else if(numberList[i] > secondMax) { 
            secondMax = numberList[i];
        }
    }
    return secondMax
}

console.log(findSecondLargestNumber([1,1,2,3,3,4]))

// Array find 
const isPerfectSquare = (n) => {
    return parseInt(Math.sqrt(n)) === Math.sqrt(n) ? true : false
}

function findLastPerfectSquare(numberList) {
    for (let i = numberList.length - 1; i > 0; i--) {
        if (isPerfectSquare(numberList[i])) return numberList[i]
    }
    return null
}   

console.log(findLastPerfectSquare([2,-1,3,2,1,5, 4,6,8, 9, 1, 16,7]));