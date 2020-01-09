// I'd like to update the language of the omni-channel section of the cart.
// This is the current language: Get everything delivered for $99.00
// If there are no items in their cart, I'd like to update that to "Get unlimited items delivered for $99"
// Let's make sure to take the .00 off after the $99
// VARIATION CODE
var i = 0;
var checkjq = setInterval(function () {
  if (i == 5) {
    clearInterval(checkjq);
  }

  if (window.jQuery && $('#omniinventory').length > 0 && $("a[data-target='#homeDeliveryModal']").length) {
    clearInterval(checkjq);
    newHtml = $("#omniinventory .list-unstyled li:contains('Get everything delivered')").html().replace('Get everything delivered for $', 'Get unlimited items delivered for $').replace('.00', '');
    $("#omniinventory .list-unstyled li:contains('Get everything delivered')").html(newHtml);
    i++;
  }
}, 50); // JS Function Code

function jsCondition() {
  return Number($('span.counter.cart').text()) == 0;
}