var MODAL_IN_VIEW = false;
var MANUAL_TAB_INDEX = 0;
var MANUAL_TAB_ITEMS;
var SCROLL = window.pageYOffset;

var IE = function () {
  if (window.document.documentMode) {
    return true;
  }

  return false;
}();

document.addEventListener("scroll", function () {
  SCROLL = window.pageYOffset;
});

function scrollLock(bool) {
  var $ = window.jQuery;

  if (!document.getElementById("ESX180ScrollLock") && bool) {
    document.querySelector("head").insertAdjacentHTML("beforeend", "\n        <style id=\"ESX180ScrollLock\">\n          body {\n            margin: 0 !important;\n            height: 100% !important;\n            overflow: hidden !important;\n          }\n          #ESX180ScrollOverlay {\n            background: black;\n            height: 100vh;\n            width: 100vw;\n            position: absolute;\n            top: ".concat(SCROLL, "px;\n            left: 0;\n            overflow: hidden;\n            z-index: 98;\n            opacity: 0.7;\n          }\n        </style>\n      "));
    document.querySelector("body").insertAdjacentHTML("beforeend", "<div id=\"ESX180ScrollOverlay\"></div>");
  } else if (document.getElementById("ESX180ScrollLock") && !bool) {
    $("#ESX180Active").remove();
    $("#ESX180ScrollLock").remove();
    $("#ESX180ScrollOverlay").remove();
    document.querySelector("#product-detail-page-vue .out-stock-wrapper").style.position = "inherit";
  }
}

var scrollToTop = function scrollToTop() {
  if (SCROLL !== 0) {
    window.scrollTo(0, 0);
  }
};

var addModalCode = function addModalCode() {
  var $ = window.jQuery;
  MANUAL_TAB_INDEX = 2;
  var el = document.querySelector("#product-detail-page-vue .out-stock-wrapper");
  el.style.position = "absolute";
  el.style.left = "calc(".concat(-$("#product-detail-page-vue").offset().left, "px + 50vw)");
  el.style.top = "calc(".concat(SCROLL - $("#product-detail-page-vue").offset().top, "px + ").concat(window.pageYOffset, "px + 50vh)");
  var modalActiveStyle = "\n    <style id=\"ESX180Active\">\n      #product-detail-page-vue .out-stock-wrapper {\n        background: #fff;\n        width: 80rem;\n        height: 27rem;\n        position: absolute;\n        z-index: 99;\n        transform: translate(-50%, -50%);\n      }\n      #product-detail-page-vue .out-stock-wrapper .out-stock,\n      #product-detail-page-vue .out-stock-wrapper .like-holder {\n        display: none;\n      }\n      #product-detail-page-vue .out-stock-wrapper form {\n        display: flex;\n        margin: auto;\n        margin-left: ".concat(function () {
    if (IE) {
      return "15rem";
    }

    return "auto";
  }(), ";\n        margin-top: 18rem;\n        justify-content: center;\n      }\n      #product-detail-page-vue .out-stock-wrapper form > * {\n        margin: auto;\n        z-index: 101;\n      }\n      #product-detail-page-vue .out-stock-wrapper input {\n        background: #fff;\n        width: 30rem !important;\n        margin-right: 1.6rem;\n      }\n      #btnEmailMeBackInStock {\n        background-color: #bd5519;\n        opacity: 1 !important;\n        margin-top: 0 !important;\n      }\n      #ESX180TextOverlay {\n        position: absolute;\n        z-index: 100;\n        top: 0;\n        display: block !important;\n        transform: translate(-50%, -50%);\n        text-align: center;\n      }\n      #ESX180TextOverlay h3 {\n        font-size: 3rem;\n        padding-bottom: 2rem;\n      }\n      #ESX180TextOverlay h4 {\n        font-size: 2rem;\n      }\n      #ESX180TextOverlay button {\n        top: 0rem;\n        position: absolute;\n        right: 0rem;\n        font-size: 5rem;\n        opacity: 1;\n      }\n      #ESX180TextOverlay button span {\n        color: #333!important;\n        opacity: 1;\n      }\n    </style>\n  ");
  document.querySelector("head").insertAdjacentHTML("beforeend", modalActiveStyle);
  var textOverlay = "\n    <div id=\"ESX180TextOverlay\" style=\"display:none;\"><h3>Currently Out of Stock</h3><h4>We plan on getting more inventory, sign up to be alerted by email below</h4><button  type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\" ><span id=\"CloseESX180\" aria-hidden=\"true\">\xD7</span></button></div>\n    ";
  document.querySelector(".page.LsfVariantProxy").insertAdjacentHTML("beforeend", textOverlay);
  $("#ESX180TextOverlay").css("left", "".concat($("#product-detail-page-vue .out-stock-wrapper").offset().left + $("#product-detail-page-vue .out-stock-wrapper").width() / 2, "px"));
  $("#ESX180TextOverlay").css("top", "calc(".concat($("#product-detail-page-vue .out-stock-wrapper").offset().top + $("#product-detail-page-vue .out-stock-wrapper").height() / 2, "px - 4.5rem)"));
  MANUAL_TAB_ITEMS = [document.getElementById("oos_email"), document.getElementById("btnEmailMeBackInStock"), document.getElementById("CloseESX180").parentElement];
};

