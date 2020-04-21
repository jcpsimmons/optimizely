function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ESX178 = function ESX178(version) {
  var $ = window.jQuery;
  var INJECTION_LOCATION;
  var SLIDES_TO_SCROLL;

  if (version == "small") {
    INJECTION_LOCATION = ".cart-main-content";
    SLIDES_TO_SCROLL = 3;
  } else {
    INJECTION_LOCATION = ".cart-content .row:first-of-type";
    SLIDES_TO_SCROLL = 6;
  }

  var injectCss = function injectCss() {
    document.querySelector("head").insertAdjacentHTML("beforeend", "\n  <style>\n\n\n  #ESX178,\n  #ItemsInCartScroll {\n    padding-top: 2rem;\n  }\n  #ESX178 {\n    border: 1px solid #d5d5d5;\n    overflow: hidden;\n    margin-top: 4rem;\n    padding: 1.2rem 0\n  }\n  #ESX178 .slick-row > div {\n    visibility: hidden;\n  }\n  #ESX178 .slick-slide {\n    width: auto !important;\n    padding-left: 2rem !important;\n  }\n  #ESX178 .slick-slide a {\n    border: none;\n  }\n  #ESX178 .slick-slide a img {\n    width: 16rem;\n  }\n  #ESX178 .slick-initialized .slick-slide {\n    padding: 0;\n  }\n  #ESX178 .nextArrow,\n  #ESX178 .prevArrow {\n    width: 4rem;\n    cursor: pointer;\n    position: absolute;\n    z-index: 1;\n    top: 38%;\n    transition: 0.25s;\n    opacity: 0;\n  }\n  #ESX178 .slickitems:hover .nextArrow,\n  #ESX178 .slickitems:hover .prevArrow {\n    opacity: 1;\n  }\n  #ESX178 .prevArrow {\n    transform: translateY(-50%) scaleX(-1);\n    left: 2.5rem;\n  }\n  #ESX178 .nextArrow {\n    transform: translate(-50%, -50%);\n    right: 0;\n  }\n  @media (max-width: 1199px) {\n    #ESX178 h3 {\n      font-size: 1.5rem;\n    }\n    #ESX178 p {\n      font-size: 1.3rem;\n    }\n  }\n  #ESX178 p.prodtitle, #ESX178 p.prodprice {\n    width: 15.8rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  #ESX178 p.prodtitle {\n    margin-top: .5rem;\n    margin-bottom: 0;\n  }\n  \n  #ESX178 p.prodprice {\n    font-weight:bold;\n  }\n\n  #ESX178 .header {\n    margin-left: 1.7rem;\n    font-size: 2rem!important;\n    font-weight: 600!important;\n  }\n\n  #ESX178 .savings {\n    font-size: 1.4rem;\n    font-weight: 600;\n    color: #ffffff;\n    padding: .2rem .7rem;\n    background: #00699a;\n    margin-left: 1.4rem;\n  }\n\n  #ESX178 .slickitems {\n    margin-top: 2rem;\n  }\n\n  #ESX178 .slick-dots {\n    bottom: -2.5rem!important;\n  }\n\n  #ESX178 .viewall {\n    float: right;\n    font-size: 1.4rem;\n    font-weight: normal;\n    color: #333333;\n    margin-right: 1.2rem;\n  }\n  #ESX178 .viewall:hover {\n    text-decoration: underline;\n  }\n\n  #ESX178 .slick-dots li button:before {\n    content: \"\\f10c\"!important;\n  }\n  \n  #ESX178 .slick-dots li.slick-active button:before {\n    content: \"\\f111\"!important;\n  }\n\n\n  </style>\n  \n  ");
  };

  var initSlick = function initSlick() {
    $("#ESX178 .slickitems").slick({
      slidesToScroll: SLIDES_TO_SCROLL,
      slidesToShow: SLIDES_TO_SCROLL,
      infinte: false,
      variableWidth: true,
      arrows: true,
      dots: true,
      nextArrow: '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive nextArrow">',
      prevArrow: '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive prevArrow">'
    });
  };

  var addEventListeners = function addEventListeners() {
    $("#ESX178").on("swipe", function (event, slick, direction) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "178_iws"
      });
    });

    _toConsumableArray(document.querySelectorAll("#ESX178 .slick-dots, #ESX178 .slick-arrow")).forEach(function (el) {
      el.addEventListener("click", function () {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "178_iws"
        });
      });
    });

    _toConsumableArray(document.querySelectorAll("#ESX178 .slick-slide")).forEach(function (el) {
      el.addEventListener("click", function () {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "178_cpl"
        });
      });
    });

    document.querySelector("#ESX178 .viewall").addEventListener("click", function () {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "178_cva"
      });
    });
  };

  var checkEligible = function checkEligible() {
    if (document.querySelector(".progress__actual-value.text-blue.font-weight-600")) {
      return parseInt(document.querySelector("[for=tohome-option] span.label-n-t").innerText.replace("$", "")) == 59 && parseInt(document.querySelector(".free-shipping-incentive__title").textContent.replace(/[^0-9\.]/g, "")) < 59;
    } else {
      return false;
    }
  };

  var getCartTotal = function getCartTotal() {
    try {
      return parseFloat(document.querySelector(".progress__actual-value.text-blue.font-weight-600").textContent.replace("$", ""));
    } catch (error) {
      return false;
    }
  };

  var getShippingCost = function getShippingCost() {
    var spans = _toConsumableArray(document.querySelectorAll(".delivery-option label span"));

    spans = spans.filter(function (s) {
      return s.textContent.trim() == "Shipping";
    });
    return parseInt(spans[0].nextElementSibling.textContent.replace("$", ""));
  };

  var genHtml = function genHtml(prods) {
    var html = prods.map(function (p) {
      return "\n      <div>\n        <a href=\"".concat(p.url, "\"\n          ><img class=\"img-responsive\" src=\"").concat(p.thumb_image.split("?")[0] + "?w=160&h=108&mode=pad", "\" />\n          <p class=\"prodtitle\">").concat(p.title, "</p>\n          <p class=\"prodprice\">$").concat(parseInt(p.price), "</p>\n          </a\n        >\n        </div>\n      ");
    }).join("");
    html = "\n    <div id=\"ESX178\">\n     <span class=\"header\">Add $".concat(state.need, " to get FREE shipping</span>\n        <span class=\"savings\">SAVE $").concat(state.shippingCost - state.need, "</span>\n        <a\n        href=\"https://www.livingspaces.com/search?term=decor&sale_price=%5b").concat(state.need, "+TO+").concat(state.need + 20, "%5d&sortby=sale_price+asc\"\n        >\n        <span class=\"viewall\">View More Options</span>\n        </a\n      ><div class=\"slickitems\">").concat(html, "</div>\n    </div>\n  ");
    return html;
  };

  var getNeedAmt = function getNeedAmt() {
    return parseInt(document.querySelector(".free-shipping-incentive__title").textContent.match(/[0-9]+/g)[0]);
  };

  var bloomreachApiCall = function bloomreachApiCall() {
    $.ajax({
      url: "https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&ptype=category&request_type=search&search_type=keyword&request_id=b0311963-1ef8-4e98-8a27-52a58fcddd7f&url=https://www.livingspaces.com/shopping-cart&q=decor&start=0&rows=12&fl=pid,price,thumb_image,url,title,sale_price&fq=sale_price:[".concat(state.need, "%20TO%20").concat(state.need + 20, "]&sort=sale_price%20asc&fq=reviews:%224.0%22OR%224.1%22OR%224.2%22OR%224.3%22OR%224.4%22OR%224.5%22OR%224.6%22OR%224.7%22OR%224.8%22OR%224.9%22OR%225.0%22"),
      success: function success(result) {
        var html = genHtml(result.response.docs);
        document.querySelector(INJECTION_LOCATION).insertAdjacentHTML("afterend", html);
        initSlick();
        addEventListeners();
      }
    });
  };

  var updateState = function updateState(oldState) {
    state = {
      zip: utag_data["cp.lsf-selected-zip-code"],
      cartTotal: getCartTotal(),
      need: 0,
      shippingCost: getShippingCost(),
      moreOptionsUrl: "https://www.livingspaces.com/search?term=decor&sale_price=%5b9+TO+29%5d&sortby=sale_price+asc"
    };
    state.need = getNeedAmt();
    state.moreOptionsUrl = "https://www.livingspaces.com/search?term=decor&sale_price=%5b".concat(state.need, "+TO+").concat(state.need + 20, "%5d&sortby=sale_price+asc");

    if (oldState == state) {
      return state;
    } else if (oldState == {} || oldState !== state) {
      bloomreachApiCall();
      return state;
    }
  };

  var state;

  if (checkEligible()) {
    injectCss();
    state = updateState({});
  } else {
    injectCss();
    state = {};
  }
};

var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    ESX178("large");
  }
}, 50);