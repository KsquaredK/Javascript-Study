/* =====***** CODEACADEMY PROJECTS *****=====
1.) Temp Calculator
2.) Your Age in Dog Years
3.) Magic Eightball (if/else & switch case)
4.) Race Day
5.) Rock Scissors Paper
6.) Sleep Debt Calculator


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
  
  
  
  











