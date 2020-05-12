// click tracking

document.querySelector("body").addEventListener("click", (e) => {
  let child = false;
  [...e.target.children].forEach((el) => {
    if (el.classList.contains("free-shipping-message")) {
      child = true;
    }
  });

  if (e.target.classList.contains("free-shipping-message") || child) {
    console.log("fsm clicked");
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "fsmParent",
    });
  }
});
