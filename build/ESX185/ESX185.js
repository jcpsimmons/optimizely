function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var addCSS = function addCSS() {
  var css = "\n    <style>\n      .product-info-component .thumb-list {\n        height: 12rem !important;\n        text-align: left!important;\n      }\n      @media (max-width: 1199px) {\n        .product-info-component .thumb-list {\n          height: 10rem !important;\n        }\n      }\n      @media (max-width: 991px) {\n        .product-info-component .thumb-list {\n          height: 11rem !important;\n        }\n      }\n    </style>\n  ";
  document.querySelector("head").insertAdjacentHTML("beforeend", css);
};

var findLastVisibleImage = function findLastVisibleImage() {
  var output = {
    imagesShown: 0,
    imagesHidden: 0,
    colorPreviewThumb: false,
    needsSpan: false
  };
  var totalImages = document.querySelectorAll(".row.thumb-list > div");

  var lastImgIndex = function () {
    if (totalImages.length > 14) {
      return 14;
    }

    return totalImages.length;
  }();

  if (document.querySelectorAll(".row.thumb-list .thumb.spin").length > 0) {
    output.colorPreviewThumb = true;
  }

  if (document.querySelectorAll(".row.thumb-list > div").length > 15 || document.querySelectorAll(".row.thumb-list > div").length > 14 && output.colorPreviewThumb) {
    output.needsSpan = true;
  }

  output.imagesShown = lastImgIndex;
  output.imagesHidden = totalImages.length - lastImgIndex;
  return output;
};

var unbindModal = function unbindModal() {
  window.$(".product-info-component  div.img-click").each(function () {
    var x = window.$(this).unbind("click");
  });
};

var eventListeners = function eventListeners() {
  var _findLastVisibleImage = findLastVisibleImage(),
      imagesShown = _findLastVisibleImage.imagesShown,
      imagesHidden = _findLastVisibleImage.imagesHidden,
      colorPreviewThumb = _findLastVisibleImage.colorPreviewThumb,
      needsSpan = _findLastVisibleImage.needsSpan;

  document.addEventListener("click", function (e) {
    if (e.target.closest(".row.thumb-list > div:nth-of-type(".concat(imagesShown, ")")) && needsSpan) {
      imagesShown = function () {
        if (colorPreviewThumb) {
          return imagesShown - 1;
        }

        return imagesShown;
      }();

      window.$("#viewmoreComponentModal").modal("show");

      _toConsumableArray(document.querySelectorAll(".modal-body .view-more-component__thumbnails .active")).forEach(function (el) {
        el.classList.remove("active");
      });

      var el = document.querySelector(".view-more-component__thumbnails > div:nth-of-type(".concat(imagesShown, ")"));
      el.classList.add("active");
      el.focus();
      var thumbSrc = document.querySelector(".view-more-component__thumbnails > div:nth-of-type(".concat(imagesShown, ") img")).src;

      if (thumbSrc.search("photorank") > -1) {
        thumbSrc = thumbSrc.replace("thumbnail", "normal");
      } else {
        thumbSrc = "".concat(thumbSrc.split("?")[0], "?w=1000&h=674&mode=pad");
      }

      document.querySelector(".view-more-component__image img").src = thumbSrc;
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "185_lm"
      });
    } else if (e.target.closest(".row.thumb-list > div")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "185_cat"
      });
    }
  });
};

var setTabIndexes = function setTabIndexes() {
  var _findLastVisibleImage2 = findLastVisibleImage(),
      imagesShown = _findLastVisibleImage2.imagesShown,
      imagesHidden = _findLastVisibleImage2.imagesHidden;

  for (var i = 1; i < imagesShown + 1; i++) {
    document.querySelector(".row.thumb-list > div:nth-of-type(".concat(i, ")")).tabIndex = "0";
  }
};

var moveMoreText = function moveMoreText() {
  var _findLastVisibleImage3 = findLastVisibleImage(),
      imagesShown = _findLastVisibleImage3.imagesShown,
      imagesHidden = _findLastVisibleImage3.imagesHidden,
      needsSpan = _findLastVisibleImage3.needsSpan;

  var curViewMore = document.querySelector(".row.thumb-list .view-more");
  var spanText = curViewMore.querySelector(".view-more-number");
  var spanTextCopy = spanText.cloneNode(true);
  spanTextCopy.textContent = "+ ".concat(imagesHidden + 1, " more");
  spanText.parentElement.removeChild(spanText);
  curViewMore.classList.remove("view-more");

  if (needsSpan) {
    document.querySelector(".row.thumb-list > div:nth-of-type(".concat(imagesShown, ")")).appendChild(spanTextCopy);
    document.querySelector(".row.thumb-list > div:nth-of-type(".concat(imagesShown, ")")).classList.add("view-more");
  }
};

var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    addCSS();
    moveMoreText();
    setTabIndexes();
    unbindModal();
    eventListeners();
  }
}, 50);