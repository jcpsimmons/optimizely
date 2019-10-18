// EXPERIMENT CODE
var busInterval = setInterval(function() {
  if (typeof window.EventBus !== "undefined") {
    clearInterval(busInterval);
    function checkAndToggle() {
      if ($(".store-pickup-options").css("display") != "none") {
        $(".price-total-table .price-table td:contains(Estimated Tax)").text(
          "Tax"
        );
      } else {
        $(".price-total-table .price-table td:contains(Tax)").text(
          "Estimated Tax"
        );
      }
    }
    function doStuff() {
      var shippingLoadInterval = setInterval(function() {
        if ($(".vue-loading").css("display") !== "none") {
          checkAndToggle();
        }
      }, 50);
    }
    $(".cart-content").on("click", function() {
      doStuff();
    });
    window.EventBus.$on("refreshCart", function(data) {
      doStuff();
    });
    checkAndToggle();
  }
}, 50);

// SHARED CODE
var anotherInterval = setInterval(function() {
  if (typeof window.EventBus !== "undefined") {
    clearInterval(anotherInterval);
    $(".delivery-options-container .delivery-option:nth-of-type(3)").on(
      "click",
      function() {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "click_pickup_option_tab"
        });
      }
    );
  }
}, 50);
