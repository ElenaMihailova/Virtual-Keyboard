class Key {
    constructor(container, keyCode, label, secondLabel, isLowerCase, isActive, onClick) {
        this.container=container;
        this.keyCode=keyCode;
        this.label=label;
        this.secondLabel=secondLabel;
        this.isLowerCase=isLowerCase;
        this.isActive=isActive;
        this.onClick=onClick;
    }

    render() {
        const key=document.createElement('button');
        key.classList.add('key');
        if (this.isActive) {
            key.classList.add('active');
        }

        key.setAttribute('data-key-code', this.keyCode);
        key.innerHTML=`<span class="key__label">${this.isCase? this.label.toLowerCase():this.label}</span>`;

        if (this.secondLabel) {
            key.innerHTML+=`<span class="key__label key__label--upper">${this.secondLabel}</span>`;
        }

        key.addEventListener('click', this.onClick);

        this.container.appendChild(key);
    }
}

export default Key;