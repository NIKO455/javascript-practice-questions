// WAF to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

const numbers = [1, 2, 2, 3, 1, 4, 2]
const output = {}

numbers.forEach((e) => {
    output[e] = (output[e] || 0) + 1
})

console.log(output)


