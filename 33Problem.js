//? Write a function randomHexColor that generates a random hexadecimal color code each time it is called. The function should return a string representing the


function randomHexColor() {
    return '#' + Math.random().toString(16).slice(2, 8).padEnd(6, 0)
}

console.log(randomHexColor());