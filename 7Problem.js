// Write a function findMax that takes an array of numbers and input and returns the maximum number in the array.

/*
* @param {array} array
* */
function findMax(array) {
    return Math.max(...array)
    // return array.reduce((a, b) => Math.max(a, b), 0)

    // reduce example
    // array.reduce((acc, currentValue, index) => {
    //     let ren = acc + currentValue;
    //     console.log(`Accumulator: ${ren}, Current: ${currentValue}, Index: ${index}`)
    //     return ren;
    // }, 0)

}

// Example usage:
console.log(findMax([1, 5, 3, 9, 2])) // Output:9
console.log(findMax([-1, -5, -3, -9, -2])); // Output:-2
console.log(findMax([5])); // Output:5
console.log(findMax([])); // Output:5
