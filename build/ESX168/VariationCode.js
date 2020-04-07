function addEventListeners() {
  try {
    document.getElementById("ItemsInCart").addEventListener("click", function (e) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "168IIC"
      });
    });
  } catch (error) {}

  try {
    document.getElementById("HP4U").addEventListener("click", function (e) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "168HP4U"
      });
    });
  } catch (error) {}
}

var newScript = document.createElement("script");
newScript.src = "/_content/scripts/optimizely_hardcodes/ESX168.min.js?v=10";
var esx168int = setInterval(function () {
  if (document.getElementById("ls_hero_event")) {
    document.querySelector("body").appendChild(newScript);
    var scriptLoading = setInterval(function () {
      if (typeof initESX168 !== "undefined") {
        initESX168();
        addEventListeners();
        clearInterval(scriptLoading);
      }
    }, 50);
    clearInterval(esx168int);
  }
}, 50);