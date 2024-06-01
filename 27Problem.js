// WAF called repeatString that takes two parameters


function repeatString(word, number) {
    // TODO:METHOD-1
    // let string = ''
    // for(let i=0; i<number; i++){
    //     string += word
    // }
    // return string

    // TODO:METHOD-2
    return number > 0 ? word.repeat(number) : word;

}

console.log(repeatString('abc',0))      // Output: 'abcabcabcabcabc'