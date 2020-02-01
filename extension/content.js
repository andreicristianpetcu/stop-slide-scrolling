"use strict";

console.log("Stop Slide Scrolling in Google Presentation loaded");

/**
 * 	Listen for scroll, prevent it
 */
window.addEventListener("DOMMouseScroll", function(e) {
    e.stopPropagation();
}, true);
