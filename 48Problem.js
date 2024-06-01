// WAF named isValidDate that takes a single string as input representing a date and determines if it is a valid date in the format mm/dd/yyyy. The valid range sould be from Jan , 1900 to December 31, 2099


function isValidDate(d) {
  let regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((19|20)[0-9]{2})$/
  return regex.test(d)
}

console.log(isValidDate("12/15/2021"))
