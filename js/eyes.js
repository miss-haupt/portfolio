import yesAudio from '../assets/audio/yes.mp3';
import talkAudio from '../assets/audio/talk.mp3';
import maybeAudio from '../assets/audio/maybe.mp3';
import noAudio from '../assets/audio/no.mp3';
import noShitAudio from '../assets/audio/no-shit.mp3';

let audio = new Audio(yesAudio);

class Eyes {
    constructor() {
        this.face                = document.querySelector(`.face`);
        this.eyes                = document.querySelectorAll(`.face__eye`);
        this.zettels             = document.querySelectorAll(`.footer__zettel-list-item`);
        this.audioToggleBtn      = document.querySelector(`.footer__audio-toggle`);
        this.body                = document.body;
    }

    init() {
        if (this.eyes.length === 0 && this.zettels.length === 0) {
            return;
        }
            
        this.#bindEvents();
    }

    #bindEvents() {        
        this.zettels.forEach((zettel) => {            
            zettel.addEventListener('mouseenter', (e) => {
                e.target.classList.add(`${e.target.dataset.id}`);
                this.face.classList.add(`${e.target.dataset.id}`);

                if (e.target.dataset.id === 'talk') {
                    audio = new Audio(talkAudio);
                } else if (e.target.dataset.id === 'maybe') {
                    audio = new Audio(maybeAudio);
                } else if (e.target.dataset.id === 'no') {
                    audio = new Audio(noAudio);
                } else if (e.target.dataset.id === 'no-shit') {
                    audio = new Audio(noShitAudio);
                } else {
                    audio = new Audio(yesAudio);
                }

                if (this.audioToggleBtn.classList.contains('sound-is-off')) {
                    audio.pause();
                } else {
                    audio.currentTime = 0;
                    audio.loop = true;
                    audio.play();
                }
    
                this.eyes.forEach((eye) => {            
                    eye.classList.add(`${e.target.dataset.id}`);
                })
            });
            zettel.addEventListener('mouseleave', (e) => {
                e.target.classList.remove(`${e.target.dataset.id}`);
                this.face.classList.remove(`${e.target.dataset.id}`);

                audio.pause();
                this.eyes.forEach((eye) => {            
                    eye.classList.remove(`${e.target.dataset.id}`);
                })
            });
            zettel.addEventListener('click', (e) => {
                if (this.#isTouchDevice) {
                    e.preventDefault();
                }
            });
        })

        this.audioToggleBtn.addEventListener('click', (e) => {
            // play/pause audio
            e.target.classList.toggle('sound-is-off');
        });
    }

    #isTouchDevice() {
        return 'ontouchstart' in window || 
               navigator.maxTouchPoints > 0 || 
               navigator.msMaxTouchPoints > 0 || 
               window.matchMedia("(pointer: coarse)").matches;
    }
}

export default Eyes;