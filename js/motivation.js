class Motivation {
    constructor() {
        this.video  = document.getElementById('video');
        this.canvas = document.getElementById('canvas');
    }

    init() {
        if (!this.video && !this.canvas) {
            return;
        }
           
        this.#bindEvents();
    }

    #bindEvents() {
    }
}

export default Motivation;