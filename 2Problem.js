// make a function that generate hash from the given input
// eg: "my name is " => "#MyNameIs"

function generateHash(data) {
  data = data.split(' ');

  data = data.map((item) => {
    return item.replace(item[0], item[0].toUpperCase())
  })

  return "#".concat(data.join(''));


}

// generateHash("my name is niko");

console.log(generateHash("my name is niko"));
