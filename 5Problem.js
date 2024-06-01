//? Write a function to sort an array of numbers in an ascending order

// Example usage:
// console.log(sortAscending([5,3,10,8])); // Output: [3,5,8,10]

function sortAscending(value) {

    value.sort((a, b) => a - b)

    return value
}


console.log(sortAscending([5, 3, 10, 8]));