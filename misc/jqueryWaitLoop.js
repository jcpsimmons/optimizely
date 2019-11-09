var anotherInterval = setInterval(function() {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
  }
}, 50);
