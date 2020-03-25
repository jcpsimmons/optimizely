"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function cartAdds() {
  return _cartAdds.apply(this, arguments);
}

function _cartAdds() {
  _cartAdds = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var numItemsInCart, cartSkus, cartItemData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            numItemsInCart = document.querySelector(".counter.cart").textContent.trim();

            if (numItemsInCart) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", false);

          case 3:
            cartSkus = utag_data["cp.lsf-cartadds"];
            _context.next = 6;
            return fetch("https://www.livingspaces.com/api/restfulproducts?pid=".concat(cartSkus));

          case 6:
            cartItemData = _context.sent;
            _context.next = 9;
            return cartItemData.json();

          case 9:
            cartItemData = _context.sent;
            insertHtml = cartItemData.products.map(function (item) {
              return "<div style=\"display:inline-block;margin: 0 2rem\"><a href=\"/".concat(item.pid, "\"><img class=\"img-responsive\" style=\"width:100px;height:auto;\" src=\"").concat(item.images[0].imageUrl, "\"/><p>").concat(item.title, "</p><p>$").concat(item.price.salePrice, "</p></a></div>");
            }).join("");
            insertHtml = "<div id=\"ItemsInCart\" class=\"text-center\"><h2>Recently Added to Cart</h2>".concat(function () {
              if (numItemsInCart > 0) {
                return "<h3>There are ".concat(numItemsInCart, " items in your cart</h3>");
              }

              return "";
            }()).concat(insertHtml, "</div>");
            document.getElementById("ls_hero_event").parentElement.insertAdjacentHTML("afterend", insertHtml);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _cartAdds.apply(this, arguments);
}

cartAdds();
