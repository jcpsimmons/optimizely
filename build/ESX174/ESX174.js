function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var esx174 = function esx174() {
  var freeColNumber = "4";
  var fontSize = "1.8rem";
  var zipChartSel = ".delivery-options-text > span:nth-of-type(2)";

  if (utag_data.site_type == "mobile") {
    freeColNumber = "3";
    fontSize = "1.3rem";
    zipChartSel = "#delivery-options > div.col-xs-12.pad-left-0.delivery-options-text > div:nth-child(2) > span:nth-child(1)";
  }

  document.querySelector("#delivery-options button").addEventListener("click", function (e) {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "clickVDO"
    });
  });
  document.querySelector("head").insertAdjacentHTML("beforeend", "<style>#ESX174{padding: 0;} #ESX174 h4{font-weight:600; font-size: ".concat(fontSize, "; white-space: nowrap; color: #00699A;} #ESX174 i{color:#00699A;}</style>"));

  var injectFSMsg = function injectFSMsg() {
    freeTexts = _toConsumableArray(document.querySelectorAll("#delivery-options-caption-container tr td:nth-of-type(".concat(freeColNumber, ")"))).filter(function (el) {
      return el.textContent.toLowerCase() == "free";
    });

    if (!document.getElementById("ESX174") && freeTexts.length > 0) {
      document.querySelector(".search-form-container label").insertAdjacentHTML("afterend", '<span id="ESX174"><h4><i class="fa fa-check"></i> FREE Shipping Eligible</h4></span>');
    }

    if (document.getElementById("ESX174") && freeTexts.length > 0) {
      document.getElementById("ESX174").style.display = "block";
    }

    if (document.getElementById("ESX174") && freeTexts.length < 1 || document.getElementById("delivery-options-error-message")) {
      document.getElementById("ESX174").style.display = "none";
    }
  };

  var detectRun = function detectRun() {
    var enteredZip = document.getElementById("cityOrZipCodeInput").value;
    var x = setInterval(function () {
      if (document.querySelector(zipChartSel)) {
        var zip = document.querySelector(zipChartSel).textContent.replace(/\D/g, "");

        if (enteredZip == zip) {
          injectFSMsg();
          clearInterval(x);
        }
      }
    }, 50);
  };

  document.querySelector(".search-form-container button").addEventListener("click", detectRun);

  window.onkeydown = function (e) {
    if (e.key == "Enter") {
      detectRun();
    } else if (e.target.id == "cityOrZipCodeInput" && document.getElementById("ESX174")) {
      document.getElementById("ESX174").style.display = "none";
    }
  };
};

var waitloop = setInterval(function () {
  if (document.getElementById("delivery-options-caption-container")) {
    esx174();
    clearInterval(waitloop);
  }
}, 50);