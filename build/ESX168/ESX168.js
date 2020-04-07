function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var customItemLayerInit = function customItemLayerInit() {
  var jq = setInterval(function () {
    if (window.jQuery) {
      var _$sliderTwo$slick;

      var $sliderOne = $("#ItemsInCartScroll > div");
      $sliderOne.slick({
        infinte: false,
        arrows: true,
        variableWidth: true,
        nextArrow: '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive nextArrow">',
        prevArrow: '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive prevArrow">'
      });
      var $sliderTwo = $("#HP4UScroll > div");
      $sliderTwo.slick((_$sliderTwo$slick = {
        arrows: false,
        infinte: false,
        variableWidth: true
      }, _defineProperty(_$sliderTwo$slick, "arrows", true), _defineProperty(_$sliderTwo$slick, "nextArrow", '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive nextArrow">'), _defineProperty(_$sliderTwo$slick, "prevArrow", '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive prevArrow">'), _$sliderTwo$slick));
      var iicWidth = document.getElementById("ItemsInCart").offsetWidth;
      var hp4uWidth = document.getElementById("HP4U").offsetWidth;
      document.querySelector("#ItemsInCart .nextArrow").style.right = "2rem";
      document.querySelector("#HP4U .nextArrow").style.left = "calc(".concat(hp4uWidth, "px - 6rem)");
      window.addEventListener("resize", function () {
        document.querySelector("#HP4U .nextArrow").style.left = "calc(".concat(document.getElementById("HP4U").offsetWidth, "px - 6rem)");
      });
      setTimeout(function () {
        $(".slick-slide").hide().css("visibility", "visible").fadeIn("slow");
      }, 1000);
      clearInterval(jq);
    }
  }, 50);
};

var cssInjection = function cssInjection() {
  html = "<style>#UserRelatedLayer{display:flex;flex-wrap:nowrap;margin:auto;max-width: 1140px;}#UserRelatedLayer h3{font-weight:400;font-size:2rem}#UserRelatedLayer p{font-size:1.6rem}#UserRelatedLayer h3 b{font-weight:700}#UserRelatedLayer h3,#UserRelatedLayer p{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#UserRelatedLayer>*{max-width:1140px;margin:0 auto;border:1px solid #d5d5d5;padding:1.4rem 0 1.5rem;overflow:hidden;height:18.2rem}#ItemsInCart{flex-basis:27%}#HP4U{flex-basis:73%}#UserRelatedLayer .flex-row{display:flex;flex-direction:row;flex-wrap:nowrap}#UserRelatedLayer .flex-col{display:flex;flex-direction:row;flex-wrap:nowrap}#HP4UScroll,#ItemsInCartScroll{padding-top:2rem}#HP4UScroll{overflow:hidden;width:1000px}#UserRelatedLayer .slick-row>div{visibility:hidden}#UserRelatedLayer .slick-slide{width:auto!important;padding-left:2rem!important}#UserRelatedLayer .slick-slide a{border:none}#UserRelatedLayer .slick-slide a img{width:16rem}#UserRelatedLayer .IICText{padding:0 2rem;justify-content:space-between}#UserRelatedLayer .IICText .flex-item>*{display:inline}#UserRelatedLayer .slick-initialized .slick-slide{padding:0}#HP4U{margin-left:2rem}#UserRelatedLayer .nextArrow,#UserRelatedLayer .prevArrow{cursor:pointer;position:absolute;z-index:1;top:50%;transition:.25s;opacity:0}#HP4U:hover .nextArrow,#HP4U:hover .prevArrow,#ItemsInCart:hover .nextArrow,#ItemsInCart:hover .prevArrow{opacity:1}#UserRelatedLayer .prevArrow{transform:translateY(-50%) scaleX(-1);left:2.5rem}#UserRelatedLayer .nextArrow{transform:translate(-50%,-50%)}@media (max-width:1199px){#UserRelatedLayer h3{font-size:1.5rem}#UserRelatedLayer p{font-size:1.3rem}}</style>";
  document.querySelector("head").insertAdjacentHTML("beforeend", html);
};

var hp4uLite = function () {
  function hp4uLite(containerId) {
    _classCallCheck(this, hp4uLite);

    this.containerId = containerId;
    this.eligibility = false;
    this.skus = [];
    this.html = "";

    this.hp4u = function () {
      if (containerId == "HP4U") {
        return true;
      }

      return false;
    }();

    return this;
  }

  _createClass(hp4uLite, [{
    key: "getHPSkus",
    value: function getHPSkus() {
      if (utag_data["cp.lsf-liked-items"] || utag_data["cp.lsf-recently-viewed-list"]) {
        var _this$skus, _this$skus2;

        this.eligibility = true;
        utag_data["cp.lsf-liked-items"] && (_this$skus = this.skus).push.apply(_this$skus, _toConsumableArray(JSON.parse(utag_data["cp.lsf-liked-items"])));
        utag_data["cp.lsf-recently-viewed-list"] && (_this$skus2 = this.skus).push.apply(_this$skus2, _toConsumableArray(JSON.parse(utag_data["cp.lsf-recently-viewed-list"])));
      }

      return this;
    }
  }, {
    key: "getCartSkus",
    value: function getCartSkus() {
      this.skus = _toConsumableArray(document.querySelectorAll(".cart-dropdown-content>.product-element>a")).map(function (a) {
        return a.href.split("-").pop();
      });
      return this;
    }
  }, {
    key: "_getCartSubtotal",
    value: function _getCartSubtotal() {
      return document.querySelector(".cart-dropdown-content .subtotal strong").innerText.split(".")[0];
    }
  }, {
    key: "genHtml",
    value: function genHtml() {
      var _this = this;

      var header = function () {
        if (this.hp4u) {
          return "<div class=\"flex-item\"> <h3><b>Hand Picked for YOU</b></h3></div>";
        }

        return "<div class=\"flex-item\"> <h3><b>In Your Cart</b> (".concat(this.skus.length, ")</h3> </div> <div class=\"flex-item\"> <p>Subtotal:</p> <h3><b>").concat(this._getCartSubtotal(), "</b></h3> </div>");
      }();

      var images = this.skus.map(function (sku) {
        return "\n          <div>\n            <a href=\"/".concat(function () {
          if (_this.hp4u) {
            return sku;
          }

          return "shopping-cart";
        }(), "\"\n              ><img\n                class=\"img-responsive\"\n                src=\"https://www.livingspaces.com/api/image?recId=").concat(sku, "&width=160\"\n              />\n            </a>\n          </div>\n        ");
      }).join("");
      this.html = "\n      <div id=\"".concat(this.containerId, "\">\n        <div class=\"IICText flex-row\">").concat(header, "</div>\n          <div class=\"\" id=\"").concat(this.containerId, "Scroll\">\n            <div class=\"slick-row\">").concat(images, "\n            </div>\n        </div>\n      </div>\n    ");
      return this;
    }
  }]);

  return hp4uLite;
}();

cssInjection();
var ItemsInCart = new hp4uLite("ItemsInCart").getCartSkus().genHtml();
var HP4U = new hp4uLite("HP4U").getHPSkus().genHtml();
var injectionHTML = "<div id=\"UserRelatedLayer\" class=\"flex-row\">".concat(ItemsInCart.html).concat(HP4U.html, "</div>");
document.getElementById("ls_hero_event").parentElement.insertAdjacentHTML("afterend", injectionHTML);
customItemLayerInit();