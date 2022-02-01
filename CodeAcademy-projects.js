/* =====***** CODEACADEMY PROJECTS *****=====
1.) Temp Calculator
2.) Your Age in Dog Years
3.) Magic Eightball (if/else & switch case)
4.) Race Day
5.) Rock Scissors Paper
6.) Sleep Debt Calculator
7.) Training Day (troubleshoot scope errors)
8.) Whale Talk (nested arrays)
9.) Simple Linting Tool (working with arrays)
10.) Meal Maker (working with objects)
11.) ChoreDoor (web game - JS/HTML/CSS)
12.) Piano Keys (interactive piano tutor)


/* TEMP CALCULATOR - Kelvin/Celsius/Fahrenheit/Newton  */

//the value of kelvin will remain constant
let kelvin = 282

// celsius is 273 degrees less than kelvin
let celsius = kelvin - 273
// use the keyword let for variable 'fahrenheit' so value may change
let fahrenheit = celsius * (9/5) + 32;
let newton = celsius * (33/100)
newton = Math.floor(newton)


// Math.floor() rounds down decimals
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit, ${newton} degrees Newton, ${celsius} degrees Celsius, and ${kelvin} degrees Kelvin.`, "\n")

/*  DOG YEARS */
// declare variable, assign value of current age
let myAge = 62
// declare variable for years with unique multiplier
let earlyYears = 2
// calculate age minus earlyYears
let laterYears = myAge - earlyYears
// calculate new value of laterYears
laterYears = laterYears * 4
// multiply earlyYears by its multiplier
earlyYears = earlyYears * 10.5

// add earlyYears and laterYears to arrive at my age in dog years
let myAgeInDogYears = earlyYears + laterYears
// assign my name as a string to a variable, call toLowerCase() on string
let myName= "Kelly"
// console.log(myName.toLowerCase())

console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`, "\n")

/* MAGIC 8-BALL - switch case  */
let userName = 'Prue'
let userQuestion = "Will I get everything I dream of?"

// log prompt with userName using string interpolation
if (userName !== '') {
  console.log(`Hello, ${userName}! ${userName} asks, "${userQuestion}"`)
}
// if no userName given, log anonymous prompt
else {
  console.log(`Hello! Our guest asks, "${userQuestion}"`)
}

 let  eightBall = '';
//  generate random number between 0-7
  let randomNumber = Math.floor(Math.random() * 8);
// execute switch case for 8 possible responses
 switch (randomNumber) {
  //  use backticks so response will log string
   case 0: eightBall = `It is certain`
   break;
   
   case 1: eightBall = `It is decidedly so`
   break;
   
   case 2: eightBall = `Reply hazy try again`
   break;

   case 3: eightBall = `Cannot predict now`
   break;
   
   case 4: eightBall = `Do not count on it`
   break;
   
   case 5: eightBall = `My sources say no`
   break;

   case 6: eightBall = `Outlook not so good`
   break;
   
   case 7: eightBall = `Signs point to yes`
   break; 

   default: console.log(`I dunno...`)

}
// log the variable eightBall with the value assigned in the switch case
   console.log(eightBall, "\n")


   /*  Magic 8-Ball - else if  */
//    let userName = 'Prue'
// let userQuestion = "Will I get everything I dream of?"

// if (userName !== '') {
//   console.log(`Hello, ${userName}! ${userName} asks, "${userQuestion}"`)
// }
// else {
//   console.log(`Hello! Our guest asks, "${userQuestion}"`)
// }

//  let  eightBall = '';
//  let randomNumber = Math.floor(Math.random() * 8);

//   if (randomNumber == 0) {
//    eightBall = `It is certain`
//   } 
//   else if
//    (randomNumber == 1) {
//    eightBall = `It is decidedly so`
//   }
//     else if
//    (randomNumber == 2) {
//    eightBall = `Reply hazy try again`
//   }
//   else if
//    (randomNumber == 3) {
//    eightBall = `Cannot predict now`
//   }

//   else if
//    (randomNumber == 4) {
//    eightBall = `Do not count on it`
//   }

//   else if
//    (randomNumber == 5) {
//    eightBall = `My sources say no`
//   }
//   else if
//    (randomNumber == 6) {
//    eightBall = `Outlook not so good`
//   }
//   else if
//    (randomNumber == 7) {
//    eightBall = `Do not trifle with Magic Eightball`
//   }

//    console.log(`The Eightball answered, "${eightBall}"`)


  //  ***==== RACE DAY 

  // randomly assigns a number < 1000
let raceNumber = Math.floor(Math.random() * 1000);
// randomly assign a number < 102
let runnerAge = Math.floor(Math.random() * 102);

