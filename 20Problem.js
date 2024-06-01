// WAF to reverse a string without using a builtin methods or libraries. The function should take a string as input and return the reverse string

function reverseString(word) {
    // TODO:METHOD-1
    // return word.trim().split('').reduce((acc, currentValue)=>{
    //    return  currentValue + acc
    // })

    // TODO:METHOD-2
    // return word.split('').reverse().join('')

}

console.log(reverseString("hello"))     // Output: olleh