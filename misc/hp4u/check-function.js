// FOR INSPO MENU

function checkEligibility() {
  function undefinedChecker(query) {
    if (typeof query == "undefined") {
      return false;
    } else {
      return true;
    }
  }
  searchTerms = undefinedChecker(utag_data["cp.lsf-search-term"])
    ? utag_data["cp.lsf-search-term"].split(",")
    : [];
  searchWords = undefinedChecker(utag_data["cp.lsf-search-term"])
    ? utag_data["cp.lsf-search-term"].split(/,| /)
    : [];
  likedItems = undefinedChecker(utag_data["cp.lsf-liked-items"])
    ? JSON.parse(utag_data["cp.lsf-liked-items"])
    : [];
  viewedItems = undefinedChecker(utag_data["cp.lsf-recently-viewed-list"])
    ? JSON.parse(utag_data["cp.lsf-recently-viewed-list"])
    : [];
  cartAdds = undefinedChecker(utag_data["cp.lsf-cartadds"])
    ? utag_data["cp.lsf-cartadds"].split(",")
    : [];

  var checkCondition =
    searchTerms.length +
    searchWords.length +
    searchTerms.length +
    viewedItems.length +
    likedItems.length +
    cartAdds.length;
  if (checkCondition < 15 || typeof checkCondition === "undefined") {
    console.log("false");
    return false;
  } else {
    console.log("true");
    return true;
  }
}

// FOR PROFILE MENU

function checkEligibility() {
  if (utag_data.logged_in == "Y") {
    function undefinedChecker(query) {
      if (typeof query == "undefined") {
        return false;
      } else {
        return true;
      }
    }
    searchTerms = undefinedChecker(utag_data["cp.lsf-search-term"])
      ? utag_data["cp.lsf-search-term"].split(",")
      : [];
    searchWords = undefinedChecker(utag_data["cp.lsf-search-term"])
      ? utag_data["cp.lsf-search-term"].split(/,| /)
      : [];
    likedItems = undefinedChecker(utag_data["cp.lsf-liked-items"])
      ? JSON.parse(utag_data["cp.lsf-liked-items"])
      : [];
    viewedItems = undefinedChecker(utag_data["cp.lsf-recently-viewed-list"])
      ? JSON.parse(utag_data["cp.lsf-recently-viewed-list"])
      : [];
    cartAdds = undefinedChecker(utag_data["cp.lsf-cartadds"])
      ? utag_data["cp.lsf-cartadds"].split(",")
      : [];

    var checkCondition =
      searchTerms.length +
      searchWords.length +
      searchTerms.length +
      viewedItems.length +
      likedItems.length +
      cartAdds.length;
    if (checkCondition < 15 || typeof checkCondition === "undefined") {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
