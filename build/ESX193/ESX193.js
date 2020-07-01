var ESX193 = function ESX193() {
  var calcFooter = function calcFooter() {
    setTimeout(function() {
      if (
        document.querySelector("body").getBoundingClientRect().height <
        window.innerHeight
      ) {
        document
          .querySelector("head")
          .insertAdjacentHTML(
            "beforeEnd",
            '\n            <style id="ESX193_footer-fix">\n              footer {\n                position: absolute;\n                bottom: 0;\n                width: 100%;\n              }\n            </style>\n          '
          );
      } else if (document.getElementById("ESX193_footer-fix")) {
        var el = document.getElementById("ESX193_footer-fix");
        el.parentNode.removeChild(el);
      }
    }, 10);
  };

  var insertHtml =
    '\n    <style>\n\n      #ESX193_container {\n        width: 100%;\n        background-color: #333;\n      }\n      #ESX193 {\n        color: #fff;\n        padding: 1.7rem 0;\n        display: flex;\n        justify-content: space-between;\n        align-items: baseline;\n      }\n      #ESX193 > * {\n        flex: 0 1 auto;\n      }\n      #ESX193 .ls-logo,\n      #ESX193 .cart-icon {\n        flex-basis: 50%;\n        margin: auto;\n      }\n\n      #ESX193 .cart-icon {\n        text-align: right;\n        font-size: 3.3rem;\n      }\n      #ESX193 .cart-icon p {\n        font-size: 1.6rem !important;\n      }\n      /*  */\n      #ESX193 .cart-icon > * {\n        color: #fff;\n      }\n      #ESX193 .cart-icon > a {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n      }\n      #ESX193 .cart-icon > a > p {\n        margin: 0;\n        margin-right: 1rem;\n      }\n      #ESX193 .cart-icon > a:hover,\n      #ESX193 .cart-icon > a:visited,\n      #ESX193 .cart-icon > a:active {\n        text-decoration: none !important;\n      }\n    </style>\n    <div id="ESX193_container">\n      <div id="ESX193" class="container">\n        <div class="ls-logo">\n          <a href="/">\n            <img\n              class="img-responsive"\n              src="https://livingspaces.com/globalassets/images/lp/2020/06/ls-logo-white.png?width=265"\n              alt="Living Spaces Home"\n          /></a>\n        </div>\n        <div class="cart-icon">\n          <a href="/shopping-cart">\n            <p>Back to Cart</p>\n            <i class="fa fa-shopping-cart" aria-hidden="true"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n  ';
  document.querySelector("header").insertAdjacentHTML("afterend", insertHtml);
  calcFooter();
  document.addEventListener("click", function(e) {
    calcFooter();
  });
};

if (document.readyState === "complete") {
  ESX193();
} else {
  document.addEventListener("DOMContentLoaded", ESX193);
}
