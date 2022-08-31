function statisticsWords(str) {
    let result = str.trim().split(" ").reduce((a,b) => {
        if(b != '') {
            a[b] = a[b] + 1 || 1
        }
        return a
    }, {})
    return result
}

console.log(statisticsWords("easy      frontend          easy"));