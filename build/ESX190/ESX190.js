function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ESX190 = function ESX190() {
  var state = {
    currentProduct: {
      name: utag_data.product_name[0],
      size: "",
      type: "",
      currentProduct: true,
      sku: function () {
        if (window.location.href.match(/[0-9]{5,7}$/gm)) {
          return window.location.href.match(/[0-9]{5,7}$/gm)[0];
        }

        return null;
      }()
    },
    searchWords: ["canopy 4 piece", "canopy 3 piece", "panel 4 piece", "panel 3 piece", "platform 4 piece", "platform 3 piece", "sleigh 4 piece", "sleigh 3 piece", "poster 4 piece", "poster 3 piece", "storage 4 piece", "storage 3 piece", "sleigh bed", "poster bed", "canopy bed", "platform bed", "panel bed", "storage bed", "upholstered headboard with metal", "4 piece", "3 piece"],
    alsoInThisCollection: [],
    sortingOrder: ["twin", "full", "queen", "eastern king", "california king"],
    sortedProducts: [],
    html: ""
  };

  var sortedItems = function sortedItems(r) {
    var sortedArr = [];
    state.sortingOrder.forEach(function (s) {
      var match;
      match = r.filter(function (x) {
        return x.name.toLowerCase().search(s) > -1 && x.currentProduct;
      })[0];

      if (typeof match == "undefined") {
        match = r.filter(function (x) {
          if (x.name.toLowerCase().search(s) > -1 && x.currentProduct) {
            return true;
          } else if (x.name.toLowerCase().search(s) > -1 && x.name.toLowerCase().search(state.currentProduct.type) > -1) {
            return true;
          }
        })[0];
      }

      sortedArr.push(match);
    });
    sortedArr = sortedArr.filter(function (x) {
      return x !== undefined;
    });
    return sortedArr;
  };

  state.currentProduct.type = state.searchWords.filter(function (w) {
    return state.currentProduct.name.toLowerCase().search(w) > -1;
  })[0];
  state.currentProduct.size = state.sortingOrder.filter(function (w) {
    return state.currentProduct.name.toLowerCase().search(w) > -1;
  })[0];
  state.alsoInThisCollection = _toConsumableArray(document.querySelectorAll("#thisCollection a")).map(function (el) {
    var link = el.href;

    var sku = function () {
      if (link.match(/[0-9]{5,7}$/gm)) {
        return link.match(/[0-9]{5,7}$/gm)[0];
      }

      return null;
    }();

    var price = el.querySelector(".price").textContent;
    var name = el.querySelector(".title").textContent;
    var size = state.sortingOrder.filter(function (s) {
      return name.toLowerCase().search(s) > -1;
    })[0];
    return {
      name: name,
      sku: sku,
      link: link,
      size: size,
      price: price,
      currentProduct: false
    };
  }).filter(function (item) {
    return item.name.toLowerCase().search(state.currentProduct.type) > -1;
  });
  state.sortedProducts = sortedItems([].concat(_toConsumableArray(state.alsoInThisCollection), [state.currentProduct]));
  document.querySelector("head").insertAdjacentHTML("beforeend", "\n      <style>\n        #ESX190 {\n          display: flex;\n          width: 100%;\n          justify-content: start;\n          margin-bottom: 3rem;\n          align-items: center;\n        }\n        #ESX190 * {\n          text-transform: capitalize;\n          font-size: 1.4rem;\n          font-weight: 600;\n          white-space: nowrap;\n        }\n        #ESX190 button {\n          border: 1px solid #333;\n          border-radius: 2px;\n        }\n        #ESX190 a:hover button {\n          background-color: #333;\n          color: #fff;\n        }\n        #ESX190 button {\n          background-color: #fff;\n          color: #333;\n          padding: 1rem 1.5rem;\n        }\n        #ESX190 button span, #ESX190 > span {\n          font-weight: 800;\n        }\n        #ESX190 > *:nth-child(n + 2) {\n          margin-left: 1rem;\n        }\n        #ESX190 .active-button {\n          background-color: #333;\n          color: #fff;\n          cursor: initial;\n        }\n        @media (min-width: 992px) and (max-width: 1100px) {\n          #ESX190 button {\n            padding: 1rem .5rem;\n          }\n        }\n      </style>\n    ");
  state.html = "".concat(state.sortedProducts.filter(function (i) {
    return i.sku !== state.currentProduct.sku;
  }).map(function (x) {
    var tmp = "<button><span>".concat(x.size, "</span> ").concat(x.price, "</button>");

    tmp = function () {
      if (x.currentProduct) {
        return tmp;
      }

      return "<a href=\"".concat(x.link, "\">").concat(tmp, "</a>");
    }();

    return tmp;
  }).join(""));
  state.html = "<div id=\"ESX190\"><span>View Other Sizes</span>".concat(state.html, "</div>");
  document.getElementById("price-section").insertAdjacentHTML("afterend", state.html);
};

$(document).ready(function () {
  ESX190();
});
document.addEventListener("click", function (e) {
  if (e.target.closest("#ESX190")) {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "190_cso",
      tags: {
        revenue: 0,
        value: 0.0
      }
    });
  }
});