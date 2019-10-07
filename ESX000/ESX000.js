$(".secondary-nav .container .row .col-sm-6:first-of-type").empty();

var firstLink =
  "<a id='animation1' class='banner-text'>Now delivering nationwide starting at $99. <a class='white-link' href='#'>Learn more ›</a></a>";

var secondLink =
  "<a id='animation2' class='banner-text'><a class='white-link' href='#'><i class='fa fa-credit-card' aria-hidden='true'></i> Special Financing Available Today!</a></a>";

$(".secondary-nav .container .row .col-sm-6:first-of-type").html(firstLink);

function addRemAnimation() {
  $(".secondary-nav .container .row .col-sm-6:first-of-type")
    .removeClass("in-n-out")
    .addClass("in-n-out");
}

function flipFlop(state) {
  console.log(state);
  addRemAnimation();
  if (state == 1) {
    $(".secondary-nav .container .row .col-sm-6:first-of-type").html(firstLink);
    console.log("if");
    $("#animation1").one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        $(this)
          .removeClass("exit")
          .hide();
        $(".secondary-nav .container .row .col-sm-6:first-of-type").empty();
      }
    );
  } else {
    $(".secondary-nav .container .row .col-sm-6:first-of-type").html(
      secondLink
    );
    $("#animation2").one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        $(this)
          .removeClass("exit")
          .hide();
        $(".secondary-nav .container .row .col-sm-6:first-of-type").empty();
      }
    );
  }
}

$(document).ready(function() {
  var state = 1;
  setInterval(function() {
    flipFlop(state);
    if (state == 1) {
      state = 2;
    } else {
      state = 1;
    }
  }, 4000);
});
