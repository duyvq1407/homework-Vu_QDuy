function isSymetricNumber(n){
    let arrNum = n.toString().split('')
    return n === +arrNum.reverse().join("")
}

console.log(isSymetricNumber(1321))