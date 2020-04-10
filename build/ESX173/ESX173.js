function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var state = {
  currentProduct: {
    name: utag_data.product_name[0],
    size: "",
    type: "",
    currentProduct: true
  },
  searchWords: ["platform", "panel", "4 piece", "3 piece"],
  alsoInThisCollection: [],
  sortingOrder: ["queen", "eastern king", "california king"],
  sortedProducts: [],
  html: ""
};

var sortedItems = function sortedItems(r) {
  var sortedArr = [];
  state.sortingOrder.forEach(function (s) {
    var match = r.filter(function (x) {
      return x.name.toLowerCase().search(s) > -1;
    })[0];
    sortedArr.push(match);
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
  var name = el.querySelector(".title").textContent;
  var size = state.sortingOrder.filter(function (s) {
    return name.toLowerCase().search(s) > -1;
  })[0];
  return {
    name: name,
    link: link,
    size: size,
    currentProduct: false
  };
}).filter(function (item) {
  return item.name.toLowerCase().search(state.currentProduct.type) > -1;
});
state.sortedProducts = sortedItems([].concat(_toConsumableArray(state.alsoInThisCollection), [state.currentProduct]));
document.querySelector("head").insertAdjacentHTML("beforeend", "\n<style> #ESX173 { display: flex; width: 100%; justify-content: start; margin-bottom: 1rem; } #ESX173 * { text-transform: capitalize; font-size: 1.4rem; font-weight: 600; white-space: nowrap; } #ESX173 *:not(a) { border: 2px solid #323232; transition: 0.3s; } #ESX173 a:hover button { background-color: #d4d4d4; } #ESX173 button { background-color: #fff; color: #323232; padding: 1rem 1.5rem; } #ESX173 > *:nth-child(n + 2) { margin-left: 1rem; } #ESX173 .active-button { background-color: #323232; color: #fff; cursor: initial; } /* other page style tweaks */ #price-section { margin-bottom: 1rem !important; } </style>\n");
state.html = "<div id=\"ESX173\">".concat(state.sortedProducts.map(function (x) {
  var tmp = "<button class=".concat(function () {
    if (x.currentProduct) {
      return "active-button";
    }

    return "";
  }(), ">").concat(x.size, "</button>");

  tmp = function () {
    if (x.currentProduct) {
      return tmp;
    }

    return "<a href=\"".concat(x.link, "\">").concat(tmp, "</a>");
  }();

  return tmp;
}).join(""), "</div>");
document.getElementById("price-section").insertAdjacentHTML("afterend", state.html);
document.getElementById("ESX173").addEventListener("click", function () {
  window["optimizely"] = window["optimizely"] || [];
  window["optimizely"].push({
    type: "event",
    eventName: "clickSizeOpts"
  });
});