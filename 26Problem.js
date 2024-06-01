// Output : 0,1,1,2,3,5,8,13,21

function fibonacci(number) {
    // if (number <= 1) {
    //    return  number;
    // }else{
    // return fibonacci(number-1) + fibonacci(number-2)
    // }

    let first = 0;
    let second = 1;
    let next = first + second;

    console.log("Series: ");
    console.log(first);
    console.log(second);

    for (let i = 3; i < number; i++) {
        console.log(next);
        first = second;
        second = next;
        next = first + second;
    }

}

// console.log(fibonacci(0))
// console.log(fibonacci(1))
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(4))
// console.log(fibonacci(5))
// console.log(fibonacci(6))
fibonacci(7)
