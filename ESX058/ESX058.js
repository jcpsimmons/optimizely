window.addEventListener(
  "load",
  function() {
    if (window.jQuery) {
      var cookieRecentlyAdd = window.$.cookie("lsf-cartadds")
        ? window.$.cookie("lsf-cartadds")
        : false;
      var recentlyAddCartList;
      var targetElement =
        $("#vue-container").length > 0
          ? $("#vue-container")
          : $("body > div.page-content");

      if (cookieRecentlyAdd) {
        recentlyAddCartList = cookieRecentlyAdd.split(",");
        constructSlider(recentlyAddCartList);
      }

      function constructSlider(productList) {
        var productHtml = "",
          shoppingCartHistoryWrapper;
        for (var i = 0; i < productList.length; i++) {
          productHtml +=
            '<div class="col-xs-3"><a href="/' +
            productList[i] +
            '" class="product-linked-image"><img src="/api/image?recId=' +
            productList[i] +
            '&width=230&height=155" alt="Recently View Product sku#' +
            productList[i] +
            '" class="img-responsive "></a> </div>';
        }
        shoppingCartHistoryWrapper =
          '<section id="shoppingCartHistory_box"> <section class="container no-padding board"><a role="button" data-toggle="collapse" href="#shoppingCartHistory" aria-expanded="true" aria-controls="shoppingCartHistory" class="collapse-link">Your Shopping Cart History<span aria-hidden="true" class="fa fa-angle-down"></span></a> <div id="shoppingCartHistory" class="collapse in"> <div id="shoppingCartHistory_slider" class="row carousel-component">' +
          productHtml +
          " </div> </div> </section> </section>";

        if ($("#vue-container").length > 0) {
          targetElement.before(shoppingCartHistoryWrapper);
        } else {
          targetElement.append(shoppingCartHistoryWrapper);
        }
        runSlickSlider();
      }

      function runSlickSlider() {
        window.$("#shoppingCartHistory_slider").slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
          arrows: true,
          autoplay: false
        });
      }

      $("body").on("click", "#shoppingCartHistory_slider a", function() {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "shoppingCartHistory_slider_click"
        });
      });
      $("body").on("click", "#recentlyViewed a", function() {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "clicked_recently_viewed"
        });
      });
    }
  },
  false
);
