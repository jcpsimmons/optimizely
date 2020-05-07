window.$(document).ready(function () {
  document.addEventListener("click", function (e) {
    if (e.target.innerText.toLowerCase() == "submit" && document.querySelector(".BVPageHeader").textContent.toLowerCase() == "preview your question") {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "179_csr",
        tags: {
          revenue: 0,
          value: 0.0
        }
      });
    }
  });
});