const arrObject = [{name: 'Product A', id: 1}, {name: 'Product B', id: 2}];
const arrString = ['a', 'b', 'c', 'd', 'e']
const arrNumber = [1, 11, 7, 9, 3, 4, 5, 6];

console.log("0------------------myFindIndex------------------0")
function myFindIndex(myArray, elementToLookFor) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === elementToLookFor) {
            return i;
        }
    }
    return -1;
}

console.log(myFindIndex(arrString, "c"));


console.log("0------------------myMap------------------0")
function myMap(myArray, callback) {
    let newArray  = [];
    let index  = [];
    for (let i = 0; i < myArray.length; i++) {
        newArray[i] = callback(myArray[i], i, myArray);
                      //callback(currentValue, currentIndex, array)  
        index[i] = i
    }
    return newArray;
}
let sum = 0, sum2=0;
const newArr = myMap(arrNumber, (item, index, arr) => "updated")
console.log(newArr);


console.log("0------------------myReduce------------------0")
function myReduce(myArray, callback, initialValue) {
    let newArr = [...myArray]
    let result = initialValue;
    for (let i = 0; i < newArr.length; i++) {
        result = callback(result, newArr[i], i, myArray) 
                // callback(result, currentValue, currentIndex, arr)
    }
    return result;
}

console.log(myReduce(arrNumber, (a,b, index, arr) => a += b,0))

console.log("0------------------myEvery------------------0")
function myEvery(myArray, callback) {
    let newArray = [...myArray];
    for (let i = 0; i < newArray.length; i++) {
        if (typeof callback(newArray[i], i, myArray) !== Boolean) {
            return false
        }
        if(callback(newArray[i], i, myArray) === false) return false
    }
    return true
}

console.log(myEvery(arrString, (item, index, arr) => item === "a"))


console.log("0------------------mySort------------------0")
function mySort(myArray, callback) {
    if (callback === undefined) {
        callback = function (a,b) {
            return a.toString().localeCompare(b)
        }
    }
    let temp;
    for (let i = 0; i < myArray.length-1; i++) {
        for (let j = i+1; j < myArray.length; j++) {
            if (callback(myArray[j], myArray[i]) < 0) {
                temp = myArray[i];
                myArray[i] = myArray[j];
                myArray[j] = temp;
            } else  {
                continue;
            }
        }
    }
    return myArray;
}
const arrNum0 = [1,2,3,110,4];
console.log(mySort(arrNum0))

console.log("0------------------myFlat------------------0")
function myFlat(myArray, depth) {
    if (depth <= 0) return myArray;
    else if(depth === undefined) depth = 1;
    let newArray = [...myArray];
    let newArrayLength = newArray.length;

    for (var i = newArrayLength - 1; i > 0 ; i--) {
        if(typeof newArray[i] === 'object'){ //Kiểm tra nếu gặp object trong mảng thì bắt đầu làm phẳng
            // let index = myFindIndex(newArray, newArray[i])
            for (let j = 0; j < depth; j++) { 
                newArray.splice(i, 1, ...newArray[i])
                if (newArray.length !== newArrayLength) {
                    newArrayLength = newArray.length
                    break;
                }
            }
        }
    }
    return newArray
}
const arr2 = [0, 1, 2, [[[3, 4]]], [[[[1,2,3]]]]];
console.log("-----Array.Flat-----")
console.log(arr2.flat(9));
console.log("-----myFlat-----");
console.log(myFlat(arr2,9))