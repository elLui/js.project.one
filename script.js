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
 * .guess === input_field.users_guess

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


// class.message === 'Start guessing...'.initial_view.status_message_display
const status_message_display = function (message) {
    document.querySelector('.message').textContent = message;
}

// class.number ===  '?'
const center_block_content = function (number) {
    document.querySelector('.number').textContent = number;
}

// random number generator
const secret_number_generator = function () {
    // generate a random number between 1 through 20
    return Math.trunc(Math.random() * 20) + 1;
}

// class.initial_view.center_block.score === 20
const current_score_field = function (user_score) {
    document.querySelector('.score').textContent = user_score;
}


// .initial_view.starting_highscore.highscore === 0
// .initial_view.highscore_value


// fresh_content_load
center_block_content('?');


// initial content load
current_score_field('20');
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 0;


// assign variables - 
let high_score = document.querySelector('.highscore').textContent;
let secret_number = secret_number_generator();
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
        status_message_display('🚫 No Number 🚫');
    } else if (guess < 0 || guess > 20) {
        // direct user to the 1 through 20 rule
        status_message_display('Can you not read? Top Right -> Your Other Right! 1 thru 20. 🤦‍♂️🤷‍♀️🤦‍♀️🐱‍🐉');
    } else if (guess === secret_number) {
        // change background_color upon winning && increase the width of winning number
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        center_block_content(guess);

        // if === highscore an additional message indicating highscore
        if (score >= high_score) {
            // winning_highscore_greeting
            status_message_display('Correct Number && You got the high_score!!!! 💃💃🎈🎊🥳👯‍♂️👯‍♀️');
            // set high_score
            high_score = score;
            status_message_display(high_score);
            // set high_score
            high_score = score;
        } else if (guess === high_score) {
            // winning_tied_highscore_greeting
            status_message_display('Correct Number -- but, you are tied for the high score!!!!!!! 💃💃🎈🎊🥳👯‍♂️👯‍♀️');
            document.querySelector('.highscore').textContent = score;
        } else {
            // winning_greeting
            status_message_display('Correct Number! 💃💃🎈🎊🥳👯‍♂️👯‍♀️');
            document.querySelector('.highscore').textContent = score;
        }

    } else if (guess < secret_number || guess > secret_number) {

        document.querySelector('.message').textContent = (guess < secret_number) ?
            document.querySelector('.message').textContent = 'Way low my dude. 📉' :
            document.querySelector('.message').textContent = 'You are way to high my dude. 📈';

        // set score
        score--;

        // update display score
        current_score_field(score);
    }
})


// click-handler_again_button
document.querySelector('.again').addEventListener('click', function () {

    // resets parameters for another game - highscore remains
    score = 20;
    status_message_display('Start guessing...');
    secret_number = secret_number_generator();
    document.querySelector('.score').textContent = '20';
    document.querySelector('body').style.backgroundColor = 'blueviolet';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = 0;

    //moved to fresh_content_load
    // document.querySelector('.number').textContent = '?';


    // for_debug
    console.log(secret_number);

})












