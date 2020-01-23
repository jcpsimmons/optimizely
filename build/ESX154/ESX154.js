import _typeof from "@babel/runtime/helpers/typeof";

var mobile = function mobile() {
  $("#imgSlider").slick("unslick");
  var lifestyleImages = $('.product-info-component img[alt$=" - Room"]').parent().parent().detach();
  $('.product-info-component img[alt$=" - Signature"]').parent().parent().after(lifestyleImages);
  $("#imgSlider").slick({
    dots: true,
    arrows: false
  });
  window.$('#imgSlider').click(function () {
    window['optimizely'] = window['optimizely'] || [];
    window['optimizely'].push({
      type: "event",
      eventName: "clickImgTiles",
      tags: {
        revenue: 0,
        value: 0.00
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

      window.$(".thumb-list img[alt$=' - Signature']").click(function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
          type: "event",
          eventName: "clickImgTiles",
          tags: {
            revenue: 0,
            value: 0.00
          }
        });
      });
    }, 1000);
  } else {
    var index = $(".thumb-list .img-click").index($(".thumb-list .img-click:last-of-type"));
    $(".thumb-list .img-click:last-of-type").addClass("view-more").append(viewMoreNumber).click(function () {
      window.$("#viewmoreComponentModal").modal("show");
    });
    setTimeout(function () {
      for (var i = 0; i < index; i++) {
        window.$(".thumb-list .img-click:nth-of-type(" + (i + 1) + ")").unbind("click");
      }

      window.$(".thumb-list img[alt$=' - Signature']").click(function () {
        window['optimizely'] = window['optimizely'] || [];
        window['optimizely'].push({
          type: "event",
          eventName: "clickImgTiles",
          tags: {
            revenue: 0,
            value: 0.00
          }
        });
      });
    }, 1000);
  }
};

var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    var $ = window.jQuery;

    try {
      $._data($("span.view-more-number").parent()[0], "events").hasOwnProperty("click");

      if (_typeof(window.$("#viewmoreComponentModal").modal("hide")) == "object") {
        clearInterval(anotherInterval);

        if (utag_data.site_type == "desktop") {
          desktop();
        } else {
          mobile();
        }
      }
    } catch (error) {}
  }
}, 50);