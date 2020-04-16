function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var injectCss = function injectCss() {
  document.querySelector("head").insertAdjacentHTML("beforeend", "\n  <style>\n\n\n  #ESX178, #ItemsInCartScroll { padding-top: 2rem; } #ESX178 { overflow: hidden; } #ESX178 .slick-row > div { visibility: hidden; } #ESX178 .slick-slide { width: auto !important; padding-left: 2rem !important; } #ESX178 .slick-slide a { border: none; } #ESX178 .slick-slide a img { width: 16rem; } #ESX178 .IICText { padding: 0 2rem; justify-content: space-between; } #ESX178 .IICText .flex-item > * { display: inline; } #ESX178 .slick-initialized .slick-slide { padding: 0; } #ESX178 .nextArrow, #ESX178 .prevArrow { cursor: pointer; position: absolute; z-index: 1; top: 50%; transition: 0.25s; opacity: 0; } #ESX178:hover .nextArrow, #ESX178:hover .prevArrow { opacity: 1; } #ESX178 .prevArrow { transform: translateY(-50%) scaleX(-1); left: 2.5rem; } #ESX178 .nextArrow { transform: translate(-50%, -50%); } @media (max-width: 1199px) { #ESX178 h3 { font-size: 1.5rem; } #ESX178 p { font-size: 1.3rem; } } #ESX178 p.prodtitle { width: 17.5rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n\n  </style>\n  \n  ");
};

var initSlick = function initSlick() {
  var _$$slick;

  $("#ESX178 .slickitems").slick((_$$slick = {
    arrows: false,
    slidesToScroll: 4,
    infinte: false,
    variableWidth: true
  }, _defineProperty(_$$slick, "arrows", true), _defineProperty(_$$slick, "nextArrow", '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive nextArrow">'), _defineProperty(_$$slick, "prevArrow", '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive prevArrow">'), _$$slick));
};

var checkEligible = function checkEligible() {
  if (document.querySelector(".progress__actual-value.text-blue.font-weight-600")) {
    return 501 - parseFloat(document.querySelector(".progress__actual-value.text-blue.font-weight-600").textContent.replace("$", "")) < 50;
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

var genHtml = function genHtml(prods) {
  var html = prods.map(function (p) {
    return "\n      <div>\n        <a href=\"".concat(p.url, "\"\n          ><img class=\"img-responsive\" src=\"").concat(p.thumb_image, "\" />\n          <p class=\"prodtitle\">").concat(p.title, "</p>\n          <p class\"prodprice\">$").concat(parseInt(p.price), "</p>\n          </a\n        >\n        </div>\n      ");
  }).join("");
  html = "\n    <div id=\"ESX178\">\n      <a\n        href=\"https://www.livingspaces.com/search?term=decor&sale_price=%5b".concat(state.need, "+TO+").concat(state.need + 20, "%5d&sortby=sale_price+asc\"\n        ><h2>Add $").concat(state.need, " to get FREE shipping</h2></a\n      ><div class=\"slickitems\">").concat(html, "</div>\n    </div>\n  ");
  return html;
};

var bloomreachApiCall = function bloomreachApiCall() {
  $.ajax({
    url: "https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&ptype=category&request_type=search&search_type=keyword&request_id=b0311963-1ef8-4e98-8a27-52a58fcddd7f&url=https://www.livingspaces.com/shopping-cart&q=decor&start=0&rows=8&fl=pid,price,thumb_image,url,title,sale_price&fq=sale_price:[".concat(state.need, "%20TO%20").concat(state.need + 20, "]&sort=sale_price%20asc&fq=reviews:%224.0%22OR%224.1%22OR%224.2%22OR%224.3%22OR%224.4%22OR%224.5%22OR%224.6%22OR%224.7%22OR%224.8%22OR%224.9%22OR%225.0%22"),
    success: function success(result) {
      var html = genHtml(result.response.docs);
      document.querySelector(".cart-main-content").insertAdjacentHTML("afterend", html);
      initSlick();
    }
  });
};

var updateState = function updateState(oldState) {
  state = {
    zip: utag_data["cp.lsf-selected-zip-code"],
    cartTotal: getCartTotal(),
    need: 0,
    moreOptionsUrl: "https://www.livingspaces.com/search?term=decor&sale_price=%5b9+TO+29%5d&sortby=sale_price+asc"
  };
  state.need = 501 - state.cartTotal;
  state.moreOptionsUrl = "https://www.livingspaces.com/search?term=decor&sale_price=%5b".concat(state.need, "+TO+").concat(state.need + 20, "%5d&sortby=sale_price+asc");

  if (oldState == state) {
    return state;
  } else if (oldState == {} || oldState !== state) {
    bloomreachApiCall();
    return state;
  }
};

var observer = new MutationObserver(function (mutationsList, observer) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = mutationsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var mutation = _step.value;

      if (mutation.type === "childList" || mutation.type === "attributes" || mutation.type === "characterData") {
        if (checkEligible()) {
          state = updateState({});
        } else if (document.getElementById("ESX178")) {
          var el = document.getElementById("ESX178");
          el.parentNode.removeChild(el);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});
observer.observe(document.querySelector(".cart-main-content"), {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true
});
var state;

if (checkEligible()) {
  injectCss();
  state = updateState({});
} else {
  injectCss();
  state = {};
}