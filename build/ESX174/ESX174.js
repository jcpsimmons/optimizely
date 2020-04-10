function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

document.querySelector("#delivery-options button").addEventListener("click", function (e) {
  window["optimizely"] = window["optimizely"] || [];
  window["optimizely"].push({
    type: "event",
    eventName: "clickVDO"
  });
});
document.querySelector("head").insertAdjacentHTML("beforeend", "<style>#ESX174{text-align:center;} #ESX174 h4{font-weight:600;} #ESX174 i{color:green;}</style>");

var injectFSMsg = function injectFSMsg() {
  freeTexts = _toConsumableArray(document.querySelectorAll("#delivery-options-caption-container tr td:nth-of-type(4)")).filter(function (el) {
    return el.textContent.toLowerCase() == "free";
  });

  if (!document.getElementById("ESX174") && freeTexts.length > 0) {
    var injectionEl = document.querySelector("#delivery-options > div:first-of-type");
    injectionEl.classList.remove("col-xs-12");
    injectionEl.classList.add("col-xs-6");
    injectionEl.insertAdjacentHTML("afterend", '<div id="ESX174" class="col-xs-6"><h4><i class="fa fa-check"></i> You Qualify for FREE Shipping</h4></div>');
  }
};

var targetNode = document.getElementById("delivery-options-caption-container");

var callback = function callback(mutationsList, observer) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = mutationsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var mutation = _step.value;

      if (mutation.type === "childList" || mutation.type === "attributes") {
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
observer.observe(targetNode, {
  attributes: true,
  childList: true,
  subtree: true
});