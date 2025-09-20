'use strict';

// Modal Element
const modalEl = document.querySelector('.modal');

//Overlay Modal
const overlayEl = document.querySelector('.overlay');

//Close Modal
const btnCloseModalEl = document.querySelector('.close-modal');

//Open Modal
const btnOpenModalEl = document.querySelectorAll('.show-modal');


//Open modal function
const openModal = function() {
    modalEl.classList.remove('hidden');

    overlayEl.classList.remove('hidden');
}

btnOpenModalEl.forEach(btn => btn.addEventListener('click', openModal))

//Close Modal 

const closeModal = function() {
    modalEl.classList.add('hidden');

    overlayEl.classList.add('hidden');
}

btnOpenModalEl.forEach(btn => btn.addEventListener('click', openModal))
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);