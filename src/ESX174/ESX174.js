const esx174 = () => {
  let freeColNumber = "4";
  let fontSize = "1.8rem";

  if (utag_data.site_type == "mobile") {
    freeColNumber = "3";
    fontSize = "1.3rem";
  }

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
      `<style>#ESX174{padding: 0;} #ESX174 h4{font-weight:600; font-size: ${fontSize}; white-space: nowrap; color: #00699A;} #ESX174 i{color:#00699A;}</style>`
    );

  const injectFSMsg = () => {
    // find out how many in the column have FREE
    freeTexts = [
      ...document.querySelectorAll(
        `#delivery-options-caption-container tr td:nth-of-type(${freeColNumber})`
      ),
    ].filter((el) => {
      return el.textContent.toLowerCase() == "free";
    });

    // make sure el exists, and free eligible
    if (!document.getElementById("ESX174") && freeTexts.length > 0) {
      document
        .querySelector(".search-form-container label")
        .insertAdjacentHTML(
          "afterend",
          '<span id="ESX174"><h4><i class="fa fa-check"></i> FREE Shipping Eligible</h4></span>'
        );
    }
    if (document.getElementById("ESX174") && freeTexts.length > 0) {
      // if it already exists do this
      document.getElementById("ESX174").style.display = "block";
    }
    if (document.getElementById("ESX174") && freeTexts.length < 1) {
      // no free shipping! remove it!!!
      document.getElementById("ESX174").style.display = "none";
    }
  };

  // node to observe
  const targetNode = document.getElementById(
    "delivery-options-caption-container"
  );

  // config
  const config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
  };

  // Callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
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
  observer.observe(targetNode, config);

  // Observer for error message
  const errorObesrver = new MutationObserver((mutationsList, observer) => {
    // Use traditional 'for loops' for IE 11
    for (let mutation of mutationsList) {
      if (
        (mutation.type === "childList" ||
          mutation.type === "attributes" ||
          mutation.type === "characterData") &&
        document.querySelector(".validation-error").style.display !== "none" &&
        document.getElementById("ESX174")
      ) {
        document.getElementById("ESX174").style.display = "none";
      }

      if (
        (mutation.type === "childList" ||
          mutation.type === "attributes" ||
          mutation.type === "characterData") &&
        document.getElementById("delivery-options-error-message")
      ) {
        document.getElementById("ESX174").style.display = "none";
      }
    }
  });

  errorObesrver.observe(document.querySelector(".validation-error"), config);
  errorObesrver.observe(document.querySelector("#delivery-options"), config);
};

let waitloop = setInterval(() => {
  if (document.getElementById("delivery-options-caption-container")) {
    esx174();
    clearInterval(waitloop);
  }
}, 50);
