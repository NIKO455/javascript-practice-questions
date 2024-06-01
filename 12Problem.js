// WAP to that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements

function removeDuplicate(numbers) {
    // TODO: METHOD-1
    // let nums = []
    // for(let i=0; i<numbers.length; i++){
    //     if(nums.indexOf(numbers[i]) === -1){
    //         nums.push(numbers[i])
    //     }
    // }
    // return nums;

    // TODO: METHOD-2
    // In js Set is the collection of the unique value
    return [...new Set(numbers)]
}

console.log(removeDuplicate([1, 2, 3, 1, 1, 4])) // Output: [1,2,3,4]