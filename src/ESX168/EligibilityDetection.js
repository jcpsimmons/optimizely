function pollingFn() {
  function notIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      return false;
    }

    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      var rv = ua.indexOf("rv:");
      return false;
    }

    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      return false;
    }

    return true;
  }

  function checkSkus() {
    var liked = JSON.parse(window.utag_data["cp.lsf-liked-items"]);
    var viewed = JSON.parse(window.utag_data["cp.lsf-recently-viewed-list"]);
    var skus = viewed.concat(liked);
    if (skus.length > 10) {
      return true;
    } else {
      return false;
    }
  }

  return checkSkus() && notIE();
}