// assign variables for runners' ages and race times; change this for different outputs
let earlyRegistrant = true;

// generate random race numbers > 1000 for early race registrants over 18
if (earlyRegistrant == true && runnerAge > 18) {
  // add 1000 to raceNumber
  raceNumber = raceNumber + 1000;

// Log race time and race number for early registrants
  console.log(`Your race number is ${raceNumber}, and your start time is 9:30 am.`, "\n")

// Log race time and numbers for all registrants
  } else if
  (earlyRegistrant !== true && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber} and your start time is 11 am.`, "\n")
  }

if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber} and your start time 12:30 pm.`, "\n")
  }

  if (runnerAge == 18) {
  console.log(`See registration desk.`, "\n")
  }

//  ====*** ROCK SCISSORS PAPER GAME featuring cheatcode option
// first function: handle and return user input
const getUserChoice = userInput => {
  // handle user input of any case
    userInput = userInput.toLowerCase();
  // when input matches criteria, return
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput ==="bomb") {
          return userInput;
    } 
  }
  
  // second function: generate computer choice for game
  const getComputerChoice = () => {
    // generate random number between zero-2
    const randomNumber = Math.floor(Math.random() * 3);
    // return string that corresponds to randomNumber
    switch (randomNumber) {
      case 0: 
      return "rock";
      break;
  
      case 1: 
      return "scissors";
      break;
  
      case 2: 
      return "paper";
      break;
  // adding a default is best practice when switch case breaks
      default: console.log(`That's weird...I got nuthin'. Guess you win! Want to play again?`)
    }
  }
  
  // third function: compare userChoice and computerChoice to determine winner, log result
  const determineWinner = (userChoice, computerChoice) => {
    // easter egg choice
    if (userChoice === "bomb") {
    return `YOU WIN!!! YOU WIN!!! OMFG!!!", \n"`;
      }
      // cf user input and computer: if they're the same, log tie game
    if (userChoice === computerChoice) {
    return `Tie game! Everybody wins!`, "\n";
    }
    // cf user input & computer for other outcomes if choice is "rock"
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
      return `Rock? I don't see any rock...YOU LOSE!`, "\n";
      }
      else {
      return `Smashy-smash! Rock wins!!`, "\n";
    }
    }
    // cf user input & computer for other outcomes if choice is "paper"
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return `Ouchy, you got shredded...YOU LOSE!`, "\n";
      }
      else {
        return `Buh-BYE, rock. Paper wins!!`, "\n";
      }
    }
    // cf user input & computer for other outcomes if choice is "scissors"
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return `Beware of falling boulders, Mr. Snippy...YOU LOSE!`, "\n";
      }
      else {
        return `Snip. Snip. Snip...Scissors win!!`, "\n";
      }
    }
    // after exhausting if statements above, use else to address input outside of game parameters
    else {
      return console.log("You just had one job.","\n","One job and three little old words to choose from: rock, paper, or scissors.", "\n","Try again, genius.", "\n");
    }
  }
  
  // fourth function: play game by taking user input and executing sequence of functions above
  const playGame = () => {
    const userChoice = getUserChoice("bip");
    console.log(`You threw: ${userChoice}`);
    const computerChoice = getComputerChoice();
    console.log(`The computer threw: ${computerChoice}`,"\n","And the winner is: ", "\n");
    console.log(determineWinner(userChoice, computerChoice));
    };
    // invoke playGame() to execute above logic
  playGame();


  //  ===*** Sleep Debt Calculator  ***===
  const getSleepHours = day => {
    switch (day) {
      case "monday": return 8
      break;
  
      case "tuesday": return 8
      break;
  
      case "wednesday": return 8
      break;
  
      case "thursday": return 8
      break;
  
      case "friday": return 8
      break;
  
      case "saturday": return 8
      break;
  
      case "sunday": return 8
      break;
  
     default: console.log(`dataset incomplete`)
    }
  }
  
  // console.log(getSleepHours("friday"))

  const getActualSleepHours = () => 
    //  getSleepHours("monday") +
    //  getSleepHours("tuesday") +
    //  getSleepHours("wednesday") +
    //  getSleepHours("thursday") +
    //  getSleepHours("friday") +
    //  getSleepHours("saturday") +
    //  getSleepHours("sunday")
    8 + 8 + 4 + 8 + 6 + 6 + 9
  
  // console.log(getActualSleepHours())

const getIdealSleepHours = idealHours => 
  // const idealHours = 8;
  idealHours * 7;

