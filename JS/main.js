/*jshint esversion: 6 */

/* Intersection Observer not working in opera, safari, firefox android, opera android, safari ios */
/*jshint esversion: 6 */

if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
      var isIntersecting = function(elementToSpot) {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8 //trigger only when at least 80% of element is visible
          };
          
          let callback = function(entries, observer) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    // entry.target.classList.add("visited");
                    document.querySelector('a.active') ? document.querySelector('a.active').classList.remove('active') : null
                    document.getElementsByName(entry.target.id)[0].classList.add('active');
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
          
          let observer = new IntersectionObserver(callback, options);
          elementToSpot.forEach(element => {
            observer.observe(element);
          })
          // observer.observe(elementToSpot);
    };
}
else {
  console.log("Intersection Observer is not supported");
  // polyfill
}

isIntersecting(document.getElementsByName("section"));