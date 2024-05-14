class HeadlineAnimation {
    constructor() {
        this.elements            = document.querySelectorAll(`.about-me__headline, .random-projects__headline, .footer__headline, .project__headline, .motivation__text`);
        this.body                = document.body;
    }

    init() {
        if (this.elements.length === 0) {
            return;
        }
           
        this.#addAnimatedHeadlineClass();
        this.#handleHeadlinesInView();
    }

    #addAnimatedHeadlineClass() {
        this.elements.forEach((headline) => headline.classList.add('headline-will-animate'))
    }

    #handleHeadlinesInView() {    
        const callback = (entries) => {
            entries.forEach(({ target, isIntersecting } )=> {
                if (!isIntersecting) {
                    return target.classList.remove('in-view');
                }
                
                target.classList.add('in-view');
                if (target.classList.contains('motivation__text')) {
                    document.querySelector('.main').classList.add('motivation-in-view');
                }
            })
        };

        const observer = new IntersectionObserver(callback, {
            threshold: 1.0
        });
        
        this.elements.forEach((headline) => observer.observe(headline))
    }
}

export default HeadlineAnimation;