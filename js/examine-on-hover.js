class ExamineOnHover {
    constructor() {
        this.aboutMeImageWrapper= document.querySelector(`.about-me__col--image`);
        this.aboutMeImage       = document.querySelector(`.about-me__img--2`);
        this.aboutMeImageText   = document.querySelector(`.about-me__col--text`);
        this.body               = document.body;
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.aboutMeImage.onmousemove = (e) => {
            const x = e.pageX - e.target.offsetLeft
            const y = e.pageY - e.target.offsetTop
            
            e.target.style.setProperty('--mouse-x', `${ x }`)
            e.target.style.setProperty('--mouse-y', `${ y }`)

            const imageWidth = e.target.offsetWidth;
            const imageHeight = e.target.offsetHeight;
            e.target.style.setProperty('--mouseX', e.offsetX/imageWidth*100);
            e.target.style.setProperty('--mouseY', e.offsetY/imageHeight*100);
            this.aboutMeImageText.style.setProperty('--mouseX', e.offsetX/imageWidth*100);
            this.aboutMeImageText.style.setProperty('--mouseY', e.offsetY/imageHeight*100);
        }
        this.aboutMeImage.onmouseenter = (e) => {
            e.target.style.setProperty('--mask-size', '300px');
            this.aboutMeImageText.style.setProperty('--mask-size', '300px');
        }
        this.aboutMeImage.onmouseleave = (e) => {
            e.target.style.setProperty('--mask-size', '0');
            this.aboutMeImageText.style.setProperty('--mask-size', '0');
        }
    }
}

export default ExamineOnHover;