/*  =====***** STRING METHODS *****=====
.split  
*/

// .split()
// divides string into organized substrings by taking as a parameter a pattern for subdivision, and returns an array
const str = 'The quick brown fox jumps over the lazy dog.';

// extract one substring by its index
const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

// extract one character by its index
const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

// in essence, converts string to array
const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

