// Create a function that generateBarChart that takes an array of numbers and generate a simple text-based bar chart

function generateBarChar(numbers) {
    numbers.forEach((num) => {
        console.log("*".repeat(num))
    })
    return true;
}

generateBarChar([5, 3, 9, 2])