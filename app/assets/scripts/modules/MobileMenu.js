import $ from 'jquery'

class MObileMenu {
    constructor() {
        this.navBar = $(".nav-bar") 
        this.menuIcon = $(".nav-bar__menu-icon");
        this.menuContent = $(".nav-bar__ul");
        this.navBarLink = $(".nav-bar__link");
        this.events();
        this.removeNavUlVisible();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        this.navBarLink.click(this.closeTheNav.bind(this));
    }

    toggleTheMenu() {

        if(window.matchMedia("(max-width: 900px)").matches) {

            if ( "nav-bar__ul--is-expanded") {
                this.menuContent.removeClass("nav-bar__ul--is-expanded");
                this.menuContent.toggleClass("nav-bar__ul--is-visible");
            } 
        } 
    
    }

    closeTheNav() {
    //     this.menuContent.toggleClass("nav-bar__ul--is-expanded").toggleClasss("nav-bar__ul--is-close");
    if(window.matchMedia("(max-width: 900px)").matches) {
            this.menuContent.addClass("nav-bar__ul--is-expanded");
        }
    }

    removeNavUlVisible() {
        var _this = this;
            $(window).on('resize', function () {
                var win = $(this);
                if(win.width() >= 900) {
                    _this.menuContent.removeClass("nav-bar__ul--is-visible");
                }
            });
        }
}


export default MObileMenu