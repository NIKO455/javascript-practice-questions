// Remove the duplicate item from array

function removeDuplicate(array) {
    return [...new Set(array)]
}

console.log(removeDuplicate([1, 2, 3, 3, 4, 4, 5]))