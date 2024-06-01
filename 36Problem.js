// Programming Challenge: Convert Object to Array and Vice Versa


let obj = [['name', 'Kodyfier Thapa'], ['age', 30], ['city', 'Kathmandu']];

function convertInto(obj) {
    return Object.fromEntries(obj.reduce((acc, [key, value]) => {
        acc.push([key, value]);
        return acc;
    }, []));
}

console.log(convertInto(obj));