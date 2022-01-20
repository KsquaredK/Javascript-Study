// =====***** LOOPS - syntax *****=====
// ===*** For-Loop - count-controlled ***===
// loop executes defined number of times
for (let counter = 5; counter <11; counter++) {
    console.log(counter);
  }
  /* output:
  5
  6
  7
  8
  9
  10
  */
  
  /* anatomy of a for-loop *
  initialization:
  "let counter = 5;"
  
  stopping condition:
  "counter < 11;"
  
  iteration statement:
  counter++
  */

  // ===*** Loop in Reverse ***===
  for (let counter = 10; counter >= 0; counter--) {
    console.log(counter);
  }
// useful for nested loop when removing elements from first array:
// w/o reverse, elements can be removed prior to being evaluated against 2nd array, causing an undetected error

// ===*** Looping Thru Arrays ***===
// i is for "index"

const vacationSpots = ['Bali', 'Paris', 'Tulum'];
// I also see "i <= arr.length - 1;"
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i] + '.');
}

// ===*** Nested Loops: Comparing Two Arrays ***===
let bobsFollowers = ['Zeke', 'Bill', 'Ari', 'Elaine'];
let tinasFollowers = ['Zeke', 'Ari', 'Curt'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push (tinasFollowers[j]);
 } 
  }
};
  console.log(mutualFollowers)

//   **good way to visualize nested loops working:**
const animal = 'cat';
 
for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
  for (let j = 1; j < 4; j++) {
    console.log(j);
  }
} // OUTPUT: c123a123t123


//   ===*** While Loop - condition-controlled ***===
// set a condition to break loop, otherwise infinite loop is possible
// useful in games, and when number of times loop will run is undetermined
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}

/* 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
} */


// ===*** Do...While Loop
/* The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. 
The condition is evaluated after executing the statement, resulting in the specified statement executing at least once. */
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"


//  ===*** Break keyword ***===
// Allows breaking out of loop execution prior to meeting lop condition
/* Break statements can be especially helpful when we’re looping through large data structures! With breaks, 
we can add test conditions besides the stopping condition within the block, and exit the loop when they’re met. */
for (let i = 0; i < 99; i++) {
    if (i > 2 ) {
       break;
    }
    console.log('Banana.');
  }
   
  console.log('Orange you glad I broke out the loop!'); 
  /* output: 
Banana.
Banana.
Banana.
Orange you glad I broke out the loop! */