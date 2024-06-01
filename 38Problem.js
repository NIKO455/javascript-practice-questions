// WAF calculateDaysBetweenDates that calculates the numbers of days between two dates. The dates will be provided
// in the format of "YYYY-MM-DD"

// Hint
// Days = 24 * 60 * 60 * 1000

function calculateDaysBetweenDates(d1, d2) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);

    return (date2 - date1) / (24 * 60 * 60 * 1000)

}

console.log(calculateDaysBetweenDates('2024-01-01', '2024-01-31'))