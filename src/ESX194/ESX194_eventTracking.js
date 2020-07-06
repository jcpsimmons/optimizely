const ESX194Tracking = () => {
  var targetNode = document.querySelector("#checkoutVue");
  var observerOptions = {
    childList: true,
    attributes: true,
    subtree: true, //Omit or set to false to observe only changes to the parent node.
  };

  var observer = new MutationObserver(() => {
    if (
      document
        .querySelector("#checkoutVue li:nth-of-type(1)")
        .classList.contains("active")
    ) {
      console.log("step 1 - click tracking");
      // optimizely info will go here
    } else if (
      document
        .querySelector("#checkoutVue li:nth-of-type(2)")
        .classList.contains("active")
    ) {
      console.log("step 2 - click tracking");
      // optimizely info will go here
    } else if (
      document
        .querySelector("#checkoutVue li:nth-of-type(3)")
        .classList.contains("active")
    ) {
      console.log("step 3 - click tracking");
      // optimizely info will go here
    }
  });
  observer.observe(targetNode, observerOptions);
};

if (document.readyState === "complete") {
  ESX194Tracking();
} else {
  document.addEventListener("DOMContentLoaded", ESX194Tracking);
}
