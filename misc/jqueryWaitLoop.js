var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== 'undefined') {
    clearInterval(anotherInterval);
  }
}, 50);
