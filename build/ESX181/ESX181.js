function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ESX181 = function ESX181() {
  document.querySelector("head").insertAdjacentHTML("beforeend", "<style>\n  #productImageGallery .container img.img-responsive { display: block; margin-bottom: 1rem }\n  </style>");

  var images = _toConsumableArray(document.querySelectorAll("#imgSlider img")).map(function (el) {
    return el.outerHTML;
  });

  images.push(images.shift());
  var filteredImages = [];
  images.forEach(function (img) {
    if (filteredImages.indexOf(img) == -1) {
      filteredImages.push(img);
    }
  });
  filteredImages = filteredImages.join("");
  var productGalleryHtml = "\n  <section class=\"board\" id=\"ESX181\">\n      <a class=\"collapse-link\" role=\"button\" data-toggle=\"collapse\" href=\"#productImageGallery\" aria-expanded=\"true\" aria-controls=\"productImageGallery\">Product Image Gallery<span class=\"fa fa-angle-down\" aria-hidden=\"true\"></span></a>\n      <div class=\"collapse in\" id=\"productImageGallery\">\n          <div class=\"container\">\n             ".concat(filteredImages, "\n           </div>\n      </div>\n  </section>\n  ");
  document.getElementById("reviews_content_wrap").insertAdjacentHTML("afterend", productGalleryHtml);
  var elemInView = false;
  document.addEventListener("scroll", function (e) {
    if (document.documentElement.scrollTop + 300 >= document.getElementById("ESX181").offsetTop && elemInView == false) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "181_usai"
      });
      elemInView = true;
    }
  });
  document.querySelector("#ESX181 .collapse-link").addEventListener("click", function (e) {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "181_ceii"
    });
  });
};

if (document.readyState != "loading") ESX181();else document.addEventListener("DOMContentLoaded", ESX181);