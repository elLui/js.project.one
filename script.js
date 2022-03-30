/***
 * title: guess_the_freaking_number
 *
 *
 * author: elluis.codes@gmail.com
 * date: 03.29.22.1746cst
 * ver: 0.12
 * elluis.codes@gmail.com ©2022
 *
 * synapse:
 *
 * simple program demonstrating the use of JavaScript DOM manipulation -
 *
 * after initial document layout using our ./index.html && ./style.css
 * the following list contains the (class_names|or|variables) used with
 * and brief description of (location|or|role) involved with the interactive
 * or visual mechanics
 *
 * ===================================
 * class_names =
 * ===================================
 *
 * ** variables
 * .number ===  '?'.initial_view.center_block
 * .score === 20.initial_view.starting_user_score
 * .guess === input_field.users_guess
 * .highscore === 0.initial_view.highscore_value
 * .message === 'Start guessing...'.initial_view.status_message
 *
 * ** buttons
 * .check === 'Check!'.button.logic_initializer
 * .again === 'Again!'.button.reset_form_keep_highscore
 *
 * ** css
 * .body === document_background_color_tag
 * .number === control_center_box_size *
 */


// do not remove!
'use strict';

//

//
// debugging item
// id === #, class === ., 
// console.log(document.querySelector('.message').textContent);
//

// initial content load
document.querySelector('.number').textContent = '?';
document.querySelector('.score').textContent = '20';
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

    // testing cl verification === 'Number' data types
    console.log(guess, typeof guess);

    // guess verification process
    if (!guess) {
        // if !guess === an error 
        document.querySelector('.message').textContent = '🚫 No Number 🚫';
    } else if (guess < 0 || guess > 20) {
        // direct user to the 1 through 20 rule
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
            document.querySelector('.message').textContent = 'Correct Number -- but, you are tied for the high score!!!!!!! 💃💃🎈🎊🥳👯‍♂️👯‍♀️';
            document.querySelector('.highscore').textContent = score;
        } else {
            // winning_greeting
            document.querySelector('.message').textContent = 'Correct Number! 💃💃🎈🎊🥳👯‍♂️👯‍♀️';
            document.querySelector('.highscore').textContent = score;
        }

    } else if (guess < secret_number || guess > secret_number) {
        if (guess < secret_number) {
            // low
            document.querySelector('.message').textContent = 'Way low my dude. 📉';
        } else {
            // high
            document.querySelector('.message').textContent = 'You are way to high my dude. 📈';
        }
        // set score
        score--;
        // update display score
        document.querySelector('.score').textContent = score;
    } else if (guess > secret_number) {
        // set score
        score--;
        // update display score
        document.querySelector('.score').textContent = score;
    }


    // changes 'Start Guessing...' == to ==>>

    /**
     * TODO:: tbd -
     */


})


// click-handler_again_button
document.querySelector('.again').addEventListener('click', function () {

    // resets parameters for another game - highscore remains
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    secret_number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'blueviolet';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = 0;
    document.querySelector('.number').textContent = '?';

    // for_debug
    console.log(secret_number);

})


// document.querySelector('.guess').textContent