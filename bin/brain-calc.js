import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

let count = 0;

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

game();

function game() {
    console.log('What is the result of the expression?');
    let first = getRandomNumber(1,100);
    let second = getRandomNumber(1,100);
    let correct = first + second;
    console.log(`Question: ${first} + ${second}`);
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
        console.log(`Let's try again, Sam!`);
    }
}
