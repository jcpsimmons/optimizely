var ESX195 = function ESX195() {
  var HEADER_IN_VIEW = true;
  var MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  var headerIsVisible = function headerIsVisible() {
    var rect = document.querySelector("header").getBoundingClientRect();
    return rect.bottom > 0;
  };

  var adjustButtonPosition = function adjustButtonPosition(headerVisible) {
    var headerHeight;

    if (headerVisible) {
      headerHeight = document.querySelector("header").getBoundingClientRect().bottom;
    }

    document.getElementById("ESX195").style.top = "calc(1rem + ".concat(function () {
      if (HEADER_IN_VIEW) {
        return headerHeight;
      }

      return 0;
    }(), "px)");
  };

  document.addEventListener("scroll", function () {
    HEADER_IN_VIEW = headerIsVisible();
    adjustButtonPosition(HEADER_IN_VIEW);
  });
  var style = "\n  <style>\n    #ESX195 {\n      z-index: 99;\n      position: fixed;\n      top: ".concat(function () {
    if (MOBILE) {
      return "14rem";
    }

    return "17rem";
  }(), ";\n      left: ").concat(function () {
    if (MOBILE) {
      return "0";
    }

    return "3rem";
  }(), ";\n      transition: top .2s;\n    }\n    #ESX195 button {\n      color: #fff;\n      background: #00699a;\n      font-size: 1.6rem;\n      border-radius: ").concat(function () {
    if (MOBILE) {
      return "0 0.25rem 0.25rem 0";
    }

    return "0.25rem";
  }(), ";\n      transition: 0.2s;\n      ").concat(function () {
    if (MOBILE) {
      return "min-width: 5rem";
    }

    return "";
  }(), "\n    }\n    #ESX195 i {\n      font-size: 1.3rem;\n      margin-right: 1rem;\n    }\n    #ESX195 span {\n      margin-right: 1rem;\n    }\n    #ESX195 button:hover, #ESX195 button:active, #ESX195 button:visited {\n      background-color: #024f73;\n    }\n  </style>\n");
  document.querySelector("head").insertAdjacentHTML("beforeend", style);
  document.querySelector("body").insertAdjacentHTML("beforeend", "<div id=\"ESX195\"><a href=\"/shopping-cart\"><button class=\"btn primary-button\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i><span>Back to Cart</span></button></a></div>");
};

if (document.readyState === "complete") {
  ESX195();
} else {
  document.addEventListener("DOMContentLoaded", ESX195);
}