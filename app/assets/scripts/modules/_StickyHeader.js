import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class stickyHeader {
    constructor(){
        this.lazyImages = $(".lazyload")
        this.navBar = $(".nav-bar");
        this.btnSmoothScroll = $(".btn-smoothScroll")
        this.TriggerFixedHeader = $('.about');
        this.createHeaderWaypoint();
        this.pageSections = $(".page-section");
        this.navLinks = $(".nav-bar__link");
        this.createPageSectionsWaypoints();
        this.smoothScrollinng();
        this.refreshWaypoints();
    }

    refreshWaypoints() {
        this.lazyImages.on('load', function() {
            Waypoint.refreshAll();
        });
    }

    createHeaderWaypoint (){
        var _this = this;
        new Waypoint({
            element: this.TriggerFixedHeader[0],
            handler: function (direction) {
                if(direction == "down"){
                    _this.navBar.addClass("nav-bar--sticky");
                } else {
                    _this.navBar.removeClass("nav-bar--sticky");
                }
            },
            offset: "20%"
        });
    }

    smoothScrollinng(){
        this.navLinks.smoothScroll();
        this.btnSmoothScroll.smoothScroll();
    }

    createPageSectionsWaypoints() {
        var _this = this;
        this.pageSections.each(function() {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if(direction == "down"){
                        var matchingLink = currentPageSection.getAttribute("data-match-link");
                    _this.navLinks.removeClass("nav-bar__link-is-current-link");
                    $(matchingLink).addClass("nav-bar__link-is-current-link");
                    }     
                },
                offset: "30%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if(direction == "up"){
                        var matchingLink = currentPageSection.getAttribute("data-match-link");
                    _this.navLinks.removeClass("nav-bar__link-is-current-link");
                    $(matchingLink).addClass("nav-bar__link-is-current-link");
                    }     
                },
                offset: "-40%"
            });

        });
    }
}

export default stickyHeader;