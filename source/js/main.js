import {Keyboard} from "./scripts/keyboard.js";

function createHeader(container) {
    const headerElement=document.createElement('header');

    headerElement.classList.add('header');
    headerElement.innerHTML='<h1 class="header__title">RSS Virtual keyboard</h1>';

    container.appendChild(headerElement);
}

function createKeyboard(container) {
    const keyboardElement=document.createElement('div');

    container.appendChild(keyboardElement);

    const keyboard=new Keyboard(keyboardElement);

    keyboard.render();
}

window.addEventListener('load', () => {
    const mainElement=document.createElement('main');
    mainElement.classList.add('container');
    createHeader(mainElement);
    createKeyboard(mainElement);
    document.body.appendChild(mainElement);
});

