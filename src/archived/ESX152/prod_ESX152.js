// VARIATION CODE

function scrollOnErrorClick() {
  var $ = window.jQuery;
  $("#shipBillBtn").click(function() {
    if ($(".error:visible").length) {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: window
            .$(".error:visible")
            .first()
            .offset().top,
        },
        300
      );
    }
  });
}

// Handler - wait for jQuery and run code (above)
var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    scrollOnErrorClick();
  }
}, 50);