// console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  if (idealSleepHours === actualSleepHours) {
    console.log(`Perfection in your sleep patterns! Your actual and ideal sleep are the same.`)
  }
  else if (idealSleepHours > actualSleepHours) {
  let debt = idealSleepHours - actualSleepHours
  console.log(`Get your butt to bed tonight, sleepyhead! You have a sleep debt of ${debt} hour(s).`)
  }
  else {
  let surplus = actualSleepHours - idealSleepHours
  console.log(`Sackhound! You have a sleep surplus of ${surplus} hour(s)`)
  }
}
calculateSleepDebt()

//  ===*** Trainging Day: troubleshooting variable scope issues ***===

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  const getTrainingDays = event => {
    let days = 0;
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
  
    return days;
  };
  
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
    };
  
  const logTime = (name, days) => {
  
    console.log(`${name}'s time to train is: ${days} days`);
    };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  
  
  logEvent(name = "Nala", event);
  logTime(name = "Nalal", days);
  
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
   
  logEvent(name2, event2);
  logTime(name2, days2);


  // ===*** Whale Talk - compare strings, extract vowels, double some elements when pushing to new array ***===
let input = "Would you like to swing on a star"
const vowels = ["a", "e", "i", "o", "u"]

const resultArr = []

for (i = 0; i < input.length; i++) {
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
    // resultArr.push(input[j])
    // console.log(vowels[j])
      if (input[i] === "e") {
        resultArr.push("ee");
      } else if (input[i] === "u") {
      resultArr.push("uu");
      } else {
      resultArr.push(vowels[j])
      }
    }
  }
}
console.log(resultArr.join('').toUpperCase())
  

// ===*** Simple Linting Tool - working with arrays ***===
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// convert string to array of substrings
let storyWords = story.split(' ')
//filter array 
let betterWords = 
storyWords.filter(function(word) {
  // and return words not in 2nd array
  return !unnecessaryWords.includes(word)
})

console.log(betterWords, betterWords.length, "length of storyWords array: ", storyWords.length)

// example: comparing two arrays for duplicates
// log instances of overrusedWords elements occurring in storyWords
// iterate and generate new array using filter
let tired = storyWords.filter(function(word) {
  // return words that match elements in second array
  return overusedWords.includes(word)
})
console.log(`You have used these tired words ${tired.length} times in your story: ${tired}`)
/* Output: 
You have used these tired words 8 times in your story: really,basically,really,very,very,very,very,very
9 */

// find the number of sentences in the story
let sentenceCount = 0;
// iterate each word checking condition
betterWords.forEach(word => {
  // if the character in the last index of a word is either puctuation mark
  if (word[word.length-1] === '.' || word [word.length-1] === '1') {
    // increment 1 the value of sentenceCount
    sentenceCount += 1;
    } 
});
console.log(sentenceCount);
// expected output: 9

// write function to log results
const lintingTotals = () => {
  console.log("Here are your total counts:", "\n", "word count - ", betterWords.length, "\n", "sentence count - ", sentenceCount, "\n", "times you chose overused words - ", tired.length)
}
lintingTotals();
/* output: Here are your total counts: 
 word count -  182 
 sentence count -  9 
 times you chose overused words -  8 
 */

 // log array betterWords as single string
console.log(betterWords.join(" "))

//  additional challenges:
/* 

    • For the overused words, remove it every other time it appears.

    • Write a function that finds the word that appears the greatest number of times.

    • Replaced overused words with something else.
*/

/* ===*** MEAL MAKER - getters, setters, factory functions, etc. ***=== */
const menu = {
  // object literal defines courses object
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
// getter returns all properties of courses obj
// getters to return specific courses
  get appetizers() {
      return this._courses.appetizers;
    },
  get mains() {
      return this._courses.mains;
    },
  get desserts() {
        return this._courses.desserts;
    },
// setters to constrain how new data is added to obj
// setters always take a parameter; here 'data is used for simplicity
  set appetizers(data) {    
    this._courses.appetizers = data;    
  },

  set mains(data) {    
    this._courses.mains = data;    
  },

    set desserts(data){    
    this._courses.desserts = data;    
  },
  get courses () {
    // could use this return statement:
    // return .courses;
    // or make use of getters:
    return {
      appetizers: this.appetizers,       
      mains: this.mains, 
      desserts: this.desserts
    }
  },
// obj method for adding new dish to menu
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = { 
      name: dishName,
      price: dishPrice
  }
  // append this new object to this course, add to dish array    // 
  return this._courses[courseName].push(dish);
  },

  // obj method to get random dish from menu
  getRandomDishFromCourse(courseName) {
    // assign array of courses a variable for clarity in following code
    let dishes = this._courses[courseName]
  // get random number (limited by # of elements in array)
    let randomIndex = Math.floor(Math.random() * dishes.length)
    // use that random number to return an element with the corresponding index
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    // 'appetizers' string is argument passed in via courseName parameter to access dish array (derived from _courses)
    const appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Here's a good-looking meal: ${appetizer.name}, ${main.name}, and ${dessert.name}, all for ${totalPrice}` 
    }
};
// invoke addDishToMenu method to populate dish array 
  menu.addDishToCourse('appetizers', 'tapenade', 6.99);

  menu.addDishToCourse('appetizers', 'avgolemono soup', 10.99);
  menu.addDishToCourse('appetizers', 'saganaki', 11.99);
  menu.addDishToCourse('mains', 'eggplant tower', 12.99);
  menu.addDishToCourse('mains', 'pastitsio', 14.99);
  menu.addDishToCourse('mains', 'moussaka', 13.99);
  menu.addDishToCourse('desserts', 'baklava', 7.99);
  menu.addDishToCourse('desserts', 'tiramisou', 7.99);
  menu.addDishToCourse('desserts', 'figs and cheese plate', 7.99);

