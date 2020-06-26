// Add slick slider with shopping cart history items
// Hard code of ESX058
// Mobile and Desktop functions are written up top
// Execution logic at end of file

// MOBILE
function cartHistorySliderMobile() {
  var cookieRecentlyAdd = window.$.cookie("lsf-cartadds")
    ? window.$.cookie("lsf-cartadds")
    : false;

  var recentlyAddCartList;

  var targetElement =
    $("#recentlyViewed").length > 0
      ? $("#recentlyViewed")
          .parent()
          .parent()
      : $("body > div.page-content");

  // 0625 modification
  // If this is an empty /shopping-cart page set correct inject area
  var isShoppingCart = window.location.href.includes("/shopping-cart");
  if (isShoppingCart) targetElement = $(".without-results").parent();

  if (cookieRecentlyAdd) {
    recentlyAddCartList = cookieRecentlyAdd.split(",");
    var viewAllLink =
      "https://www.livingspaces.com/liked-items/cart-history?pid=" +
      recentlyAddCartList.join(",");
    var eightRecentlyAdded = recentlyAddCartList.slice(0, 8);
    constructSlider(eightRecentlyAdded, viewAllLink);
  }

  function constructSlider(productList, viewAllHref) {
    var productHtml = "",
      shoppingCartHistoryWrapper;
    for (var i = 0; i < productList.length; i++) {
      productHtml +=
        '<div ><a href="/' +
        productList[i] +
        '"><img src="/api/image?recId=' +
        productList[i] +
        '&width=230&height=155" alt="Recently View Product sku#' +
        productList[i] +
        '" class="img-responsive "></a> </div>';
    }
    shoppingCartHistoryWrapper =
      '<section id="shoppingCartHistory_box"> <section class="container no-padding board"><a role="button" data-toggle="collapse" href="#shoppingCartHistory" aria-expanded="true" aria-controls="shoppingCartHistory" class="collapse-link">Your Shopping Cart History<span aria-hidden="true" class="fa fa-angle-down"></span></a> <div id="shoppingCartHistory" class="collapse in"> <div id="shoppingCartHistory_slider" class="mobile-carousel-component">' +
      productHtml +
      ' </div><div class="carousel-links text-right"><div class="carousel-links-wrapper"><a href="' +
      viewAllHref +
      '">View all</a></div></div></div> </section> </section>';

    if (isShoppingCart) {
      targetElement.after(shoppingCartHistoryWrapper);
      document
        .querySelector("body")
        .insertAdjacentHTML(
          "afterbegin",
          "<style> #shoppingCartHistory_box > .container {padding: 0;} #shoppingCartHistory_box .slick-slide img {padding-left: 1.5rem;}</style>"
        );
    } else if ($("#recentlyViewed").length > 0) {
      targetElement.append(shoppingCartHistoryWrapper);
    } else {
      targetElement.before(shoppingCartHistoryWrapper);
    }

    runSlickSlider();
  }

  function runSlickSlider() {
    window.$("#shoppingCartHistory_slider").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: false,
      arrows: false,
      autoplay: false,
    });
  }
}

// DESKTOP
function cartHistorySliderDesktop() {
  var cookieRecentlyAdd = window.$.cookie("lsf-cartadds")
    ? window.$.cookie("lsf-cartadds")
    : false;
  var recentlyAddCartList;
  var targetElement =
    $("#recentlyViewed").length > 0
      ? $("#recently-viewed-vue-container")
      : $("body > div.page-content");

  // 0625 modification
  // If this is an empty /shopping-cart page set correct inject area
  var isShoppingCart = window.location.href.includes("/shopping-cart");
  if (isShoppingCart) targetElement = $(".without-results").parent();

  if (cookieRecentlyAdd) {
    recentlyAddCartList = cookieRecentlyAdd.split(",");
    var viewAllLink =
      "https://www.livingspaces.com/liked-items/cart-history?pid=" +
      recentlyAddCartList.join(",");
    var eightRecentlyAdded = recentlyAddCartList.slice(0, 8);
    constructSlider(eightRecentlyAdded, viewAllLink);
  }

  function constructSlider(productList, viewAllHref) {
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
      ' </div><div class="carousel-links text-right"><div class="carousel-links-wrapper"><a href="' +
      viewAllHref +
      '">View all</a></div></div></div>  </section> </section>';

    if (isShoppingCart || $("#recentlyViewed").length > 0) {
      targetElement.append(shoppingCartHistoryWrapper);
    } else {
      targetElement.before(shoppingCartHistoryWrapper);
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
      autoplay: false,
    });
  }
}

// CHECK PAGE ELIGIBILITY
var urlsToAvoid = [
  "/order-confirmation",
  "/checkout",
  "/support",
  "/changedelivery",
  "/track-delivery",
  "/tools",
  "/company",
  "/help",
];

var historyInterval = setInterval(function() {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(historyInterval);
    // If the URL contains substring from above, run the code
    if (
      !urlsToAvoid.some(function(url) {
        return window.location.href.includes(url);
      })
    ) {
      utag_data.site_type == "desktop"
        ? cartHistorySliderDesktop()
        : cartHistorySliderMobile();
    } else if (
      window.location.href.includes("/shopping-cart") &&
      document.querySelector(".without-results")
    ) {
      utag_data.site_type == "desktop"
        ? cartHistorySliderDesktop()
        : cartHistorySliderMobile();
    }
  }
}, 50);

// .carousel-component+.carousel-links .carousel-links-wrapper a
