const arrObject = [{name: 'Product A', id: 1}, {name: 'Product B', id: 2}];
const arrString = ['a', 'b', 'c', 'd', 'e']
const arrNumber = [1, 11, 7, 9, 3, 4, 5, 6];

console.log("___________myFindIndex___________")

function myFindIndex(myArray, elementToLookFor) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === elementToLookFor) {
            return i;
        }
    }
    return -1;
}

console.log(myFindIndex(arrString, "c"));




console.log("___________myMap___________")

function myMap(myArray, callback) {
    if (callback === undefined) {
        return "Error."
    }
    let newArray  = [];
    for (let i = 0; i < myArray.length; i++) {
        newArray[i] = callback(myArray[i], i, myArray);
                    //callback(currentValue, currentIndex, array)  
    }
    return newArray;
}
const newArr = myMap(arrNumber, (item, index, arr) => "updated")
console.log(newArr);




console.log("___________myReduce___________")

function myReduce(myArray, callback, initialValue) {
    if (callback === undefined) {
        return "Error."
    }
    let newArr = [...myArray]
    let result = initialValue;
    for (let i = 0; i < newArr.length; i++) {
        result = callback(result, newArr[i], i, myArray) 
            // callback(result, currentValue, currentIndex, arr)
    }
    return result;
}

console.log(myReduce(arrNumber, (a,b, index, arr) => a += b,0))





console.log("___________myEvery___________")

function myEvery(myArray, callback) {
    if (callback === undefined) {
        return "Error."
    }
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




console.log("___________mySort___________")

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
            }
        }
    }
    return myArray;
}
const arrNum0 = [1,2,3,110,4];
console.log(mySort(arrNum0))




console.log("___________myFlat___________")

function myFlat(myArray, depth) {
    let newArray  = [...myArray],
        tempArr = [...myArray];
    if (depth <= 0 || isNaN(depth)) return newArray;
    let count = depth  ? depth : 1;

    for(var j = 0; j < count; j++){
        for (let i = 0; i < newArray.length; i++) {
            if(Array.isArray(newArray[i])){
                tempArr.splice(i, 1,...newArray[i]);
            }
        }
        newArray = tempArr;
        if (newArray.join(" ").indexOf(",") === -1) {
            break;
        }
    }
    return newArray
}
const arr2 = [0, 1, 2, [[[3, 4]]], [[[[1,2,3]]]]];
const arr3 = [1,[0, [[[3,3]]],[[9]]],7]
console.log(myFlat(arr3, Infinity))