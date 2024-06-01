// Write a function is EmptyObject that takes an object as input and determines whether it is empty or not. An empty
// object is defined as an object with no own properties.


function isEmptyObject(param) {
  return Object.keys(param) <= 0
}

console.log(isEmptyObject({}))
