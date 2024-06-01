// WAF to check if a given string starts with a specific substring

function startsWith(words, word) {
    // TODO:METHOD-1
    // return words.trim().split(' ')[0].toLowerCase() === word.trim().toLowerCase()

    // TODO-METHOD-2
    return words.trim().toLowerCase().substring(0,words.indexOf(' ')) === word.trim().toLowerCase();
}

console.log(startsWith("hello world", "hello")) // Output: true
console.log(startsWith("Hello world", "world")) // Output: false
