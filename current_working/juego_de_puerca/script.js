'use strict';


// variables
// ?? grabbing the element by querySelector
const score0 = document.querySelector('#score--0');
// ?? grabbing the element by ID - !! this one is a little faster if you
// ?? have many elements to capture
const score1 = document.getElementById('score--1');

// dice_element
const die = document.querySelector('.dice')

//buttons
const new_game_button = document.querySelector('.btn--new');
const roll_dice_button = document.querySelector('.btn--roll');
const hold_button = document.querySelector('.btn-roll');



const load_initial_state = function () {
    score0.textContent = 0;
    score1.textContent = 0;
    die.classList.add('hidden');
}

load_initial_state();

/**
 * generate value for dice roll
 * @returns {number} - number between 1 through 6
 */
const random_dice_generator = function () {
    return Math.trunc(Math.random() * 6) + 1;
}



console.log(random_dice_generator());










