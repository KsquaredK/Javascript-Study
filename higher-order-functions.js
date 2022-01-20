//  =====***** HIGHER-ORDER FUNCTIONS *****+++++
// Functions passed in as arguments and/or returned as output

// *** Creating reference to function ***
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {

}
// when creating reference, don't use () with original function, or that would assign new variable to the output of that function
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

is2p2();
// higher-order functions ore oblects with their own methods, including .length, .name, and .toString
console.log(is2p2.name); // output: checkThatTwoPlusTwoEqualsFourAMillionTimes

// more at MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

// ***Callback Function - a function passed into another function as an argument, without invoking it

const characters = [
    {name: 'Luke Skywalker', img: 'http://example.com/img/luke.jpg', species: 'human'},
    {name: 'Han Solo', img: 'http://example.com/img/han.jpg', species: 'human'},
    {name: 'Leia Organa', img: 'http://example.com/img/leia.jpg', species: 'human'},
    {name: 'Chewbacca', img: 'http://example.com/img/chewie.jpg', species: 'wookie'}
  ];
  
  const humans = data => data.filter(character => character.species === 'human');
  const images = data => data.map(character => character.img);
  const compose = (func1, func2) => data => func2(func1(data));
  const displayCharacterImages = compose(humans, images); // callback functions
  
  console.log(displayCharacterImages(characters));
  /* output: 
  [ 'http://example.com/img/luke.jpg',
  'http://example.com/img/han.jpg',
  'http://example.com/img/leia.jpg' ]
  */
