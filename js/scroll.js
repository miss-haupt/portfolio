class Scroll {
    constructor() {
        this.header     = document.querySelector(`.header`);
        this.body       = document.body;
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', (e) => {
            if(window.scrollY > 100) {                
                this.body.classList.add('page-is-scrolled');
            } else {

                this.body.classList.remove('page-is-scrolled');
            }
        });
    }
}

export default Scroll;