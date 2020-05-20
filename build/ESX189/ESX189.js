var ESX189 = function ESX189() {
  var style = "\n    <style>\n      #successAddToCartModal .row.button-group {\n        align-items: baseline;\n      }\n      #ESX189 {\n        margin-top: 1.7rem;\n        white-space: nowrap;\n      }\n      #ESX189 a {\n        white-space: nowrap;\n      }\n      #ESX189 img {\n        display: inline;\n        width: 4rem;\n        margin-left: 7px\n      }\n    </style>\n  ";
  document.querySelector("head").insertAdjacentHTML("beforeend", style);
  var html = "\n    <div id=\"ESX189\">\n      <a href=\"/shopping-cart\">Checkout with</a\n      ><a href=\"/shopping-cart\"\n        ><img\n          class=\"img-responsive\"\n          src=\"https://www.livingspaces.com/globalassets/images/lp/2020/05/ESX189_apple-pay.png\"\n      /></a>\n    </div>\n  ";
  document.querySelector("#successAddToCartModal .modal-footer .row.button-group .col-xs-6.text-left").insertAdjacentHTML("beforeend", html);
  document.addEventListener("click", function (e) {
    if (e.target.closest("#ESX189")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "189_capb",
        tags: {
          revenue: 0,
          value: 0.0
        }
      });
    }
  });
};

ESX189();