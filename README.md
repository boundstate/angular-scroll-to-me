# Angular scroll-to-me

A directive for smoothly scrolling an element into view.

## Installation

Include `smooth-scroll.js` and `angular-scroll-to-me.js` in your HTML:

    <script type="text/javascript" src="bower_components/smooth-scroll/dist/js/smooth-scroll.js"></script>
    <script type="text/javascript" src="bower_components/angular-scroll-to-me/angular-scroll-to-me.js"></script>
    
Then load the module in your application by adding it as a dependent module:

    angular.module('app', ['boundstate.scrollToMe']);
    
## Usage

The element must have an id specified to for the directive to work!

    <div id="my-div" scroll-to-me="myVar" offset="0"></div>