const modal = document.querySelector('.modal-container');
const buttonTry = document.querySelector('main section button.try');
const buttonClose = document.querySelector('.modal-container .close');
const body = document.body;

buttonTry.addEventListener('click', (e => {
    modal.classList.remove("close");
    body.style.overflow = 'hidden';
}));

buttonClose.addEventListener('click', (e => {
    modal.classList.add("close");
    body.style.overflow = 'auto';
}))