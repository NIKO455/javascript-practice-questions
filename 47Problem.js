
function validateHexColor(value){
  let regex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/

  return regex.test(value);
}

console.log(validateHexColor("#a3c113"))    // Output: true
console.log(validateHexColor("#fff"))    // Output: true
console.log(validateHexColor("#1234567"))    // Output: false
console.log(validateHexColor("a3dc11"))    // Output: false
console.log(validateHexColor("#g34234"))    // Output: false
