const ESX999 = ($) => {
  // all experiment code lives here
  // if it uses jquery, it will take the $ variable defined in the function call scope below
  document.addEventListener("click", (e) => {
    // event delegation
    if (e.target.closest("#target .selector .here")) {
      // checks parent-chain for matching selector
      //fire optimizely click track event
    }
  });
};

var anotherInterval = setInterval(() => {
  // scoped to optimizely experiment
  if (typeof window.jQuery !== "undefined") {
    // waits for global-scoped jQuery (the site's jQuery)
    clearInterval(anotherInterval);
    var $ = window.jQuery; // set to global scoped jquery
    $(document).ready(function() {
      // doc ready
      ESX999(); // trigger experiment
    });
  }
}, 50);
