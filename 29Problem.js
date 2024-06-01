// WAF called numberRange that generates an array containing consecutive numbers from a,b(inclusive).


function numberRange(start, end) {
    let arr = []
    for(let i=0; i<=end-start; i++){
        arr.push(i+start)
    }
    return arr
}

console.log(numberRange(0, 5));
console.log(numberRange(3, 7));
console.log(numberRange(-2, 2));
