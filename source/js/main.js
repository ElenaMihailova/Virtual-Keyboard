function createHeader(container) {
    const headerElement=document.createElement('header');

    headerElement.classList.add('header');
    headerElement.innerHTML='<h1 class="header__title">RSS Virtual keyboard</h1>';

    container.appendChild(headerElement);
}

window.addEventListener('load', () => {
    const mainElement=document.createElement('main');
    mainElement.classList.add('container');
    createHeader(mainElement);
    document.body.appendChild(mainElement);
});