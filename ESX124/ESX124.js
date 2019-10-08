$(document).ready(function() {
  $(".promo").empty();

  var firstLink =
    "<a id='animation1' class='banner-text white-link' href='https://www.livingspaces.com/delivery'>Now delivering nationwide starting at $99 &rsaquo;</a>";

  var secondLink =
    "<a id='animation2' class='banner-text white-link' href='https://www.livingspaces.com/company/financing'><i class='fa fa-credit-card' aria-hidden='true'></i> Special Financing Available Today &rsaquo;</a>";

  $(".promo").html(firstLink);

  function addRemAnimation() {
    $(".promo")
      .removeClass("in-n-out")
      .addClass("in-n-out");
  }

  function flipFlop(state) {
    addRemAnimation();
    if (state == 1) {
      $(".promo").html(firstLink);
      $("#animation1").one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $(this).hide();
          $(".promo").empty();
        }
      );
    } else {
      $(".promo").html(secondLink);
      $("#animation2").one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $(this).hide();
          $(".promo").empty();
        }
      );
    }
  }

  addRemAnimation();
  var state = 2;
  setInterval(function() {
    flipFlop(state);
    if (state == 1) {
      state = 2;
    } else {
      state = 1;
    }
  }, 7000);
});

// FOR BOTH VARIATIONS
$(document).ready(function() {
  $(".promo").click(function() {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "clickBannerLink"
    });
  });
});
