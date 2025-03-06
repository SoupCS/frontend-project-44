import readlineSync from 'readline-sync';

import { getRandomNumber, welcome } from '../src/cli.js';

const name = welcome();

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

function progressionggame() {
  const start = getRandomNumber(0, 5);
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(10, 15);
  const progression = getProgression(start, step, length);
  const hiddenNumber = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenNumber].toString();
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
}

let count = 0;

function game() {
  console.log('What number is missing in the progression?');
  const data = progressionggame();
  console.log(`Question: ${data[0]}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === data[1]) {
    console.log('Correct!');
    count += 1;
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
    } else {
      game();
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${data[1]}'.`);
    console.log(`Let's try again, ${name}!`);
  }
}

game();
