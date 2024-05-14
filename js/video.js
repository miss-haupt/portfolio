class Video {
    constructor() {
        this.videos         = document.querySelectorAll(`.video`);
        this.videosAutoplay = document.querySelectorAll('.video-autoplay');
    }

    init() {
        if(this.videosAutoplay.length === 0 || this.videos.length === 0) {
            return;
        }

        this.#bindEvents();
        this.#lazyLoadVideo();
        this.#handleAutoplayInView();
    }

    #bindEvents() {
        this.videos.forEach((video) => {            
            this.#muteVideo(video);
            video.addEventListener('mouseover', (e) => {
                e.target.play();
            });
            video.addEventListener('mouseleave', (e) => {
                e.target.pause();
            });
            const audioToggleBtn = video.querySelector('.video__toggle-audio');
            if (audioToggleBtn) {
                audioToggleBtn.addEventListener('click', (e) => {
                    if (e.target.muted) {
                        this.#unmuteVideo(e.target);
                    } else {
                        this.#muteVideo(e.target);
                    }
                });
            }
        });
    }

    #lazyLoadVideo() {
        const callback = (entries) => {
            entries.forEach(({ target, isIntersecting } )=> {
                if (isIntersecting) {
                    target.load();
                }
                observer.unobserve(target);
            })
        };

        const observer = new IntersectionObserver(callback, {
            threshold: 1.0
        });
        
        this.videos.forEach((video) => observer.observe(video))
    }

    #handleAutoplayInView() {
        const callback = (entries) => {
            entries.forEach(({ target, isIntersecting } )=> {
                if (!isIntersecting) {
                    return target.pause();;
                }

                target.play();
            })
        };

        const observer = new IntersectionObserver(callback, {
            threshold: 1.0
        });
        
        this.videosAutoplay.forEach((video) => observer.observe(video))
    }

    #muteVideo(video) {
        video.muted = true;
    }

    #unmuteVideo(video) {
        video.muted = false;
    }
}

export default Video;