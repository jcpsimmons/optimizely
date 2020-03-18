document.addEventListener("DOMContentLoaded", function (event) {
  var html = "\n  \n  <!-- append to body -->\n  <!-- add onclick to it instead of link -->\n  <style>\n    #BackToTop {\n      transform: scale(.8);\n      transition: .1s;\n      display: none;\n      position: fixed;\n      bottom: 75px;\n      right: .3rem;\n      background-color: #333;\n      border-radius: 10px;\n      border: 3px solid #fff;\n      color: #fff;\n      flex-direction: column;\n      padding: 0 1rem 0.65rem;\n      text-align: center;\n      text-transform: uppercase;\n      font-size: 1.3rem;\n      z-index: 100;\n    }\n    #BackToTop i {\n      margin: -0.7rem auto -1rem;\n    }\n  </style>\n  \n  <div id=\"BackToTop\">\n    <i class=\"fa fa-4x fa-angle-up\" aria-hidden=\"true\"></i>\n    <span>top<span></span></span>\n  </div>\n  \n  ";
  document.querySelector("body").insertAdjacentHTML("beforeend", html);
  var el = document.getElementById("BackToTop");

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      el.style.display = "flex";
    }

    if (scrolled < coords) {
      el.style.display = "none";
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var footer = document.querySelector("footer");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0 && !Boolean(document.getElementById("StickyButtonWrapper"))) {
        el.style.bottom = "200px";
      } else {
        el.style.bottom = "75px";
      }
    });
  });
  observer.observe(footer);
  document.addEventListener("scroll", trackScroll);
  el.addEventListener("click", function () {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "clickBackToTopButton",
      tags: {
        revenue: 0,
        value: 0.0
      }
    });
    backToTop();
  });
});