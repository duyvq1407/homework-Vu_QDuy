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
    let newArray  = [];
    for (let i = 0; i < myArray.length; i++) {
        newArray[i] = callback(myArray[i], i, myArray);
    }
    return newArray;
}
const newArr = myMap(arrNumber, (item, index, arr) => "updated")
console.log(newArr);




console.log("___________myReduce___________")

function myReduce(myArray, callback, initialValue) {
    
    let result = initialValue ? initialValue : myArray[0];
    for (let i = 0; i < myArray.length; i++) {
        result = callback(result, myArray[i], i, myArray) 
    }
    return result;
}

console.log(myReduce(arrNumber, (a,b, index, arr) => a += b))





console.log("___________myEvery___________")

function myEvery(myArray, callback) {
    for (let i = 0; i < myArray.length; i++) {
        if(!callback(myArray[i], i, myArray)) return false
    }
    return true
}

console.log(myEvery(arrString, (item, index, arr) => console.log(1)))




console.log("___________mySort___________")

function mySort(myArray, callback) {
    if (callback === undefined) {
        callback = function (a,b) {
            return a.toString().localeCompare(b.toString())
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
        if(newArray.every((item) => !Array.isArray(item))) break;
    }
    return newArray
}
const arr2 = [0, 1, 2, [[[3, 4]]], [[[[1,2,3]]]]];
const arr3 = [1,[0, [[[3,3]]],[[9]]],7, "12kadkhl"]
console.log(myFlat(arr3, 2))