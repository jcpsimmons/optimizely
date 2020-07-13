function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

var ESX197 = function ESX197() {
  var cartEl = document.querySelector(".cart-content");
  var priceTotal = document.querySelector(".order-summary-total").textContent;
  var cartHtml = cartEl.outerHTML;
  cartEl.parentNode.removeChild(cartEl);
  var html = '\n  <div id="ESX197">\n    <style>\n      #ESX197 {\n        margin: 2rem -15px 0;\n      }\n      #ESX197 > section > a {\n        background: #f2f2f2;\n        margin-bottom: 0;\n        padding: .5rem 2rem;\n        display: flex;\n        align-items: center;\n        font-size: 1.4rem;\n      }\n      #ESX197 .fa.fa-shopping-cart {\n        float: left!important;\n      }\n      #ESX197 .fa.fa-shopping-cart:before {\n        content: "\\f07a"!important;\n        float: left!important;\n        font-size: 2rem;\n      }\n      #ESX197 .fa.fa-angle-down,\n      #ESX197 .fa.fa-angle-down:before {\n        float: none!important;\n        font-size: 2rem;\n        margin-left: .25rem;\n      }\n      #ESX197 > section {\n        margin-bottom: 0;\n        margin-top: 1rem;\n      }\n      #ESX197 .priceTotal {\n        margin-left: auto;\n      }\n      #ESX197 .priceTotal:after {\n        content: "'
    .concat(
      priceTotal,
      '";\n        margin-left: auto;\n        font-size: 1.4rem;\n        font-weight: 600;\n      }\n      #ESX197 .cart-content {\n        margin-left: 15px;\n        margin-right: 15px;\n      }\n      #ESX197 .form-title {\n        margin-top: 0;\n      }\n    </style>\n    <section class="container board">\n      <a\n        class="collapse-link collapsed"\n        role="button"\n        data-toggle="collapse"\n        href="#ESX197ProductsArea"\n        aria-expanded="false"\n        aria-controls="ESX197ProductsArea"\n      >\n        <span style="margin-right:1rem;" class="fa fa-shopping-cart" aria-hidden="true"></span>\n        Show Order Summary\n        <span class="fa fa-angle-down" aria-hidden="true"></span>\n        <span class="priceTotal"></span>\n      </a>\n      <div class="collapse cart-component container" id="ESX197ProductsArea">\n        '
    )
    .concat(cartHtml, "\n      </div>\n    </section>\n  </div>\n");
  document.querySelector(".wizard").insertAdjacentHTML("afterend", html);
  var dateText = document.querySelector("#ESX197 .date");
  dateText.textContent = dateText.textContent.split("(")[0];

  var adjustAccordionText = function adjustAccordionText() {
    var accEl = document.querySelector("#ESX197 > section > a.collapse-link");
    var cartIcon =
      '<span style="margin-right:1rem;" class="fa fa-shopping-cart" aria-hidden="true"></span>';
    var arrow = '<span class="fa fa-angle-down" aria-hidden="true"></span>';
    var priceSpan = '<span class="priceTotal"></span>';

    if (accEl.classList.contains("collapsed")) {
      accEl.innerHTML = cartIcon + "Show Order Summary" + arrow + priceSpan;
    } else {
      accEl.innerHTML = cartIcon + "Hide Order Summary" + arrow + priceSpan;
    }
  };

  var checkStepVisibility = function checkStepVisibility() {
    var stepNumber =
      _toConsumableArray(document.querySelectorAll("#checkoutVue > li"))
        .map(function(el) {
          return el.classList.contains("active");
        })
        .indexOf(true) + 1;

    if (stepNumber === 1) {
      document.getElementById("ESX197").style.display = "none";
    } else {
      document.getElementById("ESX197").style.display = "block";
    }
  };

  checkStepVisibility();
  document.addEventListener("click", function(e) {
    checkStepVisibility();

    if (e.target.closest("#ESX197")) {
      adjustAccordionText();
    }
  });
};

if (document.readyState === "complete") {
  ESX197();
} else {
  document.addEventListener("DOMContentLoaded", ESX197);
}
