document
  .querySelector("#delivery-options button")
  .addEventListener("click", (e) => {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "clickVDO",
    });
  });

// add css
document
  .querySelector("head")
  .insertAdjacentHTML(
    "beforeend",
    `<style>#ESX174{text-align:center;background:#ffffff;height:4.6rem;padding:0 3rem;transition:opacity 1s;} #ESX174 h4{font-weight:600; font-size: 1.8rem;} #ESX174 i{color:#00699a;}</style>`
  );

const injectFSMsg = () => {
  // find out how many in the column have FREE
  freeTexts = [
    ...document.querySelectorAll(
      "#delivery-options-caption-container tr td:nth-of-type(4)"
    ),
  ].filter((el) => {
    return el.textContent.toLowerCase() == "free";
  });

  // make sure el exists, and free eligible
  if (!document.getElementById("ESX174") && freeTexts.length > 0) {
    document
      .querySelector("#delivery-options .col-xs-12:first-of-type")
      .insertAdjacentHTML(
        "afterend",
        '<div id="ESX174"><h4><i class="fa fa-check"></i> You Qualify for FREE Shipping</h4></div>'
      );
    // document.querySelector(".search-form-container button").style.display =
    //   "none";
    // setTimeout(() => {
    //   document.getElementById("ESX174").style.opacity = 0;
    //   document.getElementById("ESX174").style.display = "none";
    //   document.querySelector(".search-form-container button").style.display =
    //     "block";
    // }, 3000);
  }
  if (document.getElementById("ESX174") && freeTexts.length > 0) {
    // if it already exists do this
    // console.log("case B");
    // document.getElementById("ESX174").style.display = "block";
    // document.getElementById("ESX174").style.opacity = 1;
    // document.querySelector(".search-form-container button").style.display =
    //   "none";
    // setTimeout(() => {
    //   document.getElementById("ESX174").style.opacity = 0;
    //   document.getElementById("ESX174").style.display = "none";
    //   document.querySelector(".search-form-container button").style.display =
    //     "block";
    // }, 3000);
  }
  if (document.getElementById("ESX174") && freeTexts.length < 1) {
    // no free shipping! remove it!!!
  }
};

// node to observe
const targetNode = document.getElementById(
  "delivery-options-caption-container"
);

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
  console.log("mutate");
  // Use traditional 'for loops' for IE 11
  for (let mutation of mutationsList) {
    if (
      mutation.type === "childList" ||
      mutation.type === "attributes" ||
      mutation.type === "characterData"
    ) {
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
  subtree: true,
  characterData: true,
});
