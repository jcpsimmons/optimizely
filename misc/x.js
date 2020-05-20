const ESX = ($) => {
  document
    .querySelector("head")
    .insertAdjacentHTML(
      "beforeend",
      "<style>#ls_hero_event .slick-dots {bottom:-3rem!important}</style>"
    );
  $("#ls_hero_event").slick("unslick");
  $("#ls_hero_event").slick({ dots: true, arrows: false });
};
var anotherInterval = setInterval(() => {
  if (
    typeof window.jQuery !== "undefined" &&
    document.querySelectorAll("#ls_hero_event .slick-list").length
  ) {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    $(document).ready(function() {
      ESX($);
    });
  }
}, 50);
$("#ls_hero_event").on("init", function(event, slick) {
  console.log("initialized");
});
