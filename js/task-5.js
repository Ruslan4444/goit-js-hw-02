const checkForSpam = function (message) {
  const messageToLowerCase = message.toLowerCase();
  const includesSpam = messageToLowerCase.includes('spam') || messageToLowerCase.includes('sale');
  return includesSpam;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true