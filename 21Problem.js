// WAF called calculateMean that takes an array of numbers as input and returns the mean(average) of those numbers.

function calculateMean(numbers) {
    if (numbers.length < 1) return 0
    let sum = numbers.reduce((acc, curr) => {
        return acc + curr
    }, 0)

    return Math.floor(sum / numbers.length)
}

console.log(calculateMean([1, 2, 3, 4, 5])) // Output:3
console.log(calculateMean([10, 20, 30]))    // Output:20
console.log(calculateMean([-1, 0, 1]))    // Output:0
console.log(calculateMean([])) // Output:0
