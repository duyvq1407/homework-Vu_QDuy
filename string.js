

// ----------------------STRING------------------------

// String 01
function countWords(str) {
    str = str.trim()
    str = str.split(" ")
    console.log(str)
    let result = str.reduce((a,b) => {
        if(b != '') {
            a++
        }
        return a
    }, 0)
    return result
}

console.log(countWords("   xin   chao   cac ban"));


// String 02
function statisticsWords(str) {
    let result = str.trim().split(" ").reduce((a,b) => {
        if(b != '') {
            a[b] = a[b] + 1 || 1
        }
        return a
    }, {})
    return result
}

console.log(statisticsWords("   easy      frontend          easy"));


// String 03
function statisticsCharacters(str) {
    const strArr = str.split('')
    return strArr.reduce((a,b) => {
        if(b == ' ') {
            a['space'] = a['space'] + 1 || 1
        } else{
            a[b] = a[b] + 1 || 1
        }
        return a
    }, {})
}
console.log(statisticsCharacters("aa vv ccc"));