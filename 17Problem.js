// WAF to convert a string to camelCase and snake_case

function toCamelCase(word) {
    return word.trim().toLowerCase().split(' ').map((curElem, index) => {
        if (index === 0) {
            return curElem
        }
        return curElem.charAt(0).toUpperCase() + curElem.slice(1,curElem.length)
    }).join('')
}

console.log(toCamelCase("hello world")) // Output: helloWorld

function toSnakeCase(word) {
    return word.trim().toLowerCase().split(' ').join('_')
}

console.log(toSnakeCase("hello world hari")) // Output: hello_world
