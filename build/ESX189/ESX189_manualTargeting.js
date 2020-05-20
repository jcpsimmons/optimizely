var ESX189ManualLaunch = function ESX189ManualLaunch() {
  var iOSSafari = function iOSSafari() {
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    var webkit = !!ua.match(/WebKit/i);
    var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    return iOSSafari;
  };

  var faceMask = /face mask/.test(utag_data.product_name);

  if (iOSSafari() && !faceMask) {
    EventBus.$on("productAddedToCart", function () {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "page",
        pageName: "ESX189"
      });
    });
  }
};

$(document).ready(function () {
  ESX189ManualLaunch();
});