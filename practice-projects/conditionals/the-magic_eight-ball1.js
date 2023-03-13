`Implementation using if else conditionals technique`
let userName = '';
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
console.log(`\nIF/ELSE Application Case`)
console.log('***************************')
// Computer result
console.log(`${userName}'s Eight Ball Prediction(If/Else): ${eightBall} `);

// IF/ELSE Application Case
// Control Flow initiation using if else

if (eightBall === 0){
  console.log('It is certain');
}
else if(eightBall === 1){
  console.log('It is decidedly so');
}
else if(eightBall === 2){
  console.log('Reply hazy try again');
}
else if(eightBall === 3){
  console.log('Cannot predict now');
}
else if(eightBall === 4){
  console.log('Do not count on it');
}
else if(eightBall === 5){
  console.log('My sources say no');
}
else if(eightBall === 6){
  console.log('Outlook not so good');
}
else/*(eightBall === 7)*/{
  console.log('Signs point to yes');
}
