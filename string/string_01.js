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