const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
  return num1 - num2
};

const sum = function(myArray) {
  let sumArray = 0
  for (let i = 0; i < myArray.length; i++){
    sumArray += myArray[i]
  }
  return sumArray
};

const multiply = function(num1, ...numN) {
  let sum = num1;
  for (let i = 0; i < numN.length; i++) {
    sum *= numN[i]
  }
  return sum
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(x) {
    return (x > 1) ? x * factorial(x-1) : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
