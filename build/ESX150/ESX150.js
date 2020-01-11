function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var injectCss = function injectCss() {
  $("<style type='text/css'>.ellipsis-wrap { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%;}</style>").appendTo("head");
};

var injectSlickCss = function injectSlickCss() {
  $("#SuggestedProducts .slick-track").css('transform', 'translateX(0)');
};

var ratingGenerator = function ratingGenerator(average, count) {
  console.log('average: ', average);
  console.log('count: ', count); // If there are no reviews return no code

  if (!parseInt(average) > 0 || !parseInt(average) > 0) {
    return "";
  } // ROUND TO .5 GRAIN


  var roundedAverage = Math.ceil(average * 2) / 2;
  var fullStars = parseInt(roundedAverage); // Add full-stars

  var fullStarsHtml = new Array(10).fill(1, 0, fullStars).map(function (x) {
    return '<span class="fa fa-star" aria-hidden="true"></span>';
  }); // Add half-stars

  if (!Number.isInteger(roundedAverage)) {
    fullStarsHtml.push('<span class="fa fa-star-half-o" aria-hidden="true"></span>');
  } // Add empty-stars


  var missingStars = 5 - fullStarsHtml.length;

  if (missingStars) {
    for (i = 0; i < missingStars; i++) {
      fullStarsHtml.push('<span class="fa fa-star-o" aria-hidden="true"></span>');
    }
  }

  var html = "<div class=\"ratings\" role=\"button\">".concat(fullStarsHtml.join(""), "<span aria-label=\"total number of reviews\" class=\"number\">(").concat(count, ")</span> </div>");
  return html;
};

var buildHtml =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(userData) {
    var html, cartItems, recentlyViewed, res, data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, product;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            html = []; // UTAG DATA PARSING

            cartItems = userData.product_id;
            recentlyViewed = JSON.parse(userData["cp.lsf-recently-viewed-list"]);
            recentlyViewed = recentlyViewed.filter(function (item) {
              return !cartItems.includes(item);
            }).slice(0, 4); // API CALL

            _context.next = 6;
            return fetch("https://www.livingspaces.com/api/restfulproducts?pid=".concat(recentlyViewed.join(",")));

          case 6:
            res = _context.sent;
            _context.next = 9;
            return res.json();

          case 9:
            data = _context.sent;
            // DESKTOP
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 13;

            for (_iterator = data.products[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              product = _step.value;
              html.push("<div class=\"col-xs-3 product-element\"> <a href=\"https://www.livingspaces.com/".concat(product.pid, "\"> <img src=\"https://www.livingspaces.com/globalassets/productassets/200000-299999/250000-259999/252000-252999/252100-252199/252191/252191_natural_wood_bed_signature_01.jpg?w=263&amp;h=174&amp;mode=pad\" class=\"img-responsive\" alt=\"").concat(product.title, "\"> <span class=\"title ellipsis-wrap\">").concat(product.title, "</span> <span class=\"price\">$").concat(product.price.salePrice, "</span><div class=\"ratings\" role=\"button\">").concat(ratingGenerator(product.reviewsAvg, product.reviewsCount), "</div></a> </div>"));
            }

            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](13);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 21:
            _context.prev = 21;
            _context.prev = 22;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 24:
            _context.prev = 24;

            if (!_didIteratorError) {
              _context.next = 27;
              break;
            }

            throw _iteratorError;

          case 27:
            return _context.finish(24);

          case 28:
            return _context.finish(21);

          case 29:
            html = "<section id=\"\" class=\"container board\"> <a class=\"collapse-link\" role=\"button\" data-toggle=\"collapse\" href=\"#moreLikeThis\" aria-expanded=\"true\" aria-controls=\"moreLikeThis\"> More Like This<span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span> </a> <div class=\"collapse in\"> <div class=\"product-grid-component\"> <div class=\"row\" id=\"SuggestedProducts\"> ".concat(html.join(""), " </div> </div> </div> </section>");
            $(".cart-content").after(html); // Initialize and style slick if on mobile

            if (utag_data.site_type == 'mobile') {
              // MOBILE
              $("#SuggestedProducts").slick({
                infinite: true,
                slidesToShow: 2.5,
                slidesToScroll: 1,
                dots: false,
                arrows: false
              });
              injectSlickCss();
            }

            return _context.abrupt("return", html);

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[13, 17, 21, 29], [22,, 24, 28]]);
  }));

  return function buildHtml(_x) {
    return _ref.apply(this, arguments);
  };
}();

injectCss();
buildHtml(utag_data); //  utag_data={"site_type":"desktop","site_section":"confirmation","page_type":"confirmation","page_name":"order confirmation","product_name":["kerri 2 piece sectional w/laf chaise"],"product_type":["furniture"],"product_category":["upholstery"],"product_id":["107150"],"product_quantity":["1"],"product_price":["895.00"],"customer_city":"la habra","customer_country":"us","customer_postal_code":"90638","customer_state":"ca","customer_email":"josh.simmons@livingspaces.com","unique_id":"a02c3da7f097fc486721b1de5e808cdc28e7301a717e8681dcdbb33c92f87ad5","customer_id":"c-010407447","order_currency_code":"usd","order_grand_total":"1132.23","order_id":"004676663","order_shipping_amount":"139.00","order_subtotal":"895.00","order_tax_amount":"98.23"};