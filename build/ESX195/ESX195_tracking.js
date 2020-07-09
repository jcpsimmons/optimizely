var ESX195ELs = function ESX195ELs() {
  document.addEventListener("click", function (e) {
    if (e.target.closest("#ESX195")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "195_CBTSCB"
      });
    }
  });
};

if (document.readyState === "complete") {
  ESX195ELs();
} else {
  document.addEventListener("DOMContentLoaded", ESX195ELs);
}