// WAF findMedian(arr) takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values

function findMedian(numbers) {
    numbers.sort((a, b) => a - b)
    if (numbers.length % 2 === 0) {
        let mid = numbers.length / 2
        return (numbers[mid] + numbers[mid - 1]) / 2
    } else {
        let sum = numbers.reduce((acc, curr) => {
            return acc + curr
        }, 0)
        return Math.floor(sum / numbers.length)
    }
}

console.log(findMedian([5, 3, 9, 1, 7]));   // Output: 5
console.log(findMedian([2, 4, 6, 8]));     // Output:5
console.log(findMedian([1, 3, 5, 7, 9, 11]));     // Output:6
