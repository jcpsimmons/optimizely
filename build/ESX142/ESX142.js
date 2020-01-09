// target delivery vs pickup
function jsCondition() {
  return $('td.description:contains(In-Home Delivery)').length > 0;
} // variation code


var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== 'undefined') {
    clearInterval(anotherInterval);
    $('div.checkbox-lg-text:contains(please send me autodialed)').text('Yes, please send me autodialed texts and prerecorded messages about my pickup in store.');
    $('#delivery-instructions').hide();
  }
}, 50);