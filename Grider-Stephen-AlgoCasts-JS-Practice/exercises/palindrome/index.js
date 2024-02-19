// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     reversed = "";
//     for (let char of str){
//         reversed = char + reversed;
//     }
//     return reversed === str;
// }

// function palindrome(str) {
//     left = 0;
//     right = str.length-1;

//     while (left < right) {
//         if (str[left] === str[right]){
//             left += 1;
//             right -= 1;
//         } else {
//              return false;
//         }
//     }
//     return true;
// }

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length -i -1];
    })
}




module.exports = palindrome;
