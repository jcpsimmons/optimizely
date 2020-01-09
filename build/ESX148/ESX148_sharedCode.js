$("body").on("click", "#moreLikeThis", function () {
  window.optimizely = window.optimizely || [];
  window.optimizely.push({
    type: "event",
    eventName: "click_more_like_this"
  });
});