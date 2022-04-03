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

/**
 * The "use strict" Directive
 * The "use strict" directive was new in ECMAScript version 5 *
 * It is not a statement, but a literal expression, ignored by earlier versions of JavaScript
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode"
 * With strict mode, you can not, for example, use undeclared variables
 *
 * ** https://www.w3schools.com/js/js_strict.asp
 */

// do not remove!
'use strict';

////////////////////////////////////////////////////////////////////////////////////////////
/**
 * following classes control various aspects of the gui -
 * format :: class_name.function_name.brief_description
 * @param message.status_message_display.starting_value."Start guessing..."
 * @param number.center_block_content.starting_value."?"
 * @param score.current_score_field.starting_value."20"
 * @param high_score.current_highscore.starting_value."0"
 */
// class.message
const status_message_display = function (message_in) {
    document.querySelector('.message').textContent = message_in;
}
// class.number
const center_block_content = function (number_in) {
    document.querySelector('.number').textContent = number_in;
}
// class.score
const current_score_field = function (score_in) {
    document.querySelector('.score').textContent = score_in;
}
// class.highscore
const current_highscore = function (highscore_in) {
    document.querySelector('.highscore').textContent = highscore_in;
}
// random_number_generator


////////////////////////////////////////////////////////////////////////////////////////////
/**
 * generates a pseudo random number between 1 and 20
 * @returns {number} === returned 'random' number
 */
const secret_number_generator = function () {
    // generate a 'random' number between 1 through 20
    return Math.trunc(Math.random() * 20) + 1;
}

////////////////////////////////////////////////////////////////////////////////////////////
// loads all starting_&&_reset values to an initial value
const load_initial_content = function () {

    // score reset
    score = 20;

    // scoreboard_css_properties
    center_block_content('?');
    status_message_display('Start guessing...');
    current_score_field(20);

    // center-block_css_properties
    document.querySelector('body').style.backgroundColor = 'blueviolet';
    document.querySelector('.number').style.width = '15rem';

    // logic_properties
    secret_number = secret_number_generator();
    document.querySelector('.guess').value = 0;
}


////////////////////////////////////////////////////////////////////////////////////////////
// the following variables can not be const
let score = 20;
let high_score = 0;
let secret_number = secret_number_generator();

////////////////////////////////////////////////////////////////////////////////////////////
// initial form fill
load_initial_content();

// debugging information
// console.log(document.querySelector('.guess').value);
// console.log(secret_number);

////////////////////////////////////////////////////////////////////////////////////////////
// click-handler_check!_button
document.querySelector('.check').addEventListener('click', function () {

    // click-handler_guess_value
    let guess = Number(document.querySelector('.guess').value);

    // debug tool
    // console.log(guess, typeof guess);

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
        if (score > high_score) {
            // winning_highscore_greeting
            status_message_display('Correct Number && You got the high_score!!!! 💃💃🎈🎊🥳👯‍♂️👯‍♀️');
            // set high_score
            high_score = score;
            current_highscore(high_score);
        } else if (score === high_score) {
            // winning_tied_highscore_greeting
            status_message_display('Correct Number -- but, you are tied for the high score!!!!!!! 💃💃🎈🎊🥳👯‍♂️👯‍♀️');
            current_highscore(score);
        } else {
            // winning_greeting
            status_message_display('Correct Number! 💃💃🎈🎊🥳👯‍♂️👯‍♀️');
            current_highscore(score);
        }

    } else if (guess < secret_number || guess > secret_number) {
        // set score
        score--;

        document.querySelector('.message').textContent = (guess < secret_number) ?
            document.querySelector('.message').textContent = 'Way low my dude. 📉' :
            document.querySelector('.message').textContent = 'You are way to high my dude. 📈';

        // update display score
        current_score_field(score);
        current_highscore(high_score);
    }
})
////////////////////////////////////////////////////////////////////////////////////////////
// click-handler_again_button
document.querySelector('.again').addEventListener('click', function () {
    load_initial_content();
    // for_debug
    // console.log(secret_number);
})












