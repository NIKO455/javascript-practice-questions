// WAF called truncateString that takes two parameters


function truncateString(word, number) {
    if (word.length > number) {
        return number > 0 ? word.slice(0, number).concat('....') : word;
    }
    return "Invalid word length"
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 12))