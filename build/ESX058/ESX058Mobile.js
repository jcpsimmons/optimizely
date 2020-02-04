window.addEventListener('load', function () {
  if (window.jQuery) {
    var constructSlider = function constructSlider(productList) {
      var productHtml = '';
      var shoppingCartHistoryWrapper;

      for (var i = 0; i < productList.length; i++) {
        productHtml += "<div ><a href=\"/".concat(productList[i], "\"><img src=\"/api/image?recId=").concat(productList[i], "&width=230&height=155\" alt=\"Recently View Product sku#").concat(productList[i], "\" class=\"img-responsive \"></a> </div>");
      }

      shoppingCartHistoryWrapper = "<section id=\"shoppingCartHistory_box\"> <section class=\"container no-padding board\"><a role=\"button\" data-toggle=\"collapse\" href=\"#shoppingCartHistory\" aria-expanded=\"true\" aria-controls=\"shoppingCartHistory\" class=\"collapse-link\">Your Shopping Cart History<span aria-hidden=\"true\" class=\"fa fa-angle-down\"></span></a> <div id=\"shoppingCartHistory\" class=\"collapse in\"> <div id=\"shoppingCartHistory_slider\" class=\"mobile-carousel-component\">".concat(productHtml, " </div> </div> </section> </section>");

      if ($('#vue-container').length > 0) {
        targetElement.before(shoppingCartHistoryWrapper);
      } else {
        targetElement.append(shoppingCartHistoryWrapper);
      }

      runSlickSlider();
    };

    var runSlickSlider = function runSlickSlider() {
      window.$('#shoppingCartHistory_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        autoplay: false
      });
    };

    var cookieRecentlyAdd = function () {
      if (window.$.cookie('lsf-cartadds')) {
        return window.$.cookie('lsf-cartadds');
      }

      return false;
    }();

    var recentlyAddCartList;

    var targetElement = function () {
      if ($('#vue-container').length > 0) {
        return $('#vue-container');
      }

      return $('body > div.page-content');
    }();

    if (cookieRecentlyAdd) {
      recentlyAddCartList = cookieRecentlyAdd.split(',');
      constructSlider(recentlyAddCartList);
    }

    $('body').on('click', '#shoppingCartHistory_slider a', function () {
      window.optimizely = window.optimizely || [];
      window.optimizely.push({
        type: 'event',
        eventName: 'shoppingCartHistory_slider_click'
      });
    });
    $('body').on('click', '#recentlyViewed a', function () {
      window.optimizely = window.optimizely || [];
      window.optimizely.push({
        type: 'event',
        eventName: 'clicked_recently_viewed'
      });
    });
  }
}, false);