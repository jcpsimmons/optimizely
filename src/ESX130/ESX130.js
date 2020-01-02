// EXPERIMENT CODE
var busInterval = setInterval(() => {
  if (typeof window.EventBus !== 'undefined') {
    clearInterval(busInterval);
    function checkAndToggle() {
      if ($('.store-pickup-options').css('display') != 'none') {
        $('.price-total-table .price-table td:contains(Estimated Tax)').text(
          'Tax',
        );
      } else {
        $('.price-total-table .price-table td:contains(Tax)').text(
          'Estimated Tax',
        );
      }
    }
    function doStuff() {
      const shippingLoadInterval = setInterval(() => {
        if ($('.vue-loading').css('display') !== 'none') {
          checkAndToggle();
        }
      }, 50);
    }
    $('.cart-content').on('click', () => {
      doStuff();
    });
    window.EventBus.$on('refreshCart', (data) => {
      doStuff();
    });
    checkAndToggle();
  }
}, 50);

// SHARED CODE
var anotherInterval = setInterval(() => {
  if (typeof window.EventBus !== 'undefined') {
    clearInterval(anotherInterval);
    $('.delivery-options-container .delivery-option:nth-of-type(3)').on(
      'click',
      () => {
        window.optimizely = window.optimizely || [];
        window.optimizely.push({
          type: 'event',
          eventName: 'click_pickup_option_tab',
        });
      },
    );
  }
}, 50);
