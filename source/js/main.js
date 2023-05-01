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

function createFooter(container) {
    const footerElement=document.createElement('footer');

    footerElement.classList.add('footer');
    footerElement.innerHTML='<p class="footer__text">Клавиатура создана в операционной системе Windows</p> <p class="footer__text">Для переключения языка комбинация: Ctrl + Shift (EN/RU)</p>';

    container.appendChild(footerElement);
}

window.addEventListener('load', () => {
    const mainElement=document.createElement('main');
    mainElement.classList.add('container');
    createHeader(mainElement);
    createKeyboard(mainElement);
    createFooter(mainElement);
    document.body.appendChild(mainElement);
});

