/*  =====WORKING WITH EVENTS 88888=====*/

// register event handler with .addEventListener()
// The .addEventListener() method can add multiple event handler functions

// selects event target, in this case a button
let readMore = document.getElementById('read-more');
// selects element implemented by event handler 
let moreInfo = document.getElementById('more-info');

// define function to be passed into listener
const showInfo = () => {
  moreInfo.style.display = 'block';
}
// add event listener w/ event & function as arguments
readMore.addEventListener('click', showInfo())



//Using Event Listeners to hide and display content and change text displayed:
//  target affordance 1
let view = document.getElementById('view-button');
// target affordance 2
let close = document.getElementById('close-button');
// target display element
let codey = document.getElementById('codey');

// when called, assign these CSS values
let open = function() {
    codey.style.display = 'block';
    close.style.display = 'block';
};
// when called, assign these CSS values
let hide = function() {
    codey.style.display = 'none';
    close.style.display = 'none';
};
// add event listeners with arguments on these elements
view.addEventListener('click', open)
close.addEventListener('click', close)
// when called, change element content to this
const textChange = () => {
    view.innerHTML = 'Hello World!'
}
// when called, change element content and display to this
const textReturn = () => {
    view.innerHTML = 'View'
    hide()
}
view.addEventListener('click', textChange)
close.addEventListener('click', textReturn);

// register event listener with .onevent, e.g. onclick 
// .onevent allows for one event handler function to be attached to the event target:
//add event listeners to reset on subsequent clicks:

// view.onlick = textChange;
// close.onclick = textReturn

//note: I didn't get .onclick to work in this context - the innerHTML text changes failed to render


// Using .removeEventListener
let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";
//   use same event and function passed into addEventListener
  button.removeEventListener('click', showFortune);
}

button.addEventListener('click', showFortune);



// Event Object Properties, e.g. timestamp
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

let sharePhoto = function(event) {
  // access property thru event target
  event.target.style.display = 'none'
  // use event object property to log load time
  text.innerHTML = `${event.timeStamp} milliseconds to load`
}
// event listener with arguments
share.addEventListener('click', sharePhoto)


// Event Types
// additional events: wheel
// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
  let randomColor = 'rgb('
  + colorValue() + ','
  + colorValue() + ','
  + colorValue() + ')';
  // note in JS using came case for CSS property background-color
  event.target.style.backgroundColor = randomColor
}

button.addEventListener('click', colorChange)

mysteryButton.addEventListener('wheel', colorChange)


// Mouse Events
// These variables store the boxes seen in the browser
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// event handler for item1
const increaseWidth = () => {
  itemOne.style.width = '763px';
}
itemOne.onmouseover = function(event) {      
  increaseWidth();
};
// event handler for item2
const changeBackground = () => {
  itemTwo.style.backgroundColor = '#ffffff'
}

itemTwo.onmouseup = event => {
  changeBackground()
}
// event handler for item3
const changeText = () => {
  itemThree.innerHTML = 'The mouse has left the element'
}

itemThree.onmouseout = e => {
  changeText()
}
// event handler for item4
const showItem = () => {
  itemFive.style.display = 'block'
}

itemFour.onmousedown = e => {
  showItem()
}

// Keyboard Events
// a simple game that bounces a ball by changing CSS properties
let ball = document.getElementById('float-circle');

const up = e => {
  ball.style.bottom = '250px'
}

const down = e => {
  ball.style.bottom = '50px'
}

document.addEventListener('keydown', up)
document.addEventListener('keyup', down)
