// Create a function calculateAge that takes a birthDate as input and returns the current age of the person. the
// birthDate will be provided in the format "YYYY-MM-DD"

function calculateAge(d) {
    let date = new Date(d)
    let currentDate = new Date();
    let age = currentDate.getFullYear() - date.getFullYear();
    let monthDiff = currentDate.getMonth() - date.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < date.getDate())) {
        age--
    }

    return age
}

console.log(calculateAge('1990-05-15'))