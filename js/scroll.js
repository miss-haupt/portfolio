class Scroll {
    constructor() {
        this.header             = document.querySelector(`.header`);
        this.heroHeadline       = document.querySelector(`.hero__headline`);
        this.heroHello          = document.querySelector(`.hero__headline-hello`);
        this.backToTop          = document.querySelector(`.back-to-top`);
        this.main               = document.querySelector('.main');
        this.motivationIntro    = document.querySelector('.motivation__text');
        this.mouthVideo         = document.querySelectorAll('.hero__video');
        this.body               = document.body;
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
            if(window.scrollY > 150) {
                this.heroHeadline.classList.add('hide');
            } else {
                this.heroHeadline.classList.remove('hide');
            }
            if(window.scrollY > 300 && (window.scrollY < (this.motivationIntro.getBoundingClientRect().top + (window.innerHeight / 2)))) {
                this.mouthVideo.forEach((video) => {
                    video.classList.add('show');


                    let frameNumber = 0; // start video at frame 0
                    // lower numbers = faster playback
                    let playbackConst = 85;
                    // Use requestAnimationFrame for smooth playback
                    function scrollPlay(){  
                        frameNumber  = window.scrollY/playbackConst;
                        video.currentTime  = frameNumber;
                        window.requestAnimationFrame(scrollPlay);
                    }

                    window.requestAnimationFrame(scrollPlay);
                });
            } else {
                this.mouthVideo.forEach((video) => {
                    video.classList.remove('show');
                });
            }
            if(window.scrollY > this.motivationIntro.getBoundingClientRect().top || window.scrollY > window.innerHeight || window.scrollY > 600) {
                this.main.classList.add('motivation-in-view');
            } else {
                this.main.classList.remove('motivation-in-view');
            }    
            if((window.scrollY > 750) && (window.scrollY < (this.motivationIntro.getBoundingClientRect().top + (window.innerHeight / 2)))) {
                this.heroHello.classList.remove('hide');
            } else {
                this.heroHello.classList.add('hide');
            }
        });

        this.backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    #handleMouthVideo(coolVideo) {
        gsap.registerPlugin(ScrollTrigger);

        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".hero__video",
              start: "top top",
              end: "bottom+=200% bottom",
              scrub: true,
              markers: true
            }
        });

        tl.to(coolVideo, { currentTime: coolVideo.duration });
    }
}

export default Scroll;