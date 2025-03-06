import readlineSync from 'readline-sync';
import {getRandomNumber, welcome} from "../src/cli.js";


const name = welcome();

let count = 0;

function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }


function game() {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let int = getRandomNumber(1,100);
    let correct = isPrime(int) ? 'yes' : 'no';
    console.log(`Question: ${int}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer == correct) {
        console.log('Correct!');
        ++count;
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