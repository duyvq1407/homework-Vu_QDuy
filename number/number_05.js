const isPerfectSquare = (n) => {
    return parseInt(Math.sqrt(n)) === Math.sqrt(n) ? true : false
}

console.log(isPerfectSquare(1000000));