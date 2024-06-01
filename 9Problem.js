function calculateAverage(nums) {
    return Math.floor((nums.reduce((acc, currValue) => {
        return (acc += currValue)
    }, 0)) / nums.length)
}

console.log(calculateAverage([5, 10, 2, 8]))