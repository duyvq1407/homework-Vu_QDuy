const regex = /^[a-zA-Z]+$/

// ----------------------STRING------------------------

// String 01
function countWords(str) {
    let newStr = str.trim().split(" ");
    let result = newStr.reduce((a,b) => {
        if(regex.test(b)) {
            a++
        }
        return a
    }, 0)
    return result
}

console.log(countWords("   xin  -- chao   cac ban"));


function countWords2(str) {
    let arrChars = [];
    let result = 0;
    let newStr = str.trim() + " ";
    for (let i of newStr)  {
        if (regex.test(i)) {
            arrChars.push(i)
        } else {
            if (regex.test(arrChars.join(""))) {
                result++
                arrChars = []
            }
        }
    }
    return result
}

console.log(countWords2("   xin  -- chao   cac ban 1duy"));


// String 02
function statisticsWords(str) {
    let newStr = str.trim().split(" ");
    let result = newStr.reduce((a,b) => {
        if(regex.test(b)) {
            a[b] = a[b] + 1 || 1
        }
        return a
    }, {})
    return result
}

console.log(statisticsWords("   easy   -alskl..   frontend  1.234.diuahi    $(*&^*!#^&$*Hù^*@&($*)@?  easy"));


function statisticsWords2(str) {
    let arrChars = [];
    let result = {};
    let newStr = str.trim() + " ";
    for (let i of newStr)  {
        if (regex.test(i)) {
            arrChars.push(i)
        } else {
            if (regex.test(arrChars.join(""))) {
                result[arrChars.join("")] = result[arrChars.join("")] + 1 || 1
                arrChars = []
            }
        }
    }
    return result
}

console.log(statisticsWords("   easy   -alskl..   frontend  1.234.diuahi    $(*&^*!#^&$*Hù^*@&($*)@?  easy"));


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