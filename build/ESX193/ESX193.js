var ESX193 = function ESX193() {
  var insertHtml = "\n<style>\n  #ESX193 {\n    background-color: #333;\n    color: #fff;\n    width: 100%;\n    padding: 1.2rem 3rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n  }\n  #ESX193 > * {\n    flex: 0 1 auto;\n  }\n  #ESX193 .ls-logo,\n  #ESX193 .cart-icon {\n    flex-basis: 50%;\n    margin: auto;\n  }\n\n  #ESX193 .cart-icon {\n    text-align: right;\n    font-size: 1.8rem;\n  }\n  /*  */\n  #ESX193 .cart-icon > * {\n    color: #fff;\n  }\n  #ESX193 .cart-icon > a > * {\n    display: inline-block;\n  }\n  #ESX193 .cart-icon > a > p {\n    margin: 0;\n    margin-right: 1rem;\n  }\n  #ESX193 .cart-icon > a:hover,\n  #ESX193 .cart-icon > a:visited,\n  #ESX193 .cart-icon > a:active {\n    text-decoration: none !important;\n  }\n</style>\n<div id=\"ESX193\">\n  <div class=\"ls-logo\">\n    <a href=\"/\">\n      <img\n        src=\"https://livingspaces.com/globalassets/images/lp/2020/06/ls-logo-white.png?width=265\"\n        alt=\"Living Spaces Home\"\n    /></a>\n  </div>\n  <div class=\"cart-icon\">\n    <a href=\"/shopping-cart\">\n      <p>Back to Cart</p>\n      <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n    </a>\n  </div>\n</div>\n";
  document.querySelector("header").insertAdjacentHTML("afterend", insertHtml);
};

if (document.readyState === "complete") {
  ESX193();
} else {
  document.addEventListener("DOMContentLoaded", ESX193);
}