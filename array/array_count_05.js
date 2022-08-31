function countNumbersNotInB(a,b) {
    let count = 0;
    a.forEach(item => {
        if (!b.includes(item)) {
            count++;
        }
    });
    return count;
}
console.log(countNumbersNotInB([1,2,3],[2,3,4]));