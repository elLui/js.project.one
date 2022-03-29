'use strict';

//
// debugging item
// id === #, class === ., 
// console.log(document.querySelector('.message').textContent);
//

// initial content load
document.querySelector('.number').textContent = '?';
document.querySelector('.score').textContent = 20;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 0;


// assign variables - 
let high_score = document.querySelector('.highscore').textContent;
let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// for debugging purposes
console.log(secret_number);




// click-handler_check!_button
document.querySelector('.check').addEventListener('click', function () {

    // click-handler_guess_value
    let guess = Number(document.querySelector('.guess').value);

    // testing cl verification === 'Number' data typess
    console.log(guess, typeof guess);

    // guess verification process
    if (!guess) {
        // if !guess === an error 
        document.querySelector('.message').textContent = '🚫 No Number 🚫';
    } else if (guess < 0 || guess > 20) {
        // direct user to the 1 thru 20 rule
        document.querySelector('.message').textContent = 'Can you not read? Top Right -> Your Other Right! 1 thru 20. 🤦‍♂️🤷‍♀️🤦‍♀️🐱‍🐉';
    } else if (guess === secret_number) {
        // change background_color upon winning && increase the width of winning number
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = guess;

        // if === highscore an additional message indicating highscore
        if (guess >= high_score) {

            // winning_highscore_greeting
            document.querySelector('.message').textContent = 'Correct Number && You got the high_score!!!! 💃💃🎈🎊🥳👯‍♂️👯‍♀️';
            // set high_score
            high_score = score;
            document.querySelector('.highscore').textContent = high_score;

            // set high_score
            high_score = score;

        } else if (guess === high_score) {
            // winning_tied_highscore_greeting
            document.querySelector('.message').textContent = 'Correct Number -- buuuuuuuttt, you are tied for the high score!!!!!!! 💃💃🎈🎊🥳👯‍♂️👯‍♀️';
            document.querySelector('.highscore').textContent = score;
        } else {
            // winning_greeting
            document.querySelector('.message').textContent = 'Correct Number! 💃💃🎈🎊🥳👯‍♂️👯‍♀️';
            document.querySelector('.highscore').textContent = score;
        }

        // to_low
    } else if (guess < secret_number) {

        // to low indication 
        document.querySelector('.message').textContent = 'Way low my dude. 📉';
        // set score
        score--;
        // display score
        document.querySelector('.score').textContent = score;

        // to_high
    } else if (guess > secret_number) {

        // to high indication
        document.querySelector('.message').textContent = 'You are way to high my dude. 📈';
        // set score
        score--;
        // display score
        document.querySelector('.score').textContent = score;
    }


    // changes 'Start Guessing...' == to ==>>

})

// click-handler_again_button
document.querySelector('.again').addEventListener('click', function () {

    // resets parameters for another game - highscore remains
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    let secret_number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'blueviolet';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = 0;
    document.querySelector('.number').textContent = '?';

    // for_debug
    console.log(secret_number);

})





// document.querySelector('.guess').textContent