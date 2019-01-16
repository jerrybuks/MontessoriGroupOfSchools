import MobileMenu from './modules/MobileMenu';
import RevealWhileScrolling from './modules/RevealWhileScrolling';
import $ from 'jquery';
import StickyHeader from './modules/_StickyHeader';

var mobileMenu = new MobileMenu();

new RevealWhileScrolling($('.feature-pairs'), "85%");
new RevealWhileScrolling($('.section-testimonials'), "60%");

var stickyHeader = new StickyHeader();