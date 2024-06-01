// WAF called findMode that takes and array of numbers as input and returns the mode of the array (the number that appears most frequently)

function findMode(arr) {
    const output = {}
    let max = 0;
    for (let element of arr) {
        output[element] = (output[element] || 0) + 1;
        if(output[element] > max){
            max = element
        }
    }
    return max

}

console.log(findMode([1, 2, 3, 2, 1, 4, 2,9]))        // Output:2

