var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;

    var nested = function nested() {
      var style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = "#filter-sidebar > a {color: black;} .stickyStyle { position:fixed; top:0;width:100%; padding-top:2rem;z-index:1041} .dropdownMenus { padding-top: 0; } #floating-banner-bg { background-color:rgba(255,255,255,.9); border-bottom: 1px solid grey; position: fixed; left: 0; right: 0; top: 0; box-shadow: 0 5.3px 3px -4px grey; } ; #floating-banner-bg { height: 13rem; }";
      document.getElementsByTagName("head")[0].appendChild(style);
    };

    var reposNav = function reposNav() {
      $("#plpServerSide .faceted-search-component").addClass("toWrap");
      $("#plpServerSide .row:first-of-type").addClass("toWrap");

      if ($("#NavContainer").length) {} else {
        $(".toWrap").wrapAll('<div id="NavContainer"></div>');
      }

      var sticky = document.querySelector("#NavContainer").offsetTop;

      if (document.querySelector(".product-listing-template .grid-container, .search-template .grid-container").getBoundingClientRect().top < 0) {
        $("#NavContainer").addClass("stickyStyle");

        if (document.querySelector("#floating-banner-bg") == null) {
          $("#NavContainer > .row.toWrap").before('<div id="floating-banner-bg"></div>');
        }

        $("#NavContainer .faceted-search-component").addClass("dropdownMenus");
        $("#NavContainer ul.pull-right").css("display", "none");
        $("#NavContainer h1").css("font-size", "2rem").css("margin-bottom", "0");
        $("#NavContainer .faceted-search-component .label-list.m-t-15").hide();
        $("#NavContainer .clear-all").hide();
        $("#NavContainer .filter-group-title").hide();
        $("#floating-banner-bg").height($(".toWrap.dropdownMenus").outerHeight() + $(".toWrap.row").outerHeight() + 20);
        $("#NavContainer .faceted-search-component .applied-filter-wrapper").css("margin-top", "1.2rem").css("margin-bottom", "0");
      } else {
        $("#NavContainer").removeClass("stickyStyle");
        $("#floating-banner-bg").remove();
        $("#NavContainer .faceted-search-component").removeClass("dropdownMenus");
        $("#NavContainer ul.pull-right").css("display", "block");
        $("#NavContainer h1").css("font-size", "3rem").css("margin-bottom", "1.4rem");
        $("#NavContainer .faceted-search-component .label-list.m-t-15").show();
        $("#NavContainer .clear-all").show();
        $("#NavContainer .filter-group-title").show();
        $("#NavContainer .faceted-search-component .applied-filter-wrapper").css("margin-top", "0").css("margin-bottom", "1.2rem");
      }
    };

    $(document).ready(function () {
      nested();
      $(".page-content").before('<div id="NavbarContainer"></div>');
    });

    window.onscroll = function () {
      reposNav();
    };

    window.onload = function () {
      reposNav();
    };

    $(window).on("resize", function () {
      reposNav();
    });
    window.EventBus.$on("productResultsUpdated", function () {
      reposNav();
      window.scrollTo(0, 0);
      nested();
    });
    $(".plp-action-link:contains('Clear All')").click(function (e) {
      setTimeout(function () {
        nested();
      }, 500);
    });
  }
}, 50);