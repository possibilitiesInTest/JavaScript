// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//    // recursive soltuion
//     if (str.length <= 1) {return str};
//     return reverse(str.slice(1)) +str[0];
// }


// function reverse(str) {
//     // reverse loop through string
//     res = ""
//     for (let i = str.length-1; i >= 0; i--){
//         res += str[i];
//     }
//     return res;
// }

// function reverse(str) {
//     // split reverse join solution

//     return str.split("").reverse().join("");
// }


function reverse(str){
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}


// function reverse(str) {
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed;
//     }, "")
// }

// function reverse(str) {

    

// }




















module.exports = reverse;
