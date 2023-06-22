const palindromes = function (palindrome) {
//   if (palindrome.length % 2 != 0) {
    

    beginning = palindrome.slice(0, Math.floor(palindrome.length / 2))
    end = palindrome.slice(Math.ceil(palindrome.length / 2))

    if (beginning == end.split("").reverse().join("")){
        return true
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;
