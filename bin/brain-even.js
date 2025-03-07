#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomNumber, welcome } from '../src/cli.js';

const name = welcome();

let count = 0;

export default function game() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const int = getRandomNumber(1, 100);
  const correct = int % 2 === 0 ? 'yes' : 'no';
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
