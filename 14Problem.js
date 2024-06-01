// WAP that takes an integer num as input and returns true  if a power of two and false otherwise.


function isPowerOfTwo(number) {
    // TODO: METHOD-1
    // let num = 2;
    // while (num <= number) {
    //     if (num === number) {
    //         return true
    //     }
    //     num *= 2
    // }
    // return false;

    // TODO: METHOD-2
    for (let i = 0; i < number; i++) {
        if (2 ** i === number) {
            return true;
        }
    }
    return false
}

console.log(isPowerOfTwo(8))        // Output: true
console.log(isPowerOfTwo(3))        // Output: false
