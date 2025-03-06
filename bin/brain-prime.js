import readlineSync from 'readline-sync';
import { getRandomNumber, welcome } from '../src/cli.js';

const name = welcome();

let count = 0;

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

function game() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const int = getRandomNumber(1, 100);
  const correct = isPrime(int) ? 'yes' : 'no';
  console.log(`Question: ${int}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correct) {
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
