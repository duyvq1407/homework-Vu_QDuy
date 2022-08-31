const isPerfectSquare = (n) => {
    if (n < 0) return false
    return parseInt(Math.sqrt(n)) === Math.sqrt(n) ? true : false
}
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