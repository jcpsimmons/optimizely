var style = "\n  <style>\n    #step2 .price-total-table {\n      padding: 2rem .5rem;\n    }\n    #ESX194 h3, #ESX194 .item p {\n      font-size: 1.8rem;\n    }\n    #ESX194 .product-card {\n      border: none;\n    }\n    #ESX194 .product-card .card-side img {\n      width: 9rem;\n    }\n    #ESX194 .form-title {\n      display: none;\n    }\n  </style>\n";
document.querySelector("head").insertAdjacentHTML("beforeend", style);
var sourceEl = document.querySelector("#step2 .col-xs-7.cart-component");
sourceEl.classList.remove("col-xs-7");
var sourceHtml = sourceEl.outerHTML;
sourceEl.parentNode.removeChild(sourceEl);
sourceHtml = "<div id=\"ESX194\">".concat(sourceHtml, "</div>");
sourceEl.querySelector(".form-title").style.display = "none";
document.getElementById("shipBillSummary").insertAdjacentHTML("beforebegin", sourceHtml);