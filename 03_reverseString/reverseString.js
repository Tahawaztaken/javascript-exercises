const reverseString = function(myString) {
    stringArray = myString.split('');
    let reversedString = stringArray.reverse().join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
