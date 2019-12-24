function nested() {
  // define class
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML =
    ".stickyStyle { position:sticky;top:0;width:100%;z-index:99;background-color:rgba(255,255,255,.9);  padding-top:2rem; } .dropdownMenus {background-color:rgba(255,255,255,.9); box-shadow:0 5.3px 3px -4px grey;}";
  document.getElementsByTagName("head")[0].appendChild(style);

  // Get page components
  $("#plpServerSide .faceted-search-component").addClass("toWrap");
  $("#plpServerSide .row:first-of-type").addClass("toWrap");

  $(".toWrap").wrapAll('<div id="NavContainer"></div>');

  // Get the offset position of the navbar
  var sticky = document.querySelector("#NavContainer").offsetTop;

  // move on scroll - check for dupes of title
  function reposNav() {
    if (window.pageYOffset >= sticky) {
      $("#NavContainer").addClass("stickyStyle");
      $("#NavContainer .faceted-search-component").addClass("dropdownMenus");
      $("#NavContainer ul.pull-right").css("display", "none");
    } else {
      $("#NavContainer").removeClass("stickyStyle");
      $("#NavContainer .faceted-search-component").removeClass("dropdownMenus");
      $("#NavContainer ul.pull-right").css("display", "block");
    }
  }

  window.onscroll = function() {
    reposNav();
  };

  EventBus.$on("productResultsUpdated", function() {
    // reposNav();
    window.scrollTo(0, 0);
    nested();
  });
}

nested();
