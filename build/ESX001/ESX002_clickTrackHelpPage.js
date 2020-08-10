var lookup = {};
Array.from(document.querySelectorAll(".department-buttons__item")).forEach(function (e) {
  var text = e.querySelector("p").innerText;
  var abbr = text.replace(" &", "").split(" ").map(function (n) {
    return n.toUpperCase();
  }).join("_");
  lookup[text] = "999_".concat(abbr);
});
document.addEventListener("click", function (e) {
  if (e.target.closest(".department-buttons__item")) {
    var target = e.target;

    while (!target.classList.contains("department-buttons__item")) {
      target = target.parentElement;
    }

    var text = target.querySelector("p").innerText;

    if (!!lookup[text]) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: lookup[text]
      });
    }
  }
});