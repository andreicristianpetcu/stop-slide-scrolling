"use strict";

/**
 * 	Listen for scroll, prevent it
 */
window.addEventListener("DOMMouseScroll", function(e) {
    e.stopPropagation();
}, true);
