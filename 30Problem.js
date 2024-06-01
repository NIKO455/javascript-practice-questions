// WA recursive function called numberRangeRecursive that generates an array containing consecutive numbers form a to b

let arr = []

function numberRange(start, end,) {
    if (start <= end) {
        arr.push(start)
        numberRange(start + 1, end)
    }
    return arr
}

console.log(numberRange(0, 5));
console.log(numberRange(3, 7));
console.log(numberRange(-2, 2));