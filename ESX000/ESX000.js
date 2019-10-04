$(document).ready(function() {
  var whichAnimation = 1;
  window.setInterval(function() {
    if (whichAnimation == 1) {
      playAnimation = "#animation1";
      stopAnimation = "#animation2";
      whichAnimation = 2;
    } else {
      playAnimation = "#animation2";
      stopAnimation = "#animation1";
      whichAnimation = 1;
    }
    console.log(playAnimation);
    console.log(stopAnimation);
    $(playAnimation).css("-webkit-animation-play-state", "running");
    $(stopAnimation).css("-webkit-animation-play-state", "paused");
  }, 5000);
});