// map random meal to new variable
  const meal = menu.generateRandomMeal();
  console.log(meal, menu.desserts, menu.mains, menu.appetizers)




/* ===*** CHORE DOOR web game */
// DEBUG: button functionality not working, and isBot() is not triggering end of game

// DEBUG: button functionality not working, and isBot() is not triggering end of game

let doorImage1 = document.getElementById('door1');

let doorImage2 = document.getElementById('door2')

let doorImage3 = document.getElementById('door3')

let startButton = document.getElementById('start')

let currentlyPlaying = true

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'

const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'

const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg'

const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true
  } else {
    return false
  }
}

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false
  } else {
    return true
  }
}

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver("win");
  } else if
    (numClosedDoors !== 0 && isBot(door)) {
      gameOver('lose')
    }
  } 


const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }

}


door1.onclick = () => {
  if(currentlyPlaying && !isClicked(door1)) {
  door1.src = openDoor1
  playDoor(door1);
    } 
  }


door2.onclick = () => {
  if(currentlyPlaying && !isClicked(door2)) {
  door2.src = openDoor2
  playDoor(door2);
  }
}

door3.onclick = () => {
  if (!isClicked(doorImage3)) {
    door3.src = openDoor3
    playDoor(door3);
    } 
  }

  const startRound = () => {
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator()
  }

  startButton.onclick = () => {
    if (!currentlyPlaying) {
      startRound()
    }
  }

const gameOver = (status) => {
    if (status === 'win') {
      startButton.innerHTML = 'You win! Play again?'
    } else if (status === 'lose'){
      startButton.innerHTML = 'Game over! Play again?'
    }
    currentlyPlaying = false
  }

startRound()
  


  

  
  // ===*** PIANO KEYS  - interactive piano tutor ***===

  // The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below

const keyPlay = (event) => {
  event.target.style.backgroundColor = '#d17a22'
}

const keyReturn = (event) => {
  event.target.style.backgroundColor = ''
}

// Write a named function with event handler properties
let assignEvent = (note) => {
  note.onmousedown = () => {
  keyPlay(event)
  } 
  note.onmouseup = () => { 
  keyReturn(event)
  }
}


// Write a loop that runs the array elements through the function
notes.forEach(assignEvent)

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = () => {
  nextTwo.hidden = false
  nextOne.hidden = true
  document.getElementById('letter-note-five').innerHTML = "D"
  document.getElementById('letter-note-six').innerHTML = "C"
}

/* Write anonymous event handler property and function for the second progress button */
nextTwo.onclick = () => {
  nextThree.hidden = false
  nextTwo.hidden = true
  document.getElementById('word-five').innerHTML = 'DEAR'
  document.getElementById('word-six').innerHTML = 'FRI-'
  lastLyric.style.display = 'inline-block'
  document.getElementById('letter-note-three').innerHTML = "G"
  document.getElementById('letter-note-four').innerHTML = "E"
  document.getElementById('letter-note-five').innerHTML = "C"
  document.getElementById('letter-note-six').innerHTML = "B"
}


// // Write anonymous event handler property and function for the third progress button

nextThree.onclick = () = > {
  // nextOne.hidden = false
  startOver.hidden = false
  nextThree.hidden = true

  document.getElementById('word-one').innerHTML = "HAP-"
  document.getElementById('word-two').innerHTML = 'PY'
  document.getElementById('word-three').innerHTML = 'BIRTH-'
  document.getElementById('word-four').innerHTML = 'DAY'
  document.getElementById('word-five').innerHTML = 'TO'
  document.getElementById('word-six').innerHTML = 'YOU!'

  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
  lastLyric.style.display = 'none'
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}
  
  
  
  
  
  











