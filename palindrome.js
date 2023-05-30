/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    // check if in negative
    if (x < 0) return false

    // declare variables
    let remainder,
        reversed = 0,
        original = x

    // will run for each digit in number
    while (x != 0) {
        // get last digit of processed number
        remainder = parseInt(x % 10)
        // make number longer for 10 and add last digit
        reversed = parseInt(reversed * 10) + remainder
        // remove last digit
        x = parseInt(x / 10)
    }

    return original === reversed ? true : false 
};


const isPalindromeUsingStr = (x) => x === String(x).split('').reverse().join('') ? true : false


console.log(isPalindrome(121))

