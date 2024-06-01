// WAF called simplePasswordValidator that takes a single parameter

function simplePasswordValidator(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }

    let hasLowercase = false;
    let hasUppercase = false;
    let hasNumeric = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if (/[a-z]/.test(char)) {
            hasLowercase = true;
        }

        if (/[A-Z]/.test(char)) {
            hasUppercase = true;
        }

        if (/[0-9]/.test(char)) {
            hasNumeric = true;
        }
    }

    return hasLowercase && hasUppercase && hasNumeric;
}

console.log(simplePasswordValidator('afsdlkfjsdf')) // Output: false
console.log(simplePasswordValidator('afsdlkfjsdf1')) // Output: false
console.log(simplePasswordValidator('afsdlkfjsdf1A')) // Output: true
console.log(simplePasswordValidator('afsdlkfjsdf1Aa')) // Output: true
