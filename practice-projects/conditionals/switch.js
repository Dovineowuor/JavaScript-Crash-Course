/*
This switch block is a simplified if else block which returns true is the condition under examination is true hence commands the computer to do a specific taske 
It uses the syntax below:

let variable = variable-name;
  switch (variable-name){
    case 'condition':
      statement;
      break;

    case 'ccondition';
      statement;
      break

    default:
      statement;
      break;
    
  }
*/
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case "first place":
    console.log('You get the gold medal!')
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  case '':
    console.log('No medal awarded.');
    break;
  default:
    console.log('No medal awarded.');
    break;
}