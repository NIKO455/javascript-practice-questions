//? Write a function findLongesWord that takes a string as input and return the longest word in the string. If there are multiple longest words, return the first one encountered


// const numbers = [43, 65, 23, 0, 2, 45, 35]
// numbers.sort()
// console.log(numbers);
// function compareFunction(a, b) {
// 1. < 0 ... a comes first EG: 5-6
// 2. 0 ... nothing will be changed EG: 6-6
// 3. > 0 ... b comes first EG: 6-5
//     return a - b;
// }

const findLongestWord = (value) => {
    if (value.trim().length === 0) {
        return false
    }
    valueArray = value.split(' ');
    valueArray.sort((a, b) => b.length - a.length);
    return valueArray[0];

}

console.log(
    findLongestWord("Watch Thapa Technical javascript course on youtube.")
)


// Sorting 
// const products = [
//     {
//         name: 'laptop',
//         price: 1000
//     },
//     {
//         name: 'desktop',
//         price: 1500
//     },
//     {
//         name: 'phone',
//         price: 500
//     },
// ]
// products.sort((a, b) => b.price - a.price)
// console.log(products);