const esx174 = () => {
  let freeColNumber = "4";
  let fontSize = "1.8rem";
  let zipChartSel = ".delivery-options-text > span:nth-of-type(2)";

  if (utag_data.site_type == "mobile") {
    freeColNumber = "3";
    fontSize = "1.3rem";
    zipChartSel =
      "#delivery-options > div.col-xs-12.pad-left-0.delivery-options-text > div:nth-child(2) > span:nth-child(1)";
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

    console.log("freeTexts", freeTexts);

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
    if (
      (document.getElementById("ESX174") && freeTexts.length < 1) ||
      document.getElementById("delivery-options-error-message")
    ) {
      // no free shipping! remove it!!!
      document.getElementById("ESX174").style.display = "none";
    }
  };

  const detectRun = () => {
    const enteredZip = document.getElementById("cityOrZipCodeInput").value;
    let x = setInterval(() => {
      if (document.querySelector(zipChartSel)) {
        const zip = document
          .querySelector(zipChartSel)
          .textContent.replace(/\D/g, "");
        if (enteredZip == zip) {
          injectFSMsg();
          clearInterval(x);
        }
      }
    }, 50);
  };

  document
    .querySelector(".search-form-container button")
    .addEventListener("click", detectRun);

  window.onkeydown = function(e) {
    if (e.key == "Enter") {
      detectRun();
    } else if (
      e.target.id == "cityOrZipCodeInput" &&
      document.getElementById("ESX174")
    ) {
      document.getElementById("ESX174").style.display = "none";
    }
  };
};

let waitloop = setInterval(() => {
  if (document.getElementById("delivery-options-caption-container")) {
    esx174();
    clearInterval(waitloop);
  }
}, 50);
