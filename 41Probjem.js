// Write a function to convert an amount form one currency to anohter using static exchange rates

const rates = {
  USD: 1,
  EUR: 0.9,
  GBR: 0.8,
  INR: 82,
}

function convertCurrency(amount, fromCurrency, toCurrency) {
  let intoUSD = amount / rates[fromCurrency]
  return intoUSD * rates[toCurrency]
}

console.log(convertCurrency(100, 'GBR', 'EUR'))
