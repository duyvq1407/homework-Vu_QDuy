isIncreasingNumberList = (numberList) => {
    for (let i = 0; i < numberList.length - 1; i++) {
        if(numberList[i] >= numberList[i+1]) return false
    }
    return true
}

console.log(isIncreasingNumberList([1,2,4,6]));