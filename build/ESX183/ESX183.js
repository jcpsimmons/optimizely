var ESX183 = function ESX183() {
  var giftCard = document.querySelector(".checkout-component .gift-card");
  var surveyCoupon = [];

  for (var i = 0; i < 5; i++) {
    var el = document.querySelector('[for="coupon-code"]');

    for (var n = 0; n < i; n++) {
      el = el.nextSibling;
    }

    surveyCoupon.push(el);
  }

  giftCard.style.borderTop = "none";
  giftCard.style.marginBottom = "0";
  surveyCoupon[0].style.borderTop = "1px solid #d5d5d5";
  surveyCoupon[0].style.width = "100%";
  surveyCoupon[0].style.paddingTop = "3rem";
  surveyCoupon.forEach(function (el) {
    giftCard.parentNode.insertBefore(el, giftCard);
  });

  if (utag_data.site_type == "mobile") {
    document.querySelector(".checkout-component .gift-card").style.marginTop = "6rem";
  }
};

window.$(document).ready(ESX183);