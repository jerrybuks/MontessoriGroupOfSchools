import $ from 'jquery'

class MObileMenu {
    constructor() {
        this.navBar = $(".nav-bar") 
        this.menuIcon = $(".nav-bar__menu-icon");
        this.menuContent = $(".nav-bar__ul");
        this.navBarLink = $(".nav-bar__link");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        this.navBarLink.click(this.closeTheNav.bind(this));
    }

    toggleTheMenu() {

        if(window.matchMedia("(max-width: 900px)").matches) {

            this.menuContent.toggleClass("nav-bar__ul--is-visible");


            if ( "nav-bar__ul--is-expanded") {
                this.menuContent.removeClass("nav-bar__ul--is-expanded");
                this.menuContent.addClass("nav-bar__ul--is-visible");
            }
        } 
    
    }

    closeTheNav() {
    //     this.menuContent.toggleClass("nav-bar__ul--is-expanded").toggleClasss("nav-bar__ul--is-close");
    if(window.matchMedia("(max-width: 900px)").matches) {
            this.menuContent.addClass("nav-bar__ul--is-expanded");
        }
    }
}

export default MObileMenu