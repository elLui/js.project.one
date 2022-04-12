'use strict';


// variables
// ?? grabbing the element by querySelector
const score0 = document.querySelector('#score--0');
// ?? grabbing the element by ID - !! this one is a little faster if you
// ?? have many elements to capture
const score1 = document.getElementById('score--1');

// dice_element
const die = document.querySelector('.dice')

const load_initial_state = function () {
    score0.textContent = 0;
    score1.textContent = 0;
    die.classList.add('hidden');
}




load_initial_state();










