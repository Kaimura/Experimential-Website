/*jshint esversion: 6 */

/* Intersection Observer not working in opera, safari, firefox android, opera android, safari ios */
  
 // import {isInViewPort} from "../JS/Utils/Utils"; not supported without transpiler as babel etc

    isIntersecting(document.querySelector('#myDiv')); //load from global space instead (since import not working yet)
   // observer.observe(document.querySelector('#myDiv'));

    // isIntersecting(document.querySelector(".space"));
    // observer.observe(document.querySelector(".space"));
