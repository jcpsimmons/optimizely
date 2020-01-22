const mobile = () => {
  // turn off slick slider
  $("#imgSlider").slick("unslick");

  // rearrange images
  let lifestyleImages = $(`.product-info-component img[alt$=" - Room"]`)
    .parent()
    .parent()
    .detach();

  $(`.product-info-component img[alt$=" - Signature"]`)
    .parent()
    .parent()
    .after(lifestyleImages);

  // reenable slick slider
  $("#imgSlider").slick({
    dots: true,
    arrows: false
  });
};

const desktop = () => {
  console.log("fire desktop variation");
  // detach view more overlay
  let viewMoreNumber = $("span.view-more-number").detach();
  // remove viewmore class
  $(".product-info-component .view-more").removeClass("view-more");

  selectorPrefixes = [
    "#viewmoreComponentModal",
    ".product-info-component  div.img-click"
  ];

  for (var i = 0; i < selectorPrefixes.length; i++) {
    $(`${selectorPrefixes[i]} img[alt$=" - Room"]`)
      .parent()
      .each(function() {
        var x = $(this)
          .detach()
          .off("click");

        $(`${selectorPrefixes[i]} img[alt$=" - Signature"]`)
          .first()
          .parent()
          .after(x);
      });
  }

  if ($(".thumb-list .img-click").length > 7) {
    $(".thumb-list .img-click:nth-of-type(7)")
      .addClass("view-more")
      .append(viewMoreNumber)
      .click(function() {
        window.$("#viewmoreComponentModal").modal("show");
      });
  } else {
    $(".thumb-list .img-click:last-of-type")
      .addClass("view-more")
      .append(viewMoreNumber)
      .click(function() {
        window.$("#viewmoreComponentModal").modal("show");
      });
  }
};

var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== "undefined") {
    var $ = window.jQuery;
    try {
      $._data($("span.view-more-number").parent()[0], "events").hasOwnProperty(
        "click"
      );
      if (
        typeof window.$("#viewmoreComponentModal").modal("hide") == "object"
      ) {
        clearInterval(anotherInterval);
        console.log("object");
        if (utag_data.site_type == "desktop") {
          desktop();
        } else {
          mobile();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}, 50);
