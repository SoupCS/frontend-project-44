import readlineSync from 'readline-sync';


console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

let count = 0;

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }

game();

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
        console.log(`Let's try again, Sam!`);
    }
}
