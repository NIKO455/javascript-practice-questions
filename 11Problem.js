function sumOfDigits(number) {
    // TODO: Method-1
    // let sum = 0;
    // while (number > 0) {
    //     sum += (number % 10);
    //     number = Math.floor(number / 10)
    // }
    // return sum;

    // TODO: Method-2
    // let arr = String(number).split('')
    let arr = Array.from(String(number))
    return arr.reduce((acc, currentValue) => Number(acc) + Number(currentValue))
}

console.log(sumOfDigits(1234))