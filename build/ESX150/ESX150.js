import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";

var injectCss = function injectCss() {
  $("<style type='text/css'> .ellipsis-wrap { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; } #SuggestedProducts .cart-component .container { padding-left: 0; padding-left: 0; } @media(max-width:767px) { #SuggestedProducts .product-grid-component { margin-left: -15px } .slick-list { margin-left: 0 } } </style>").appendTo("head");
};

var ratingGenerator = function ratingGenerator(average, count) {
  if (!parseInt(average) > 0 || !parseInt(average) > 0) {
    return "";
  }

  var roundedAverage = Math.ceil(average * 2) / 2;
  var fullStars = parseInt(roundedAverage);
  var fullStarsHtml = new Array(10).fill(1, 0, fullStars).map(function (throwawayVar) {
    return '<span class="fa fa-star" aria-hidden="true"></span>';
  });

  if (!Number.isInteger(roundedAverage)) {
    fullStarsHtml.push('<span class="fa fa-star-half-o" aria-hidden="true"></span>');
  }

  var missingStars = 5 - fullStarsHtml.length;

  if (missingStars) {
    for (i = 0; i < missingStars; i++) {
      fullStarsHtml.push('<span class="fa fa-star-o" aria-hidden="true"></span>');
    }
  }

  var html = "<div class=\"ratings\" role=\"button\">".concat(fullStarsHtml.join(""), "<span aria-label=\"total number of reviews\" class=\"number\">(").concat(count, ")</span> </div>");
  return html;
};

var buildHtml = function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(userData, cssSelector) {
    var html, cartItems, recentlyViewed, res, data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, product, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _product;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            html = [];
            cartItems = userData.product_id;
            recentlyViewed = JSON.parse(userData["cp.lsf-recently-viewed-list"]);
            recentlyViewed = recentlyViewed.slice(0, 4);

            if (!(recentlyViewed.length == 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", false);

          case 6:
            _context.next = 8;
            return fetch("https://www.livingspaces.com/api/restfulproducts?pid=".concat(recentlyViewed.join(",")));

          case 8:
            res = _context.sent;
            _context.next = 11;
            return res.json();

          case 11:
            data = _context.sent;

            if (!(utag_data.site_type == "desktop")) {
              _context.next = 36;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 16;

            for (_iterator = data.products[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              product = _step.value;
              html.push("<div class=\"col-xs-3 product-element\"> <a href=\"https://www.livingspaces.com/".concat(product.pid, "\" target=\"_blank\"> <img src=\"").concat(product.images[0].imageUrl, "?w=263&amp;h=174&amp;mode=pad\" class=\"img-responsive\" alt=\"").concat(product.title, "\"> <span class=\"title ellipsis-wrap\">").concat(product.title, "</span> <span class=\"price\">$").concat(product.price.salePrice, "</span><div class=\"ratings\" role=\"button\">").concat(ratingGenerator(product.reviewsAvg, product.reviewsCount), "</div></a> </div>"));
            }

            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](16);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 24:
            _context.prev = 24;
            _context.prev = 25;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 27:
            _context.prev = 27;

            if (!_didIteratorError) {
              _context.next = 30;
              break;
            }

            throw _iteratorError;

          case 30:
            return _context.finish(27);

          case 31:
            return _context.finish(24);

          case 32:
            html = "<section id=\"PeopleWhoBoughtWrapper\" class=\"container board\"> <a class=\"collapse-link\" role=\"button\" data-toggle=\"collapse\" href=\"#SuggestedProducts\" aria-expanded=\"true\" aria-controls=\"SuggestedProducts\">People Who Bought This Also Bought</a> <div class=\"collapse in\"> <div class=\"product-grid-component\"> <div class=\"row\" id=\"SuggestedProducts\"> ".concat(html.join(""), " </div> </div> </div> </section>");
            $(cssSelector).before(html);
            _context.next = 58;
            break;

          case 36:
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 39;

            for (_iterator2 = data.products[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _product = _step2.value;
              html.push("<div class=\"product-element\"> <a href=\"https://www.livingspaces.com/".concat(_product.pid, "\"> <img src=\"").concat(_product.images[0].imageUrl, "?w=151&amp;h=100&amp;mode=pad\" class=\"img-responsive lazy \" alt=\"").concat(_product.title, "\"> <span class=\"title\">").concat(_product.title, "</span> <span class=\"price\">$").concat(_product.price.salePrice, "</span> <div class=\"ratings\" role=\"button\">").concat(ratingGenerator(_product.reviewsAvg, _product.reviewsCount), "</div> </a> </div>"));
            }

            _context.next = 47;
            break;

          case 43:
            _context.prev = 43;
            _context.t1 = _context["catch"](39);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 47:
            _context.prev = 47;
            _context.prev = 48;

            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }

          case 50:
            _context.prev = 50;

            if (!_didIteratorError2) {
              _context.next = 53;
              break;
            }

            throw _iteratorError2;

          case 53:
            return _context.finish(50);

          case 54:
            return _context.finish(47);

          case 55:
            html = "<section class=\"board\"> <a class=\"collapse-link\" role=\"button\" data-toggle=\"collapse\" href=\"#SuggestedProducts\" aria-expanded=\"true\" aria-controls=\"SuggestedProducts\" style=\" font-size: 2.1rem; \">People Who Bought This Also Bought</a> <div class=\"collapse in\" id=\"SuggestedProducts\"> <div class=\"product-grid-component\"> <div class=\"mobile-carousel-component\"> ".concat(html.join(""), "</div> </div> </div> </section>");
            $(cssSelector).before(html);
            $("#SuggestedProducts .mobile-carousel-component").slick({
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            });

          case 58:
            return _context.abrupt("return", true);

          case 59:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[16, 20, 24, 32], [25,, 27, 31], [39, 43, 47, 55], [48,, 50, 54]]);
  }));

  return function buildHtml(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    injectCss();
    buildHtml(utag_data, ".pl-container");
  }
}, 50);