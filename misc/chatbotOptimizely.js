// EXECUTION TRACKING

const mouseMove = callback => {
  let time = 0; //ms

  let addToClock = setInterval(() => {
    time += 1000;
    if (time > 5000) {
      callback();
      clearInterval(addToClock);
    }
  }, 1000);

  //   reset the clock
  var resetTimer = function() {
    time = 0;
  };

  //   reset the clock on any of these events
  document.addEventListener("mousemove", resetTimer, false);
  document.addEventListener("mousedown", resetTimer, false);
  document.addEventListener("keypress", resetTimer, false);
  document.addEventListener("touchmove", resetTimer, false);
  document.addEventListener("wheel", resetTimer, false);
};

mouseMove(() => {
  alert(`time's up!`);
});

//
