function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ESX192 = function ESX192($) {
  var ORDER_SUBMITTED = false;
  var MODAL_IS_VISIBLE = false;
  var FORM_COMPLETE = false;
  var AMEX = false;

  var FIELD_IDS_TO_CHECK = function FIELD_IDS_TO_CHECK() {
    return ["credit-card-type", "credit-card", "exp-month", "exp-year", "".concat(function () {
      if (AMEX) {
        return "amexccv";
      }

      return "ccv";
    }()), "accept-terms"];
  };

  document.getElementById("placeOrderBtn").innerText = "Review Order";
  document.querySelector("body").insertAdjacentHTML("beforeend", "\n      <style>\n        #ESX192Modal {\n          text-align: center;\n        }\n        #ESX192Modal .modal-footer {\n          text-align: center;\n        }\n        #ESX192_PlaceOrderButton {\n          background: #bd5519;\n          border-color: #bd5519;\n          margin-left: 3rem;\n        }\n        #ESX192_EditOrderButton {\n          background: #686868;\n          border-color: #686868;\n        }\n      </style>\n      <div id=\"ESX192Modal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\">Review Order</h5>\n              <button\n                id=\"ESX192_CloseModalButton\"\n                type=\"button\"\n                class=\"close\"\n                data-dismiss=\"modal\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\"></div>\n            <div class=\"modal-footer\">\n                <button\n                  id=\"ESX192_EditOrderButton\"\n                  type=\"button\"\n                  class=\"btn btn-primary\"\n                >\n                  Edit Order\n                </button>\n              <button\n                id=\"ESX192_PlaceOrderButton\"\n                type=\"button\"\n                class=\"btn btn-primary\"\n              >\n                Place Order\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    ");

  var insertModalBody = function insertModalBody() {
    var shipAndDeliverCount = 0;

    var shippingInfo = _toConsumableArray(document.querySelectorAll("#step3 .cart-component .content-header.main-header")).map(function (el) {
      data = {};
      var titleText = el.querySelector(".title").innerText.toLowerCase();

      if (titleText.includes("pickup")) {
        data.location = "Pickup Store: ".concat(el.querySelector(".title").textContent.split("at ")[1].trim());
        data.window = "Pickup Window:\n        ".concat(el.querySelector(".date").textContent.split("(")[0].trim());
      } else if (titleText.includes("shipped")) {
        shipAndDeliverCount++;

        data.location = function () {
          if (shipAndDeliverCount < 2) {
            return "UPS Shipping Address: ".concat(document.getElementById("shipping-address1").value, "\n        ").concat(function () {
              if (document.getElementById("shipping-address2") === "") {
                return "";
              }

              return document.getElementById("shipping-address2").value;
            }(), "\n        ").concat(document.getElementById("shipping-city").value, ",\n        ").concat(document.getElementById("shipping-state").value, "\n        ").concat(document.getElementById("shipping-zip").value);
          }

          return "";
        }();

        data.window = "UPS Shipping Window: ".concat(el.querySelector(".date").textContent.split("(")[0].trim());
      } else if (titleText.includes("delivered")) {
        shipAndDeliverCount++;

        data.location = function () {
          if (shipAndDeliverCount < 2) {
            return "Delivery Address: ".concat(document.getElementById("shipping-address1").value, "\n        ").concat(function () {
              if (document.getElementById("shipping-address2") === "") {
                return "";
              }

              return document.getElementById("shipping-address2").value;
            }(), "\n        ").concat(document.getElementById("shipping-city").value, ",\n        ").concat(document.getElementById("shipping-state").value, "\n        ").concat(document.getElementById("shipping-zip").value);
          }

          return "";
        }();

        data.window = "Delivery Window: ".concat(el.querySelector(".date").textContent.split("(")[0].trim());
      }

      return data;
    }).map(function (item) {
      return "".concat(function () {
        if (item.location !== "") {
          return "<p>".concat(item.location, "</p>");
        }

        return "";
      }(), "<p>").concat(item.window, "</p>");
    }).join("");

    document.querySelector("#ESX192Modal .modal-body").innerHTML = shippingInfo;
  };

  var checkFormComplete = function checkFormComplete() {
    if (document.getElementById("credit-card-type").value === "Living Spaces Credit Card") {
      if (document.getElementById("synchrony-card").value !== "" && document.getElementById("accept-terms").checked) {
        return true;
      } else {
        return false;
      }
    }

    FORM_COMPLETE = FIELD_IDS_TO_CHECK().map(function (field) {
      var el = document.getElementById(field);

      if (el.id !== "accept-terms" && el.value === "" || el.id === "accept-terms" && !el.checked) {
        return false;
      } else {
        return true;
      }
    }).every(function (item) {
      return item === true;
    });
    return FORM_COMPLETE;
  };

  $("#ESX192Modal").on("hide.bs.modal", function () {
    MODAL_IS_VISIBLE = false;
  });
  $("#ESX192Modal").on("show.bs.modal", function () {
    MODAL_IS_VISIBLE = true;
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "192_SMUSM"
    });
  });

  var submitOrder = function submitOrder() {
    ORDER_SUBMITTED = true;
    $("#ESX192Modal").modal("hide");
    document.getElementById("placeOrderBtn").click();
  };

  var showModal = function showModal() {
    $("#ESX192Modal").modal("show");
  };

  var closeModal = function closeModal() {
    $("#ESX192Modal").modal("hide");
  };

  var checkErrors = function checkErrors() {
    var errors = false;

    _toConsumableArray(document.querySelectorAll("#step3 .validation-error")).forEach(function (el) {
      if (el.style.display !== "none") {
        errors = true;
      }
    });

    return errors;
  };

  var checkAddErrors = function checkAddErrors() {
    var fieldInvalid = false;

    if (document.getElementById("credit-card-type").value === "Living Spaces Credit Card") {
      if (document.getElementById("synchrony-card").value === "") {
        fieldInvalid = true;
        var parent = document.getElementById("synchrony-card").parentElement;
        parent.classList.add("error");
        parent.querySelector(".validation-error").style.display = "block";
      }

      if (document.getElementById("accept-terms").checked === false) {
        fieldInvalid = true;
        document.getElementById("accept-terms").parentElement.querySelector(".validation-error").style.display = "block";
      }

      return fieldInvalid;
    }

    FIELD_IDS_TO_CHECK().forEach(function (field) {
      var el = document.getElementById(field);

      if (el.id !== "accept-terms" && el.value === "" || el.id === "accept-terms" && !el.checked) {
        fieldInvalid = true;

        if (field === "credit-card-type") {
          el.parentElement.parentElement.classList.add("error");
          el.parentElement.parentElement.querySelector("span.validation-error").style.display = "block";
        } else if (field === "accept-terms") {
          el.parentElement.querySelector(".validation-error").style.display = "block";
        } else {
          el.parentElement.classList.add("error");
          el.parentElement.querySelector("span.validation-error").style.display = "block";
        }
      }
    });
    return fieldInvalid;
  };

  var clearErrors = function clearErrors() {
    FIELD_IDS_TO_CHECK().forEach(function (field) {
      var el = document.getElementById(field);

      if (field === "credit-card-type") {
        el.parentElement.parentElement.classList.remove("error");
        el.parentElement.parentElement.querySelector("span.validation-error").style.display = "none";
      } else if (field === "accept-terms") {
        el.parentElement.querySelector(".validation-error").style.display = "none";
      } else {
        el.parentElement.classList.remove("error");
        el.parentElement.querySelector("span.validation-error").style.display = "none";
      }
    });
  };

  var errorWithCard = function errorWithCard() {
    return document.getElementById("paymentError").textContent.toLowerCase().includes("error processing card");
  };

  var goToStepTwo = function goToStepTwo() {
    document.getElementById("step2Tab").click();
  };

  document.addEventListener("click", function (e) {
    if (e.target.id == "placeOrderBtn" && !MODAL_IS_VISIBLE && !ORDER_SUBMITTED || e.target.id == "placeOrderBtn" && !MODAL_IS_VISIBLE && ORDER_SUBMITTED && document.getElementById("paymentError").style.display !== "none") {
      if (!checkFormComplete() || errorWithCard()) {
        return true;
      } else if (checkErrors()) {
        e.preventDefault();
      } else {
        e.preventDefault();
        clearErrors();
        var fieldInvalid = checkAddErrors();

        if (!fieldInvalid) {
          clearErrors();
          insertModalBody();
          showModal();
        }
      }
    } else if (e.target.id === "ESX192_PlaceOrderButton") {
      submitOrder();
    } else if (e.target.id === "ESX192_CloseModalButton") {
      closeModal();
    } else if (e.target.id === "ESX192_EditOrderButton") {
      closeModal();
      goToStepTwo();
    }
  });
  document.addEventListener("change", function (e) {
    if (e.target.id === "credit-card-type") {
      AMEX = e.target.value === "Amex";
    }
  });
};

var ESX192WaitLoop = function ESX192WaitLoop() {
  var wait = setInterval(function () {
    if (typeof window.jQuery !== "undefined") {
      clearInterval(wait);
      var $ = window.jQuery;
      ESX192($);
    }
  }, 50);
};

if (document.readyState === "complete") {
  ESX192WaitLoop();
} else {
  document.addEventListener("DOMContentLoaded", ESX192WaitLoop);
}