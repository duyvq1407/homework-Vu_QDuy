
function findSecondLargestNumber(numberList){
    if (numberList.length <= 1) return undefined
    const numberListSort = [...numberList].sort((a,b) => {console.log(a, b);})
    return numberListSort[1]
    // let newNumberList = numberList.filter(item => item !== Math.max(...numberList))
    // return Math.max(...newNumberList)
}

let n = [-1, 1, 2, 3, 4, 6, 4]

console.log(findSecondLargestNumber(n))