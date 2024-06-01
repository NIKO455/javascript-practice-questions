//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles" or "scalene"

function checkTriangleType(a, b, c) {
    if (a == b && b == c && c == a) {
        return "equilateral"
    } else if (a == b || b == c || c == a) {
        return "isosceles"
    } else {
        return "scalene"
    }
}

console.log(checkTriangleType(3, 3, 3));    // Output: "equilateral"
console.log(checkTriangleType(3, 4, 3));    // Output: "isosceles"
console.log(checkTriangleType(5, 8, 6));    // Output: "scalene"