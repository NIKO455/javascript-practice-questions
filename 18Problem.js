// WAF to check if a character is uppercase or lowercase

function isUpperCase(letter) {
    // TODO:METHOD-1
    // return letter === letter.toUpperCase()

    // TODO:METHOD-2
    return (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) < 97)
}
function isLowerCase(letter) {
    // TODO:METHOD-1
    // return letter === letter.toLowerCase()

    // TODO:METHOD-2
    return (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)
}

console.log(isUpperCase("A"))       // Output: false

console.log(isLowerCase("z"))       // Output: true
