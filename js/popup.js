class Popup {
    constructor() {
        this.popup               = document.querySelectorAll(`.popup`);
        this.body                = document.body;
    }

    init() {
        if (this.popup.length === 0) {
            return;
        }
            
        this.bindEvents();
    }

    bindEvents() {        
        this.popup.forEach((popup) => {
            const openBtn = popup.querySelector('.popup__button');            
            const closeBtn = popup.querySelector('.popup__close');
            
            openBtn.addEventListener('click', (e) => {
                e.target.closest('.popup').classList.add('popup--open');
            });
            closeBtn.addEventListener('click', (e) => {
                e.target.closest('.popup').classList.remove('popup--open');
            });
        })

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.popup.forEach((popup) => {
                    popup.classList.remove('popup--open');
                })
            }
        });
    }
}

export default Popup;