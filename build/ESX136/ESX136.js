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
}, 50);

function jsCondition() {
  return Number($('span.counter.cart').text()) == 0;
}