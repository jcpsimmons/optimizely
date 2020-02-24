// VARIATION CODE

function scrollOnErrorClick() {
  var $ = window.jQuery;
  $("#shipBillBtn").click(function() {
    if ($(".error:visible").length) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "errClick"
      });
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $(".error:visible")
            .first()
            .offset().top
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

// POLLING FUNCTION

function pollingFn() {
  return (
    document.getElementById("step2Tab").getAttribute("aria-expanded") == "true"
  );
}
