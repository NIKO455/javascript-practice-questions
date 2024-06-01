
function countChar(word, char) {
    let wordArr = word.toLowerCase().split('')

    // long method
    // let count = 0;
    // wordArr.forEach((w) => {
    //     if (w === char.toLowerCase()) count++;
    // })
    // return count;

    var data = wordArr.filter((e) => {
        return e === char.toLowerCase()
    })

    return data.length;
}

console.log(countChar("MissIssippi", "I"));