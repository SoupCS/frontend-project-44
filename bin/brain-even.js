import readlineSync from 'readline-sync';


console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

let count = 0;

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

game();

function game() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let int = getRandomNumber(1,100);
    let correct = int % 2 == 0 ? 'yes' : 'no';
    console.log(`Question: ${int}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer == correct) {
        console.log('Correct!');
        ++count;
        if (count === 3) {
            console.log(`Congratulations, ${name}!`);
            ;
        } else {
            game();
        }
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
        console.log(`Let's try again, Sam!`);
    }
}
