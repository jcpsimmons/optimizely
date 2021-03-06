var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    const $ = window.jQuery;
    const nested = () => {
      // define style component and inject as style tag in head
      const style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML =
        "#filter-sidebar > a {color: black;} .stickyStyle { position:fixed; top:0;width:100%; padding-top:2rem;z-index:1041} .dropdownMenus { padding-top: 0; } #floating-banner-bg { background-color:rgba(255,255,255,.9); border-bottom: 1px solid grey; position: fixed; left: 0; right: 0; top: 0; box-shadow: 0 5.3px 3px -4px grey; } ; #floating-banner-bg { height: 13rem; }";
      document.getElementsByTagName("head")[0].appendChild(style);
    };

    const reposNav = () => {
      // Get page components
      $("#plpServerSide .faceted-search-component").addClass("toWrap");
      $("#plpServerSide>.row:first-of-type").addClass("toWrap");

      // Don't inject the Nav Container if it's already there
      if ($("#NavContainer").length) {
      } else {
        $(".toWrap").wrapAll('<div id="NavContainer"></div>');
      }
      // Get the offset position of the navbar
      let sticky = document.querySelector("#NavContainer").offsetTop;

      const checkOffset = () => {
        if (
          document.querySelector(
            ".product-listing-template .grid-container, .search-template .grid-container"
          )
        ) {
          if (
            document
              .querySelector(
                ".product-listing-template .grid-container, .search-template .grid-container"
              )
              .getBoundingClientRect().top < 0
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          if (
            document
              .querySelector(
                ".product-listing-template .list-container, .search-template .list-container"
              )
              .getBoundingClientRect().top < 0
          ) {
            return true;
          } else {
            return false;
          }
        }
      };

      // have to use this offest by 10px logic to avoid flicker where it thinks it's both
      if (checkOffset()) {
        $("#NavContainer").addClass("stickyStyle");
        if (document.querySelector("#floating-banner-bg") == null) {
          $("#NavContainer > .row.toWrap").before(
            '<div id="floating-banner-bg"></div>'
          );
        }
        $("#NavContainer .faceted-search-component").addClass("dropdownMenus");
        $("#NavContainer ul.pull-right").css("display", "none");
        // keep transparent to avoid flicker
        // $("#floating-banner-bg").css("background-color", "rgba(255,255,255,0");
        // Resize the height to fit components

        $("#NavContainer h1")
          .css("font-size", "2rem")
          .css("margin-bottom", "0");
        $("#NavContainer .faceted-search-component .label-list.m-t-15").hide();
        $("#NavContainer .clear-all").hide();
        $("#NavContainer .filter-group-title").hide();
        $("#floating-banner-bg").height(
          $(".toWrap.dropdownMenus").outerHeight() +
            $(".toWrap.row").outerHeight() +
            20
        );
        $("#NavContainer .faceted-search-component .applied-filter-wrapper")
          .css("margin-top", "1.2rem")
          .css("margin-bottom", "0");
        $(".footer-component #back-to-top").show();
        // $("#floating-banner-bg").css("background-color", "rgba(255,255,255,.9");
      } else {
        $(".footer-component #back-to-top").hide();
        $("#NavContainer").removeClass("stickyStyle");
        $("#floating-banner-bg").remove();
        $("#NavContainer .faceted-search-component").removeClass(
          "dropdownMenus"
        );
        $("#NavContainer ul.pull-right").css("display", "block");
        $("#NavContainer h1")
          .css("font-size", "3rem")
          .css("margin-bottom", "1.4rem");
        $("#NavContainer .faceted-search-component .label-list.m-t-15").show();
        $("#NavContainer .clear-all").show();
        $("#NavContainer .filter-group-title").show();
        $("#NavContainer .faceted-search-component .applied-filter-wrapper")
          .css("margin-top", "0")
          .css("margin-bottom", "1.2rem");
      }
    };

    $(document).ready(function() {
      // fire on initial page load
      nested();
      // add container before page content to move everything into
      $(".page-content").before('<div id="NavbarContainer"></div>');
    });

    // Resposition on scroll, window load, product results updated, and display resize
    window.onscroll = () => {
      reposNav();
    };
    window.onload = () => {
      reposNav();
    };

    $(window).on("resize", () => {
      reposNav();
    });

    window.EventBus.$on("productResultsUpdated", () => {
      reposNav();
      window.scrollTo(0, 0);
      nested();
    });
    $(".plp-action-link:contains('Clear All')").click(e => {
      setTimeout(() => {
        nested();
      }, 500);
    });
  }
}, 50);
