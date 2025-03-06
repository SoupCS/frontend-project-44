#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomNumber, welcome } from '../src/cli.js';

const name = welcome();

let count = 0;

export default function game() {
  console.log('What is the result of the expression?');
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  const correct = first + second;
  console.log(`Question: ${first} + ${second}`);
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
    game();
  }
}

game();
