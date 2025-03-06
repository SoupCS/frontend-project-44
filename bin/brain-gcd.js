// eslint-disable-next-line no-param-reassign
import readlineSync from 'readline-sync';
import { getRandomNumber, welcome } from '../src/cli.js';

const name = welcome();

let count = 0;

// eslint-disable-next-line no-param-reassign,camelcase
function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) return false;
  // eslint-disable-next-line no-param-reassign
  x = Math.abs(x); y = Math.abs(y);
  while (y) {
    const t = y;
    // eslint-disable-next-line no-param-reassign
    y = x % y;
    // eslint-disable-next-line no-param-reassign
    x = t;
  }
  return x;
}

function game() {
  console.log('What is the result of the expression?');
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  const correct = gcd_two_numbers(first, second);
  console.log(`Question: ${first} ${second}`);
  const answer = readlineSync.question('Your answer: ');
  if (!answer.isNaN && answer === correct) {
    console.log('Correct!');
    count += 1;
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
    } else {
      game();
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
  }
}

game();
