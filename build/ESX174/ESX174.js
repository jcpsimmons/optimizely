function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var esx174 = function esx174() {
  var freeColNumber = "4";
  var fontSize = "1.8rem";

  if (utag_data.site_type == "mobile") {
    freeColNumber = "3";
    fontSize = "1.3rem";
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

    if (document.getElementById("ESX174") && freeTexts.length < 1) {
      document.getElementById("ESX174").style.display = "none";
    }
  };

  var targetNode = document.getElementById("delivery-options-caption-container");
  var config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true
  };

  var callback = function callback(mutationsList, observer) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = mutationsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var mutation = _step.value;

        if (mutation.type === "childList" || mutation.type === "attributes" || mutation.type === "characterData") {
          injectFSMsg();
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  var observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  var errorObesrver = new MutationObserver(function (mutationsList, observer) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = mutationsList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var mutation = _step2.value;

        if ((mutation.type === "childList" || mutation.type === "attributes" || mutation.type === "characterData") && document.querySelector(".validation-error").style.display !== "none" && document.getElementById("ESX174")) {
          document.getElementById("ESX174").style.display = "none";
        }

        if ((mutation.type === "childList" || mutation.type === "attributes" || mutation.type === "characterData") && document.getElementById("delivery-options-error-message")) {
          document.getElementById("ESX174").style.display = "none";
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  });
  errorObesrver.observe(document.querySelector(".validation-error"), config);
  errorObesrver.observe(document.querySelector("#delivery-options"), config);
};

var waitloop = setInterval(function () {
  if (document.getElementById("delivery-options-caption-container")) {
    esx174();
    clearInterval(waitloop);
  }
}, 50);