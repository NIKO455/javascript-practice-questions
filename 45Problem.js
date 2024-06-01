// Write a function that takes a string as input and returns true if the string represents a valid nepali mobile number, and false otherwise

// Validation Requirments:
// Length: An nepali mobile number should have exactly 10 digits
// Starting Digit: The number must start with 9,6,7, or 8, which are valid starting digits for nepali mobile number

function validateIndianMobileNumber(number) {
  if(number.length !== 10) return false

  let regex = /[6-9][\d]{9}/
  // the first [6-9] is the fixed so any number will come between those and [\d] refres to the number between 0-9 and {9} means that it should contain 9 number only after the first number is fixed so we get altogether 10 elment 
  return regex.test(number)
}

// Test Cases 

console.log(validateIndianMobileNumber("9876543210"))     // Expected output: true
console.log(validateIndianMobileNumber("0123456789"))     // Expected output: false
console.log(validateIndianMobileNumber("876543275"))     // Expected output: false
console.log(validateIndianMobileNumber("934759374953475"))    // Expected output: false
