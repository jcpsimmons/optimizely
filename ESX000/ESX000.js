function flipFlop(state) {
  console.log(state);
  if (state == 1) {
    console.log("if");
    $("#animation1")
      .removeClass("enter")
      .addClass("exit")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $(this)
            .removeClass("exit")
            .hide();
        }
      );
    $("#animation2")
      .removeClass("exit")
      .addClass("enter")
      .show()
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $(this).removeClass("enter");
        }
      );
  } else {
    console.log("else");
    $("#animation2")
      .removeClass("enter")
      .addClass("exit")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $(this)
            .removeClass("exit")
            .hide();
        }
      );
    $("#animation1")
      .removeClass("exit")
      .addClass("enter")
      .show()
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $(this).removeClass("enter");
        }
      );
  }
}

$(document).ready(function() {
  $("#animation2")
    .removeClass("enter")
    .addClass("exit")
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        $(this).removeClass("exit");
      }
    );
  var state = 1;
  setInterval(function() {
    if (state == 1) {
      state = 2;
    } else {
      state = 1;
    }
    flipFlop(state);
  }, 4000);
});
