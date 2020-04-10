document
  .querySelector("#delivery-options button")
  .addEventListener("click", e => {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "clickVDO"
    });
  });

// add css
document
  .querySelector("head")
  .insertAdjacentHTML(
    "beforeend",
    `<style>#ESX174{text-align:center;} #ESX174 h4{font-weight:600;} #ESX174 i{color:green;}</style>`
  );

const injectFSMsg = () => {
  // find out how many in the column have FREE
  freeTexts = [
    ...document.querySelectorAll(
      "#delivery-options-caption-container tr td:nth-of-type(4)"
    )
  ].filter(el => {
    return el.textContent.toLowerCase() == "free";
  });

  // make sure el exists, and free eligible
  if (!document.getElementById("ESX174") && freeTexts.length > 0) {
    const injectionEl = document.querySelector(
      "#delivery-options > div:first-of-type"
    );
    injectionEl.classList.remove("col-xs-12");
    injectionEl.classList.add("col-xs-6");

    injectionEl.insertAdjacentHTML(
      "afterend",
      '<div id="ESX174" class="col-xs-6"><h4><i class="fa fa-check"></i> You Qualify for FREE Shipping</h4></div>'
    );
  }
};

// node to observe
const targetNode = document.getElementById(
  "delivery-options-caption-container"
);

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (let mutation of mutationsList) {
    if (mutation.type === "childList" || mutation.type === "attributes") {
      injectFSMsg();
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, {
  attributes: true,
  childList: true,
  subtree: true
});
