function countVowels(words) {
    let vowels = ['a', 'e', 'i', 'o', 'u']

    // TODO: METHOD-1
    // return words.split('').reduce((acc, currentValue) => {
    //     if (vowels.includes(currentValue)) {
    //         return acc + 1;
    //     }
    //     return acc
    // }, 0)

    // TODO: METHOD-1
    let count = 0;
    for (let i of words.split('')) {
        if (vowels.includes(i.toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello world")); // Output:3