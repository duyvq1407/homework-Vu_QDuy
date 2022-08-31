function isSymetricList(numberList) {
    return numberList.join("") === numberList.reverse().join("")
}

console.log(isSymetricList([1,3,3,1]))