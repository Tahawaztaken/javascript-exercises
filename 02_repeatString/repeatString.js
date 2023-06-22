const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    var concatenatedword = "";
    for (let i = 0; i < num; i++){
        concatenatedword += string;
    }
    return concatenatedword
};

// Do not edit below this line
module.exports = repeatString;
