function statisticsCharacters(str) {
    const strArr = str.split('')
    return strArr.reduce((a,b) => {
        a[b] = a[b] + 1 || 1
        return a
    }, {})
}


console.log(statisticsCharacters("aa vv ccc"));