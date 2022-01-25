//   Built-In ObjectMethods
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Object.keys returns keys
const robotKeys = Object.keys(robot);  
console.log(robotKeys); //output: [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

// Object.entries:
const robotEntries = Object.entries(robot)
console.log(robotEntries); //returns obj properties

// Object.assign:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log("newRobot: ", newRobot); /*
output: newRobot:  { laserBlaster: true,
voiceRecognition: true,
model: 'SAL-1000',
mobile: true,
sentient: false,
armor: 'Steel-plated',
energyLevel: 75 }
*/


  
    