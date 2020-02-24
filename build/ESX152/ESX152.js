function scrollOnErrorClick() {
  $("#shipBillBtn").click(function () {
    if ($(".error:visible").length) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "errClick"
      });
      window.$([document.documentElement, document.body]).animate({
        scrollTop: $(".error:visible").first().offset().top
      }, 300);
    }
  });
}

var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    scrollOnErrorClick();
  }
}, 50);

function pollingFn() {
  return document.getElementById("step2Tab").getAttribute("aria-expanded") == "true";
}