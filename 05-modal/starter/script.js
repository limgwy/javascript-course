'use strict';

// Modal Element
const modalEl = document.querySelector('.modal');

//Overlay Modal
const overlayEl = document.querySelector('.overlay');

//Close Modal
const btnCloseModalEl = document.querySelector('.close-modal');

//Open Modal
const btnOpenModalEl = document.querySelectorAll('.show-modal');

let lastFocusedButton = null;

//Open modal function
const openModal = function() {
    modalEl.classList.remove('hidden');

    overlayEl.classList.remove('hidden');

    modalEl.focus();
    lastFocusedButton = document.activeElement;
}

//Close Modal 
const closeModal = function() {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');

    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
};

btnOpenModalEl.forEach(btn => btn.addEventListener('click', openModal))
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

// close modal with key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalEl.classList.contains('hidden')){
        closeModal();
    }

});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');

btnCloseModalEl.setAttribute('aria-label', 'Close-modal');