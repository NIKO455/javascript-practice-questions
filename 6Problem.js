//? Write a function to determine whether a given string is a palindrome or not. A palindrome is a world, phrase, number, or other sequence of characters that reads hte same forward and backward, ignoring spaces, punctuation, and capitalization

function isPalindrome(value) {
    value = value.toLowerCase().replace(/\W/g, "");
    // W is refers to the [^a-zA-Z0-9_]
    let r_str = value.split('').reverse().join('')

    if (value === r_str) {
        return true
    }

    return false
}


console.log(isPalindrome("A man, a plan, a canal, Panama")) // Output: true
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false