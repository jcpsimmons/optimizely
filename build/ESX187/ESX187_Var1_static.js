var ESX187 = function ESX187() {
  var images = Array.from(document.querySelectorAll(".row.thumb-list .thumb.img-click img")).filter(function (img) {
    return img.alt.search("360") == -1 && img.src.search("akamai") == -1;
  }).map(function (img) {
    var output = {};
    output.src = img.src.split("?")[0] + "?w=380&h=256&mode=pad";
    output.alt = img.alt;
    return output;
  });
  var outputHtml = "\n  <style>\n    #productImageGallery .row {\n      margin: 0;\n    }\n    #productImageGallery .col-xs-4 {\n      padding: 0.2rem;\n    }\n  </style>\n  <section class=\"board\" id=\"ESX187\">\n    <a\n      class=\"collapse-link\"\n      role=\"button\"\n      data-toggle=\"collapse\"\n      href=\"#productImageGallery\"\n      aria-expanded=\"true\"\n      aria-controls=\"productImageGallery\"\n      >Product Image Gallery<span\n        class=\"fa fa-angle-down\"\n        aria-hidden=\"true\"\n      ></span\n    ></a>\n    <div class=\"container collapse in\" id=\"productImageGallery\">\n\n      ".concat(images.map(function (img, index) {
    var output = "\n          <div class=\"col-xs-4\">\n            <img\n              src=\"".concat(img.src, "\"\n              alt=\"").concat(img.alt, "\"\n              class=\"img-responsive\"\n            />\n          </div>\n        ");

    if (index == 0) {
      output = "<div class=\"row\">".concat(output);
    } else if (index == images.length) {
      output = "".concat(output, "</div>");
    } else if ((index + 1) % 3 == 0) {
      output = "".concat(output, "</div><div class=\"row\">");
    }

    return output;
  }).join(""), "\n\n    </div>\n  </section>\n");
  document.getElementById("reviews_container").insertAdjacentHTML("afterend", outputHtml);
  document.addEventListener("click", function (e) {
    if (e.target.closest("#ESX187")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "187_ciig"
      });
    }
  });
};

var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    $(document).ready(ESX187);
  }
}, 50);