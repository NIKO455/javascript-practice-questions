// WAF to validate credit card numbes using Luhr algorithm

function getSum(params) {
  let sum = 0;
  while (params > 0) {
    let num = params % 10;
    sum = sum + num;
    params = Math.floor(params / 10);
  }
  if (sum.toString().length > 1) {
    sum = getSum(sum);
  }
  return sum;
}

function getSumOfAll(params) {
  return params.reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);
}

function validateCreditCard(cardNumber) {
  let card = cardNumber.split(" ").join("").split("").reverse();

  for (i = 1; i <= card.length - 1; i = i + 2) {
    const oddValue = card[i];
    card[i] = oddValue * 2;
    if (card[i].toString().length > 1) {
      card[i] = getSum(card[i]);
    }
  }

  // find sum
  let sum = getSumOfAll(card);

  if (sum % 10 === 0) {
    return true;
  }

  return false;
}

console.log(validateCreditCard("4539 1488 0343 6467")); // Output: true
console.log(validateCreditCard("8273 1232 7352 0569")); // Output: false
