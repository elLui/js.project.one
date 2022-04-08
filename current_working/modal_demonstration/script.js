'use strict';


// assign variables to class properties needed for modal/overlay 'hidden' properties
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//
const close_modal_button = document.querySelector(".close-modal");



// NodeList === A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
// HTMLCollection items can be accessed by their name, id, or index number. NodeList items can only be accessed
// by their index number. An HTMLCollection is always a live collection.

// ## NodeList are accessed via index - treated as arrays -

// using querySelectorAll - this will load all our buttons in a NodeList(3)
const open_modal_buttons = document.querySelectorAll(".show-modal");


// debug_tool
// console.log(open_modal_buttons);

// ?? NOTE ::
// ?? page is loaded in hidden state - this function must stay above 'close_modal_button.*' due to order of operations -

// using a loop to attach an event listener all of our buttons
for (let i = 0; i < open_modal_buttons.length; i++) {
    open_modal_buttons[i].addEventListener('click', function () {
        console.log('Button click!')

        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
    console.log(open_modal_buttons[i].textContent);
}

// this function will add the hidden property class back to the affected modal
close_modal_button.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

// this function will allow the user to click on the overlay (background) and have the same effect as clicking the 'X'
overlay.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

document.addEventListener('keydown', function (e) {

    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            close_modal_button();
        }

    }
})


// !! TODO :: refactor the close_modal into it's own function per DRY



