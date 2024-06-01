function arraysAreEqual(numbers, numbers2) {
    if (numbers.length !== numbers2.length) return false

    // TODO: METHOD-1
    // for(let i=0; i<numbers.length; i++){
    //     if(numbers[i] !== numbers2[i]){
    //         return false
    //     }
    // }
    // return true


    // TODO: METHOD-2
    return numbers.every((currentValue, index) => numbers2[index] === currentValue);
}

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3, 7]))