const palindromes = function (string) {
    let palindrome = true;
    let initialArray = [];
    for (const char of string) {
        if (char.toUpperCase() != char.toLowerCase()) {
            initialArray.push(char.toLowerCase())
        }
    }
    let reversedArray = [...initialArray].reverse();
    for (let i = 0; i < initialArray.length; i++) {
        if (initialArray[i] != reversedArray[i] ) {
            palindrome = false;
            break;
        }
    }
    return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
