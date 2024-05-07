class Scroll {
    constructor() {
        this.header     = document.querySelector(`.header`);
        this.backToTop  = document.querySelector(`.back-to-top`);
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

        this.backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

export default Scroll;