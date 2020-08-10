function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ESX197 = function ESX197() {
  var cartEl = document.querySelector(".cart-content");
  var priceTotal = document.querySelector(".order-summary-total").textContent;
  var cartHtml = cartEl.outerHTML;
  cartEl.parentNode.removeChild(cartEl);

  var titleCaseItems = function titleCaseItems() {
    var upperCaseWord = function upperCaseWord(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    _toConsumableArray(document.querySelectorAll("#ESX197 .item > p")).forEach(function (el) {
      var curText = el.textContent;
      el.textContent = curText.toLowerCase().split("-").map(upperCaseWord).join("-").split(" ").map(upperCaseWord).join(" ");
    });
  };

  var repositionDeliveryHeader = function repositionDeliveryHeader() {
    deliveryHeader = _toConsumableArray(document.querySelectorAll("#ESX197 .content-header.main-header")).filter(function (el) {
      return el.querySelector(".header-info > p").textContent.search("Delivery Time") !== -1 || el.querySelector(".header-info > p").textContent.search("Pickup Time") !== -1;
    });
    if (!deliveryHeader.length) return false;
    deliveryHeader = deliveryHeader[0];
    deliveryHeader.classList.add("repositionDeliveryText");
    var date = deliveryHeader.querySelector(".header-info .date");
    var dateHtml = date.outerHTML;
    date.parentNode.removeChild(date);
    deliveryHeader.querySelector(".header-info").insertAdjacentHTML("beforeend", dateHtml);
  };

  var html = "\n  <div id=\"ESX197\">\n    <style>\n      #ESX197 {\n        margin: 2rem -15px 0;\n      }\n      #ESX197 > section > a {\n        background: #f2f2f2;\n        margin-bottom: 0;\n        padding: .5rem 2rem;\n        display: flex;\n        align-items: center;\n        font-size: 1.4rem;\n        border-bottom: none!important;\n        border-top: 1px solid #b5b5b5;\n      }\n      #ESX197 .fa.fa-shopping-cart {\n        float: left!important;\n      }\n      #ESX197 .fa.fa-shopping-cart:before {\n        content: \"\\f07a\"!important;\n        float: left!important;\n        font-size: 2rem;\n      }\n      #ESX197 .fa.fa-angle-down,\n      #ESX197 .fa.fa-angle-down:before {\n        float: none!important;\n        font-size: 2rem;\n        margin-left: .25rem;\n      }\n      #ESX197 > section {\n        margin-bottom: 0;\n        margin-top: 1rem;\n      }\n      #ESX197 .priceTotal {\n        margin-left: auto;\n      }\n      #ESX197 .priceTotal:after {\n        content: \"".concat(priceTotal, "\";\n        margin-left: auto;\n        font-size: 1.4rem;\n        font-weight: 600;\n      }\n      #ESX197 .cart-content {\n        margin-left: 15px;\n        margin-right: 15px;\n        overflow: visible;\n      }\n      #ESX197 .main-header {\n        margin-left: -15px;\n        margin-right: -15px;\n      }\n      #ESX197 .form-title {\n        margin-top: 0;\n      }\n      #ESX197ProductsArea {\n        border-bottom: 1px solid #b5b5b5;\n      }\n      #ESX197 .repositionDeliveryText {\n        display: flex;\n        flex-direction: column;\n      }\n      #ESX197 .repositionDeliveryText .header-info {\n        display: flex;\n      }\n      #ESX197 .repositionDeliveryText .header-info p {\n        margin-right: .5rem;\n      }\n    </style>\n    <section class=\"container board\">\n      <a\n        class=\"collapse-link collapsed\"\n        role=\"button\"\n        data-toggle=\"collapse\"\n        href=\"#ESX197ProductsArea\"\n        aria-expanded=\"false\"\n        aria-controls=\"ESX197ProductsArea\"\n      >\n        <span style=\"margin-right:1rem;\" class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></span>\n        Show Order Summary\n        <span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span>\n        <span class=\"priceTotal\"></span>\n      </a>\n      <div class=\"collapse cart-component container\" id=\"ESX197ProductsArea\">\n        ").concat(cartHtml, "\n      </div>\n    </section>\n  </div>\n");
  document.querySelector(".wizard").insertAdjacentHTML("afterend", html);
  titleCaseItems();
  repositionDeliveryHeader();
  var dateText = document.querySelector("#ESX197 .date");
  dateText.textContent = dateText.textContent.split("(")[0];

  var adjustAccordionText = function adjustAccordionText() {
    var accEl = document.querySelector("#ESX197 > section > a.collapse-link");
    var cartIcon = "<span style=\"margin-right:1rem;\" class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></span>";
    var arrow = "<span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span>";
    var priceSpan = "<span class=\"priceTotal\"></span>";
    var overflowContainer = document.querySelector("#ESX197 .cart-content");

    if (accEl.classList.contains("collapsed")) {
      accEl.innerHTML = cartIcon + "Show Order Summary" + arrow + priceSpan;
      overflowContainer.style.overflow = "hidden";
    } else {
      accEl.innerHTML = cartIcon + "Hide Order Summary" + arrow + priceSpan;
      overflowContainer.style.overflow = "visible";
    }
  };

  var checkStepVisibility = function checkStepVisibility() {
    var stepNumber = _toConsumableArray(document.querySelectorAll("#checkoutVue > li")).map(function (el) {
      return el.classList.contains("active");
    }).indexOf(true) + 1;

    if (stepNumber === 1) {
      document.getElementById("ESX197").style.display = "none";
    } else {
      document.getElementById("ESX197").style.display = "block";
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "197_USMPL"
      });
    }
  };

  checkStepVisibility();
  document.addEventListener("click", function (e) {
    checkStepVisibility();

    if (e.target.closest("#ESX197")) {
      adjustAccordionText();
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "197_CPLAM"
      });
    }
  });
};

if (!!document.querySelector(".cart-content")) {
  ESX197();
} else {
  var waitLoop = setInterval(function () {
    if (!!document.querySelector(".cart-content")) {
      clearInterval(waitLoop);
      ESX197();
    }
  }, 1000);
}