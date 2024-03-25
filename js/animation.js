class Animation {
    constructor() {
        this.aboutMeImageWrapper= document.querySelector(`.about-me__col--image`);
        this.aboutMeImage       = document.querySelector(`.about-me__img--2`);
        this.body               = document.body;
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.aboutMeImage.onmousemove = (e) => {
            const x = e.pageX - e.target.offsetLeft
            const y = e.pageY - e.target.offsetTop
            
            // Polyfils used from ES6. Note the use of backticks ` `
            // Babel will convert this for us
            e.target.style.setProperty('--mouse-x', `${ x }`)
            e.target.style.setProperty('--mouse-y', `${ y }`)

            const imageWidth = e.target.offsetWidth;
            const imageHeight = e.target.offsetHeight;
            e.target.style.setProperty('--mouseX', e.offsetX/imageWidth*100);
            e.target.style.setProperty('--mouseY', e.offsetY/imageHeight*100);
            
            // If polyfils not supported,
            // Use regular Javascript syntax
            //e.target.style.setProperty('--x', x + 'px')
            //e.target.style.setProperty('--y', y + 'px')
        }
        this.aboutMeImage.onmouseenter = (e) => {
            e.target.style.setProperty('--mask-size', '300px')
        }
        this.aboutMeImage.onmouseleave = (e) => {
            e.target.style.setProperty('--mask-size', '0')
        }
    }
}

export default Animation;