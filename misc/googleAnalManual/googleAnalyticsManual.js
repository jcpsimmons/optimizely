const googleAnalyticsManualTracking = () => {
  function titleCase(str) {
    return str
      .toLowerCase()
      .split(/\s|-|_/g)
      .filter(x => {
        return x !== "";
      })
      .map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(" ");
  }

  // Schema---------------
  // selector: name for google analytics
  const selectors = {
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
  };

  // add all IDs on page to selector object
  throwawayvar = [...document.querySelectorAll("[id]")]
    .filter(x => {
      if (
        x.tagName !== "SCRIPT" ||
        x.tagName !== "STYLE" ||
        x.tagName !== "linearGradient"
      ) {
        return true;
      }
      return false;
    })
    .forEach(x => {
      selectors[x.id] = "";
    });

  // Add pdp_ to values, if there's no value - make one
  Object.keys(selectors).map(selector => {
    // Only create a selector if we don't have one in there manually (for overrides)
    if (selectors[selector] == "") {
      let unCamelCased = selector.replace(/([A-Z])/g, " $1");
      let humanReadable = titleCase(unCamelCased);
      selectors[selector] = humanReadable;
    }
  });

  const getDevice = () => {
    return window.utag_data.site_type;
  };

  // Recursively checks parents for a selector match, returns if it matches
  const checkParent = el => {
    try {
      let classArr = [...el.classList];
      if (selectors[el.id]) {
        // check for ID match
        return selectors[el.id];
      } else if (classArr.some(x => Object.keys(selectors).includes(x))) {
        // check for class match
        let match;
        classArr.forEach(x => {
          if (selectors[x]) {
            match = selectors[x];
          }
        });
        return match;
      } else {
        el = el.parentElement;
        // must return value all the way up the call stack
        return checkParent(el);
      }
    } catch (err) {
      return false;
    }
  };

  document.addEventListener("click", function(e) {
    let elName = checkParent(e.target);
    console.log(elName);
    gtag("event", elName, {
      event_category: `manualTracking_pdp_${getDevice()}`,
      event_label: elName,
      send_to: "UA-463007-1"
    });
  });
};

googleAnalyticsManualTracking();
