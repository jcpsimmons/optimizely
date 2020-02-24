import _typeof from "@babel/runtime/helpers/typeof";

var mobile = function mobile() {
  window.$("#imgSlider").slick("unslick");
  var lifestyleImages = $('.product-info-component img[alt$=" - Room"]').parent().parent().detach();
  $('.product-info-component img[alt$=" - Signature"]').parent().parent().after(lifestyleImages);
  window.$("#imgSlider").slick({
    dots: true,
    arrows: false
  });
  window.$('#imgSlider img[alt$=" - Room"]').bind("touchmove", function () {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "clickImgTiles",
      tags: {
        revenue: 0,
        value: 0.0
      }
    });
  });
};

var desktop = function desktop() {
  var viewMoreNumber = $("span.view-more-number").detach();
  $(".product-info-component .view-more").removeClass("view-more");
  selectorPrefixes = ["#viewmoreComponentModal", ".product-info-component  div.img-click"];

  for (var i = 0; i < selectorPrefixes.length; i++) {
    $("".concat(selectorPrefixes[i], ' img[alt$=" - Room"]')).parent().each(function () {
      var x = $(this).unbind("click").detach();
      $("".concat(selectorPrefixes[i], ' img[alt$=" - Signature"]')).first().parent().after(x);
    });
  }

  if ($(".thumb-list .img-click").length > 7) {
    $(".thumb-list .img-click:nth-of-type(7)").addClass("view-more").append(viewMoreNumber).click(function () {
      window.$("#viewmoreComponentModal").modal("show");
      window.$("#viewmoreComponentModal div.view-more-component__thumbnails > div").removeClass("active");
      window.$("#viewmoreComponentModal div.view-more-component__thumbnails > div:nth-child(6)").focus().addClass("active");
      document.getElementById("large-image").src = $("#viewmoreComponentModal div.view-more-component__thumbnails > div:nth-child(6) img").attr("src").split("?")[0] + "?w=1000&h=674&mode=pad";
    });
    setTimeout(function () {
      for (var i = 0; i < 6; i++) {
        window.$(".thumb-list .img-click:nth-of-type(" + (i + 1) + ")").unbind("click");
      }

      window.$(".thumb-list img[alt$=' - Room']").click(function () {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "clickImgTiles",
          tags: {
            revenue: 0,
            value: 0.0
          }
        });
      });
    }, 1000);
  } else if ($(".view-more").length) {
    var index = $(".thumb-list .img-click").index($(".thumb-list .img-click:last-of-type"));
    $(".thumb-list .img-click:last-of-type").addClass("view-more").append(viewMoreNumber).click(function () {
      window.$("#viewmoreComponentModal").modal("show");
    });
    setTimeout(function () {
      for (var i = 0; i < index; i++) {
        window.$(".thumb-list .img-click:nth-of-type(" + (i + 1) + ")").unbind("click");
      }

      window.$(".thumb-list img[alt$=' - Room']").click(function () {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "clickImgTiles",
          tags: {
            revenue: 0,
            value: 0.0
          }
        });
      });
    }, 1000);
  }
};

$(document).ready(function () {
  var anotherInterval = setInterval(function () {
    if (typeof window.jQuery !== "undefined") {
      var $ = window.jQuery;
      clearInterval(anotherInterval);

      if (_typeof(window.$("#viewmoreComponentModal").modal("hide")) == "object") {
        if (utag_data.site_type == "desktop") {
          desktop();
        } else {
          var mobileInterval = setInterval(function () {
            if (typeof $("#imgSlider").slick == "function") {
              clearInterval(mobileInterval);
              setTimeout(function () {
                mobile();
              }, 1000);
            }
          }, 50);
        }
      }
    }
  }, 50);
});