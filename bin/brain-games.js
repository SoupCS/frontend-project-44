import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
  }  

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

let count = 0;

game();
function game() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let int = getRandomNumber(1,30);
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
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    }
}





