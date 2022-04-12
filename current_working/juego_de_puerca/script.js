'use strict';


// variables
// ?? grabbing the element by querySelector
const score0 = document.querySelector('#score--0');
// ?? grabbing the element by ID - !! this one is a little faster if you
// ?? have many elements to capture
const score1 = document.getElementById('score--1');

const die = document.querySelector('.dice')

score0.textContent = 0;
score1.textContent = 0;

die.classList.add('hidden');








