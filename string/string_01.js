function countWords(str) {
    str = str.trim()
    str = str.split(" ")
    console.log(str)
    return str.length
}

console.log(countWords("   xin chao cac ban"));