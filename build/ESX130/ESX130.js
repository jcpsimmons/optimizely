var busInterval = setInterval(function () {
  if (typeof window.EventBus !== 'undefined') {
    var checkAndToggle = function checkAndToggle() {
      if ($('.store-pickup-options').css('display') != 'none') {
        $('.price-total-table .price-table td:contains(Estimated Tax)').text('Tax');
      } else {
        $('.price-total-table .price-table td:contains(Tax)').text('Estimated Tax');
      }
    };

    var doStuff = function doStuff() {
      var shippingLoadInterval = setInterval(function () {
        if ($('.vue-loading').css('display') !== 'none') {
          checkAndToggle();
        }
      }, 50);
    };

    clearInterval(busInterval);
    $('.cart-content').on('click', function () {
      doStuff();
    });
    window.EventBus.$on('refreshCart', function (data) {
      doStuff();
    });
    checkAndToggle();
  }
}, 50);
var anotherInterval = setInterval(function () {
  if (typeof window.EventBus !== 'undefined') {
    clearInterval(anotherInterval);
    $('.delivery-options-container .delivery-option:nth-of-type(3)').on('click', function () {
      window.optimizely = window.optimizely || [];
      window.optimizely.push({
        type: 'event',
        eventName: 'click_pickup_option_tab'
      });
    });
  }
}, 50);