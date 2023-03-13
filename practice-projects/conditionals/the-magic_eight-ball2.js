let userName = '';
`Implementation using if else conditionals technique`
let userQuestion = '';
userName = 'Player';
userQuestion = `What's your prediction?`;

// greeting = `Hello ${userName}!`;
// console.log(greeting);
// Applying tenary arguments
userName === `${userName}` ? console.log(`Hello ${userName}!\n`) : console.log('Hello!\n');
// User question statement
console.log(`${userName}'s Question: ${userQuestion}`);
// Generate a randooom number 
randomNumber = Math.floor(Math.random() * 8);
// Eight ball taking randomNumnber as a dependency
let eightBall = `${randomNumber}`;

// To give a visual difference of the input

// Computer result
console.log(`${userName}'s Eight Ball Prediction(If/Else): ${eightBall} `);

// Control flow initiation using the switch principle
console.log(`\nSWITCH Application Case`)
console.log('***************************')

// Computer prediction result
console.log(`${userName}'s Eight Ball Prediction(If/Else): ${eightBall} `)

switch (eightBall){
  case '0':
    console.log(`It is certain`);
    break;
  case '1':
    console.log(`It is decidedly so`);
    break;
  case '2':
    console.log('Reply hazy try again');
    break;
  case '3':
    console.log('Cannot predict now');
    break;
  case '4':
    console.log('Do not count on it');
    break;
  case '5':
    console.log('My sources say no');
    break;
  case '6':
    console.log('Outlook not so good');
    break;
  case '7':
    console.log('Signs point to yes!');
    break;

  default:
    console.log(`Please enter a number that is in the range of 0-8`);
    break;
}

