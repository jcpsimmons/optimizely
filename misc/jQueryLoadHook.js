function jQueryGlobalHook() {
  var evnt = new Event("jQueryLoaded");

  var anotherInterval = setInterval(() => {
    if (typeof window.jQuery !== "undefined") {
      clearInterval(anotherInterval);
      document.dispatchEvent(evnt);
    }
  }, 50);
}

jQueryGlobalHook();

// USAGE:
// if (window.jQuery) {
//     ESX081();
//   } else {
//     document.addEventListener("jQueryLoaded", function() {
//       ESX081();
//     });
//   }
