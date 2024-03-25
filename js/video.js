let navIsOpen = false;

class Video {
    constructor() {
        this.videos     = document.querySelectorAll(`.video`);
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.videos.forEach((video) => {
            video.addEventListener('mouseover', (e) => {
                e.target.play();
            });
            video.addEventListener('mouseleave', (e) => {
                e.target.pause();
            });
        });
    }
}

export default Video;