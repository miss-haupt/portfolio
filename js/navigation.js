let navIsOpen = false;

class Navigation {
    constructor() {
        this.navWrapper     = document.querySelector(`.js-nav`);
        this.toggleBtn      = this.navWrapper.querySelector(`.js-nav-toggle`);
        this.NAV_OPEN_CLASS = `nav--is-open`;
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        if(this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => {
                this.openCloseNav();
            });
        }

        window.addEventListener('click', (e) => {
            if(navIsOpen) {
                this.closeNav(e);
            }
        });
    }

    openCloseNav() {
        this.navWrapper.classList.toggle(this.NAV_OPEN_CLASS);
        navIsOpen = navIsOpen !== true;
    }

    closeNav(e) {
        if(e.target.classList.contains(`js-nav`)) {
            this.navWrapper.classList.remove(this.NAV_OPEN_CLASS);
            navIsOpen = false;
        }
    }
}

export default Navigation;