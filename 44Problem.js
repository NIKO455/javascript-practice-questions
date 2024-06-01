// WAF to validatePassword that check if a given password string meets the following criteria:

// Min Length: the password length must be at least 8 characters long
// Case Requirement: The password must include at least one uppercase letter and at least on lowercase letter
// Numerical Requirement: The password must contain at least one digit.
// Special Character Requirement: The password must have at least one special character for the set !@#$%^&*()_-+=.


const validatePassword = (password) => {

    if (password.length < 0) return;

    let numberReg = /[0-9]/g;
    let smallReg = /[a-z]/g;
    let largeReg = /[A-Z]/g;
    let specialReg = /[!@#$%^&*()_+-.]+/g;

    if (numberReg.test(password) && largeReg.test(password) && smallReg.test(password) && specialReg.test(password)) {
        return true
    }

    return false

}

console.log(validatePassword('Pass123!'));  //output: true
console.log(validatePassword('Password'));  //output: false
console.log(validatePassword('1213!'));  //output: false
console.log(validatePassword('P@ssw0rd'));  //output:true