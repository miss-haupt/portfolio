class HeadlineAnimation {
    constructor() {
        this.elements            = document.querySelectorAll(`.about-me__headline, .footer__headline`);
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
            })
        };

        const observer = new IntersectionObserver(callback, {
            threshold: 1.0
        });
        
        this.elements.forEach((headline) => observer.observe(headline))
    }
}

export default HeadlineAnimation;