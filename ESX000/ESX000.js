// $(".secondary-nav .container").css("height", "6rem");
// $(".secondary-nav .container a").css("line-height", "4.5rem");

$(".secondary-nav .container .row .col-sm-6:first-of-type").empty();

insertHtml =
  "<div class='banner' style='overflow:hidden; position:relative'> <h2 id='animation1' class='banner-text'>Now delivering nationwide starting at $99. <a class='white-link' href='#'>Learn more ›</a> </h2> <h2 id='animation2' class='banner-text'><a class='white-link' href='#'><i ='fa fa-credit-card' aria-hidden='true'></i>Special Financing Available Today!</a> </h2> </div>";

$(".secondary-nav .container .row").prepend(insertHtml);

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
  var state = 1;
  $("#animation1").hide();
  setInterval(function() {
    if (state == 1) {
      state = 2;
    } else {
      state = 1;
    }
    flipFlop(state);
  }, 4000);
});
