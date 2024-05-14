class Hero {
    constructor() {
        this.hero            = document.querySelector(`.hero`);
        this.elements        = document.querySelectorAll(`.hero__headline`);
        this.body            = document.body;
    }

    init() {
        if (!this.hero) {
            return;
        }
           
        this.#handleHeadlinesInView();
    }

    #handleHeadlinesInView() {    
        const callback = (entries) => {
            entries.forEach(({ target, isIntersecting } )=> {
                if (!isIntersecting) {
                    target.classList.add('out-of-view');
                    this.hero.classList.add('out-of-view');
                    this.hero.classList.remove('in-view');
                    document.querySelector('.main').classList.add('hide-canvas');
                } else {                    
                    target.classList.remove('out-of-view');
                    this.hero.classList.remove('out-of-view');
                    this.hero.classList.add('in-view');
                    document.querySelector('.main').classList.remove('hide-canvas');
                }
            })
        };

        const observer = new IntersectionObserver(callback, {
            threshold: 0
        });
        
        this.elements.forEach((el) => observer.observe(el))
    }
}

export default Hero;