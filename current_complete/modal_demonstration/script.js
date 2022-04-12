'use strict';


// assign variables to class properties needed for modal/overlay 'hidden' properties
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//
const close_modal_button = document.querySelector(".close-modal");

// helper function used to add the 'hidden' property to our modal and overlay
const close_modal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// helper function use to REMOVE 'hidden' property from overlay and modal
const open_modal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

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

        open_modal();
    })
    console.log(open_modal_buttons[i].textContent);
}

// this function will add the hidden property class back to the affected modal
close_modal_button.addEventListener('click', function() {
    close_modal();
})

// this function will allow the user to click on the overlay (background) and have the same effect as clicking the 'X'
overlay.addEventListener('click', function() {
    close_modal();
})

// adds the 'Escape' key to a close modal action
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            close_modal();
        }
    }
})

