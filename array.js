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