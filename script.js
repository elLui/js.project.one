'use strict';



// id === #, class === ., 
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = '?';
document.querySelector('.score').textContent = 0;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 0;


let secret_number = Math.trunc(Math.random() * 20) + 1;
console.log(secret_number);

let score = 20;



// click-handler for 'check ...' button
document.querySelector('.check').addEventListener('click', function () {

    // click-handler_values 
    let guess = Number(document.querySelector('.guess').value);

    let high_score = document.querySelector('.highscore').textContent;



    // testing cl verification === 'Number' data typess
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No Number 🚫';
    } else if (guess < 0 || guess > 20) {
        document.querySelector('.message').textContent = 'Can you not read? Top Right -> Your Other Right! 1 thru 20. 🤦‍♂️🤷‍♀️🤦‍♀️🐱‍🐉';
    } else if (guess === secret_number) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (guess >= high_score) {
            document.querySelector('.message').textContent = 'Correct Number && You got the high_score!!!! 💃💃🎈🎊🥳👯‍♂️👯‍♀️';
            document.querySelector('.highscore').textContent = guess;
            high_score = guess;
        } else {
            document.querySelector('.message').textContent = 'Correct Number! 💃💃🎈🎊🥳👯‍♂️👯‍♀️';
        }

    } else if (guess < secret_number) {
        document.querySelector('.message').textContent = 'Way low my dude. 📉';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess > secret_number) {
        document.querySelector('.message').textContent = 'You are way to high my dude. 📈';
        score--;
        document.querySelector('.score').textContent = score;
    }


    // changes 'Start Guessing...' == to ==>>

})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    let secret_number = Math.trunc(Math.random() * 20) + 1;
    console.log(secret_number);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'blueviolet';




})




// document.querySelector('.guess').textContent