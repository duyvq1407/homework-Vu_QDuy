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


let n = [4,6,7,5]

console.log(hasFibonaciNumber(n));