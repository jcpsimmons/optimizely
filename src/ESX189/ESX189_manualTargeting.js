const ESX189ManualLaunch = () => {
  const iOS =
    /iPhone|iPhone Simulator/.test(navigator.userAgent) && !window.MSStream;

  const iOSSafari = () => {
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    var webkit = !!ua.match(/WebKit/i);
    var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    return iOSSafari;
  };

  const faceMask = /face mask/.test(utag_data.product_name);

  //    replace iOS with iOSSafari function for deploy
  if (iOS && !faceMask) {
    console.debug("ESX189 Manual Trigger Added");
    EventBus.$on("productAddedToCart", function() {
      //trigger optimizely
      console.debug("ESX189 Fire");
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "page",
        pageName: "ESX189",
      });
    });
  }
};

$(document).ready(function() {
  ESX189ManualLaunch();
});
