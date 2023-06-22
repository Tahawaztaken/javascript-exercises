const removeFromArray = function(myArray, ...restParameters) {
    let item = 0;
    while (item < restParameters.length) {
      let index = 0;
      while (index < myArray.length) {
        if (restParameters[item] === myArray[index]) {
          myArray.splice(index, 1);
          item--;
        }
        index++;
      }
      item++;
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
