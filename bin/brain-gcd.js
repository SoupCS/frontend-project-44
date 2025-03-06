import {getRandomNumber, welcome} from "../src/cli.js";
import readlineSync from "readline-sync";

const name = welcome();

let count = 0;

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) return false;
    x = Math.abs(x); y = Math.abs(y);
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

function game() {
    console.log('What is the result of the expression?');
    let first = getRandomNumber(1,100);
    let second = getRandomNumber(1,100);
    let correct = gcd_two_numbers(first, second);
    console.log(`Question: ${first} ${second}`);
    const answer = readlineSync.question('Your answer: ');
    if (!answer.isNaN && answer == correct) {
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