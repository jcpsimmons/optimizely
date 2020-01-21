var mobile = function mobile() {
  $("#imgSlider").slick("unslick");
  var lifestyleImages = $(".product-info-component img[alt$=\" - Room\"]").parent().parent().detach();
  $(".product-info-component img[alt$=\" - Signature\"]").parent().parent().after(lifestyleImages);
  $("#imgSlider").slick({
    dots: true,
    arrows: false
  });
};

var desktop = function desktop() {
  var viewMoreNumber = $("span.view-more-number").detach();
  $(".product-info-component .view-more").removeClass("view-more");
  selectorPrefixes = ["#viewmoreComponentModal", ".product-info-component  div.img-click"];
  selectorPrefixes.forEach(function (prefix) {
    var lifestyleImages = $("".concat(prefix, " img[alt$=\" - Room\"]")).parent().detach().off("click");
    $("".concat(prefix, " img[alt$=\" - Signature\"]")).parent().after(lifestyleImages);
  });

  if ($(".thumb-list .img-click").length > 7) {
    $(".thumb-list .img-click:nth-of-type(7)").addClass("view-more").append(viewMoreNumber).click(function () {
      $("#viewmoreComponentModal").modal("show");
    });
  } else {
    $(".thumb-list .img-click:last-of-type").addClass("view-more").append(viewMoreNumber).click(function () {
      $("#viewmoreComponentModal").modal("show");
    });
  }
};

var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;

    if (utag_data.site_type == "desktop") {
      desktop();
    } else {
      mobile();
    }
  }
}, 50);