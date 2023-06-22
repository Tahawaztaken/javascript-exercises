const sumAll = function(firstNumber, secondNumber) {
    if (typeof firstNumber != typeof 1 || typeof secondNumber != typeof 1){
        return "ERROR"
    }

    if (firstNumber < 0 || secondNumber < 0){
        return "ERROR"
    }


    const biggerNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
    const smallerNumber = firstNumber < secondNumber ? firstNumber : secondNumber;

    var difference = (biggerNumber - smallerNumber) + 1;
    var total = 0;
    while (difference != 0) {
        total += difference;
        difference--;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
