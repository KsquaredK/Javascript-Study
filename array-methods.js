// =====***** Array Methods *****=====
//  ===*** .length, .pop, .push, .shift, unshift, splice, 
// .forEach, .map, .filter, .findIndex, .reduce

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 
'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 
'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length) //24

secretMessage.pop() 

console.log(secretMessage.length) //23

secretMessage.push("to", "Program")
console.log(secretMessage)
/*[ 'Learning',
  'is',
  'not',
  'about',
  'what',
  'you',
  'get',
  'easily',
  'the',
  'first',
  'time,',
  'it',
  'is',
  'about',
  'what',
  'you',
  'can',
  'figure',
  'out.',
  '-2015,',
  'Chris',
  'Pine,',
  'Learn',
  'to',
  'Program' ] */
console.log(secretMessage.length) //25

secretMessage[7] = "right"
console.log(secretMessage) /*
[ 'Learning',
  'is',
  'not',
  'about',
  'what',
  'you',
  'get',
  'right',
  'the',
  'first',
  'time,',
  'it',
  'is',
  'about',
  'what',
  'you',
  'can',
  'figure',
  'out.',
  '-2015,',
  'Chris',
  'Pine,',
  'Learn',
  'to',
  'Program' ] */
  console.log(secretMessage.length) //25

  secretMessage.shift()
  console.log(secretMessage.length) //24

  secretMessage.unshift("Programming")
  console.log(secretMessage.length) //25

secretMessage.splice(6, 5, "know")
console.log(secretMessage.length) //21
console.log(secretMessage.join(" "))
/* Output: Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program */


// ===*** ITERATORS ***===
// .forEach
//  executes same code for each element in an array, does not mutate, returns undefined
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});
console.log(onlyNumbers);

// forEach with arrow function
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"


// .map
// iterates array, takes an argument of a callback function, and returns new array
const numbers = [1, 2, 3, 4, 5]; 
// assign to new array bigNumbers the return value of the array method .map(), which multiplyies each element in numbers array by 10
const bigNumbers = numbers.map(number => {
  return number * 10;
  });
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]


const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(''));
// output: HelloWorld

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(number => {
  return number / 100;
  })
console.log(smallNumbers);
// output: [ 1, 2, 3, 4, 5 ]


// .filter
// takes a callback function that returns a boolean as argument, returns all elements that evaluate true to new array
// filter for words under 6 letters in length
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
const shortWords = words.filter(word => {
  return word.length < 6;
});
console.log(shortWords)


// .filter() for randomNumbers 250 or lower
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(number => {
  return number < 251;
});
console.log(smallNumbers)

// filter for words with at least 8 letters
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})
console.log(favoriteWords);
console.log(longFavoriteWords);

// .findIndex
// finds and returns index of first element that evalauates true to calback function, returns -1 if no elements satisfy condition

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
console.log(foundAnimal, "foundAnimal")
// output: 7

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's'
})
console.log(startsWithS, 'startsWithS');
// output: 3

const jumbledNums = [123, 25, 78, 5, 9];  
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
console.log(lessThanTen, "lessThanTen") //output: 3


// .reduce
// iterates an array, takes values of elements and returns a single value (see example below where first letters of an array of substrings is reduced to a new string/word)
// takes 2 arguments: accumulator (running total), and currentValue (element to be added to accumulator)
// interesting real-world application in the DOM: https://trekinbami.medium.com/explanation-of-javascripts-reduce-with-a-real-world-use-case-f3f5014951e2
const newNumbers = [1, 3, 5, 7];
const newSum 
= newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue, "\n");
//   the 10 in the return statement is an optional second argument that can be added to .reduce
  return accumulator + currentValue
}, 10);
console.log(newSum);
/* output, including logs inside loop to reflect additive process
The value of accumulator:  10
The value of currentValue:  1 

The value of accumulator:  11
The value of currentValue:  3 

The value of accumulator:  14
The value of currentValue:  5 

The value of accumulator:  19
The value of currentValue:  7 

The array reduces to: 26: 
*/

// .some, .filter, .length, .every
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(".some: ", words.some(word => {
  return word.length < 6;
}));

const interestingWords = words.filter((word) => {
  return word.length > 5});
console.log(".filter: ", interestingWords)

console.log(".every: ", interestingWords.every((word)=> {return word.length > 5}));
/* output:
 .some: true
.filter:  [ 'unique', 'uncanny', 'oxymoron' ]
.every:  true
*/

// MORE EXAMPLES
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));
/* output: 
Have you visited Orlando?
Have you visited Dubai?
Have you visited Edinburgh?
Have you visited Chennai?
Have you visited Accra?
Have you visited Denver?
Have you visited Eskisehir?
Have you visited Medellin?
Have you visited Yokohama?
*/

// Choose a method that will return a new array
const longCities = cities.filter(city => {
return city.length > 7});

console.log("\n","Here are cities with long names: " + longCities, "\n")
// output:
// Here are cities with long names: Edinburgh,Eskisehir,Medellin,Yokohama 


// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word, "\n")
// output:
// CODECADEMY

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);
console.log("Here are smaller numbers: ", smallerNums, "\n")
// output:
// Here are smaller numbers:  [ -4, 45, 70, 195, 345, 520, 995 ] 

// Choose a method that will return a boolean value
nums.some(num => console.log(num > 440));
/* output:
false
false
false
false
false
true
true
*/










/* =============================================================
    Array method challenges:  

    Define a callback function before you use it in a iterator.
    Chain two iteration methods on the same array.
    Use the optional arguments in an iterator to include the index or the entire array. (Check out MDN’s Array iteration methods page for more information)
    Use .reduce() to take a multi-layered array and return a single layer array from scratch.
*/