var addEventListeners = function addEventListeners() {
  window.addEventListener("resize", function () {
    var $ = window.jQuery;

    if (MODAL_IN_VIEW) {
      var el = document.querySelector("#product-detail-page-vue .out-stock-wrapper");
      el.style.left = "calc(".concat(-$("#product-detail-page-vue").offset().left, "px + 50vw)");
      el.style.top = "calc(".concat(SCROLL - $("#product-detail-page-vue").offset().top, "px + ").concat(window.pageYOffset, "px)");
      $("#ESX180TextOverlay").css("left", "".concat($("#product-detail-page-vue .out-stock-wrapper").offset().left + $("#product-detail-page-vue .out-stock-wrapper").width() / 2, "px"));
      $("#ESX180TextOverlay").css("top", "calc(".concat($("#product-detail-page-vue .out-stock-wrapper").offset().top + $("#product-detail-page-vue .out-stock-wrapper").height() / 2, "px - 4.5rem)"));
    }
  });
  document.addEventListener("click", function (e) {
    if (e.target.id == "btnEmailMeBackInStock") {
      displayModal(false);
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "180_SM",
        tags: {
          revenue: 0,
          value: 0.0
        }
      });
    } else if (e.target.id == "CloseESX180" || e.target.id == "ESX180ScrollOverlay") {
      displayModal(false);
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "180_CM",
        tags: {
          revenue: 0,
          value: 0.0
        }
      });
    }
  });
  document.addEventListener("keyup", function (e) {
    if (e.key == "Escape" && MODAL_IN_VIEW) {
      displayModal(false);
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "180_CM",
        tags: {
          revenue: 0,
          value: 0.0
        }
      });
    }

    if (e.key == "Enter" && MODAL_IN_VIEW) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "180_SM",
        tags: {
          revenue: 0,
          value: 0.0
        }
      });
    }
  });
  document.addEventListener("keydown", function (e) {
    if (event.which == 9 && MODAL_IN_VIEW) {
      event.preventDefault();
      MANUAL_TAB_INDEX += 1;
      if (MANUAL_TAB_INDEX > MANUAL_TAB_ITEMS.length - 1) MANUAL_TAB_INDEX = 0;

      var prevIndex = function () {
        if (MANUAL_TAB_INDEX - 1 < 0) {
          return MANUAL_TAB_ITEMS.length - 1;
        }

        return MANUAL_TAB_INDEX - 1;
      }();

      MANUAL_TAB_ITEMS[prevIndex].blur();
      MANUAL_TAB_ITEMS[MANUAL_TAB_INDEX].focus();
    }
  });
};

var displayModal = function displayModal(bool) {
  MODAL_IN_VIEW = bool;

  if (bool) {
    scrollToTop();
    setTimeout(function () {
      addModalCode();
      scrollLock(true);
    }, 1);
  } else {
    scrollLock(false);
  }
};

var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    addEventListeners();
    setTimeout(function () {
      displayModal(true);
    }, 3000);
  }
}, 50);