import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealWhileScrolling {
    constructor (element, offset){
        this.itemsToReveal = element;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWayPoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWayPoints() {
        var _this = this;
        this.itemsToReveal.each(function() {
            var currentItem =this;
            new Waypoint ({
               element: currentItem,
               handler: function() {
                   $(currentItem).addClass("reveal-item--is-visible")
               },
               offset: _this.offsetPercentage
            });
        });
    }
}

export default RevealWhileScrolling;
