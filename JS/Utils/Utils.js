/*jshint esversion: 6 */

function isIntersecting(elementToSpot) {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
      };
      
      let callback = function(entries, observer) { 
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log(entry.isIntersecting);
                entry.target.classList.add("visited");
            }
            // Each entry describes an intersection change for one observed
            // target element:
            //   entry.boundingClientRect
            //   entry.intersectionRatio
            //   entry.intersectionRect
            //   entry.isIntersecting
            //   entry.rootBounds
            //   entry.target
            //   entry.time
        });
      };
      
      let observer = new IntersectionObserver(callback, options);//
      observer.observe(elementToSpot);
}