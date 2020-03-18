"use strict";

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === "[object Arguments]"
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

var googleAnalyticsManualTracking = function googleAnalyticsManualTracking() {
  function titleCase(str) {
    return str
      .toLowerCase()
      .split(/\s|-|_/g)
      .filter(function(x) {
        return x !== "";
      })
      .map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(" ");
  } // Schema---------------
  // selector: name for google analytics

  var selectors = {
    // IDs - these are added automatically, only add if you need to manually name one
    BVQASortListID: "Bazaarvoice Sort Box",
    BVQASearchFormTextInputID: "Bazaarvoice Search Box",
    BVQAQuestionsID: "Bazaarvoice Expand Question",
    BVQAAskQuestionID: "Bazaarvoice Ask Question",
    omniInventoryHeader: "Change Your Zip Code",
    // Classes
    "like-product": "",
    "ca-warning": "",
    "thumb-list": "",
    less: "Read More Button",
    "select-wrapper": "Add to Cart Quantity Select",
    "view-size": "View Size Button",
    "more-stores": "See at more stores"
  }; // add all IDs on page to selector object

  throwawayvar = _toConsumableArray(document.querySelectorAll("[id]"))
    .filter(function(x) {
      if (
        x.tagName !== "SCRIPT" ||
        x.tagName !== "STYLE" ||
        x.tagName !== "linearGradient"
      ) {
        return true;
      }

      return false;
    })
    .forEach(function(x) {
      selectors[x.id] = "";
    }); // Add pdp_ to values, if there's no value - make one

  Object.keys(selectors).map(function(selector) {
    // Only create a selector if we don't have one in there manually (for overrides)
    if (selectors[selector] == "") {
      var unCamelCased = selector.replace(/([A-Z])/g, " $1");
      var humanReadable = titleCase(unCamelCased);
      selectors[selector] = humanReadable;
    }
  });

  var getDevice = function getDevice() {
    return window.utag_data.site_type;
  }; // Recursively checks parents for a selector match, returns if it matches

  var checkParent = function checkParent(el) {
    try {
      var classArr = _toConsumableArray(el.classList);

      if (selectors[el.id]) {
        // check for ID match
        return selectors[el.id];
      } else if (
        classArr.some(function(x) {
          return Object.keys(selectors).includes(x);
        })
      ) {
        // check for class match
        var match;
        classArr.forEach(function(x) {
          if (selectors[x]) {
            match = selectors[x];
          }
        });
        return match;
      } else {
        el = el.parentElement; // must return value all the way up the call stack

        return checkParent(el);
      }
    } catch (err) {
      return false;
    }
  };

  document.addEventListener("click", function(e) {
    var elName = checkParent(e.target);
    console.log(elName);
    gtag("event", elName, {
      event_category: "manualTracking_pdp_".concat(getDevice()),
      event_label: elName,
      send_to: "UA-463007-1"
    });
  });
};

googleAnalyticsManualTracking();
