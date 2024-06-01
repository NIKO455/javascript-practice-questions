// Write a regular express to extrect all numbers from a given string.

// Requirements
// Extract all numbers from a string
// Return the numbers as an array

// User Cases
// Parsing numerical data from text
// Extracting numeric values for calculations
// Filtering numbers from mixed content


function extractNumbers(value) {
  let regex = /\d+/g;
  return value.match(regex)
}

console.log(extractNumbers('abc123def456')) // Output: ["123", "456"]
// console.log(extractNumbers('no numbers here')) // Output: null

