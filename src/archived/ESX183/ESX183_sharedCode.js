const eventListeners183 = () => {
  document.addEventListener("click", (e) => {
    if (
      e.target.parentNode.parentNode.parentNode.classList.contains("gift-card")
    ) {
      console.log("giftCard Click");
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "183_cgc",
      });
    } else if (e.target.id == "coupon-code") {
      console.log("click survey code");
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "183_csc",
      });
    }
  });
};

window.$(document).ready(eventListeners183);
