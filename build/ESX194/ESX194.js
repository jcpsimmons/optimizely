function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ESX194 = function ESX194() {
  var style = "\n  <style>\n    #step2 .price-total-table,\n    #step3 .price-total-table {\n      padding: 0 0.5rem 2rem;\n    }\n    #step2 .price-total-table .form-title.form-title-order-summary,\n    #step3 .price-total-table .form-title.form-title-order-summary,\n    #shipBillSummary {\n      margin-left: 3rem;\n      margin-right: 3rem;\n    }\n    #step3 .price-total-table .price-table {\n      margin: auto!important;\n    }\n    #step3 .price-total-table .form-title {\n      margin-left: 3rem;\n      margin-top: 1rem;\n    }\n    #step3 .form-group-holder{\n      width: 110%;\n    }\n    .checkout-component .price-total-table .price-table {\n      width: calc(100% - 6rem)!important;\n    }\n    .ESX194 {\n      margin-top: 3rem;\n    }\n    .ESX194 h3,\n    .ESX194 .item p {\n      font-size: 1.8rem!important;\n    }\n    .ESX194 .item p {\n      font-weight: normal!important;\n    }\n    .ESX194 .item .id-no {\n      display: inline;\n    }\n    .ESX194 .header-info {\n      margin-top: 0.5rem;\n      text-align: left!important;\n    }\n    .ESX194 .header-info .date {\n      display: inline!important;\n    }\n    .ESX194 .product-card {\n      border: none;\n      padding-left: 0;\n      padding-right: 0;\n      padding-bottom: 0;\n    }\n    .ESX194 .product-card .card-side img {\n      width: 9rem;\n    }\n    .ESX194 .cart-component .content-header {\n      margin-left: -0.5rem;\n      margin-right: -0.5rem;\n    }\n    .ESX194 .cart-component .main-header {\n      display: block;\n    }\n    .ESX194 .form-title,\n    #step3 .col-xs-7.cart-component,\n    .ESX194 .recycle-info,\n    .ESX194 .shipping-info {\n      display: none!important;\n    }\n    .ESX194 .form-title {\n      margin-left: 1rem;\n    }\n    .ESX194 .price {\n      display: inline-block;\n      margin-left: 3rem;\n    }\n    .ESX194 .price p {\n      font-size: 16px;\n    }\n    .ESX194 .cart-component .item-description {\n      padding-right: .25rem;\n    }\n    .cart-component .item-description .item-and-price {\n      display: block;\n    }\n\n    #step2 .col-xs-7 > form > *,\n    #delivery-instructions {\n      max-width: 100%;\n    }\n  </style>\n";
  document.querySelector("head").insertAdjacentHTML("beforeend", style);
  var sourceEl = document.querySelector("#step2 .col-xs-7.cart-component");
  sourceEl.classList.remove("col-xs-7");
  var sourceHtml = sourceEl.outerHTML;
  sourceEl.parentNode.removeChild(sourceEl);
  sourceHtml = "<div class=\"ESX194\">".concat(sourceHtml, "</div>");
  sourceEl.querySelector(".form-title").style.display = "none";
  document.getElementById("shipBillSummary").insertAdjacentHTML("afterend", sourceHtml);
  document.querySelector("#step3 .price-total-table .price-table").insertAdjacentHTML("afterend", sourceHtml);

  _toConsumableArray(document.querySelectorAll(".ESX194 .price")).forEach(function (el) {
    var insertTarget = el.parentNode.querySelector(".item .id-no");
    var html = el.outerHTML;
    el.parentNode.removeChild(el);
    insertTarget.insertAdjacentHTML("afterend", html);
  });

  _toConsumableArray(document.querySelectorAll(".ESX194 .product-card .item p")).forEach(function (el) {
    var text = el.textContent.toLowerCase();
    var titleText = text.split(" ").map(function (word) {
      return "".concat(word.charAt(0).toUpperCase()).concat(word.slice(1));
    }).join(" ");
    el.textContent = titleText;
  });

  ["#step2", "#step3"].forEach(function (sel) {
    document.querySelector("".concat(sel, " .col-xs-4")).className = document.querySelector("".concat(sel, " .col-xs-4")).className.replace("4", "5");
    document.querySelector("".concat(sel, " .col-xs-8")).className = document.querySelector("".concat(sel, " .col-xs-8")).className.replace("8", "7");
  });
};

if (document.readyState === "complete") {
  ESX194();
} else {
  document.addEventListener("DOMContentLoaded", ESX194);
}