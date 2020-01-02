// USER MENU INJECTION

function desktopInjection() {
  $(".user-dropdown-content a:contains(My Account)").after(
    '<a id="hp-link-profile" href="/inspiration/hand-picked-items-for-you" role="menuitem">Hand Picked</a>'
  );
}

function mobileInjection() {
  var injectionCode =
    '<li> <a id="hp-link-profile" href="/inspiration/hand-picked-items-for-you"> <span aria-hidden="true" class="fa fa-thumbs-up"> </span>Hand Picked </a> </li>';

  $("#app-header .dropdown-menu li a:contains(My Account)")
    .parent()
    .after(injectionCode);
}

var anotherInterval = setInterval(function() {
  if (
    typeof window.jQuery !== "undefined" &&
    typeof utag_data !== "undefined"
  ) {
    clearInterval(anotherInterval);
    $("#hp-link-profile").click(function() {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "click-hp-link",
        tags: {}
      });
    });
    if (utag_data.site_type == "desktop") {
      desktopInjection();
    } else {
      mobileInjection();
    }
  }
}, 50);

//   INSPO INJECTION

function desktopInjection() {
  var injectionCode =
    '<style> .new-callout-text { position: absolute; color: #B9170F; font-size: 1rem; left: -1.3rem; top: 1.2rem; } </style><li class=""> <a id="hp-link-inspiration" href="/inspiration/hand-picked-items-for-you" aria-label="Ideas + Advice" target="" role="menu" aria-haspopup="true" aria-expanded="false"> <div class="new-callout-text">NEW</div>Hand Picked<span class="fa fa-angle-right pull-right" aria-hidden="true"></span> </a> </li>';

  $("ul.list-unstyled.first-level li a:contains(Catalogs)")
    .parent()
    .after(injectionCode);
}

function mobileInjection() {
  var injectionCode =
    '<style> .new-callout-text-mobile { position: absolute; color: #B9170F !important; left: 2rem; } </style> <li class="multilevel"> <div class="new-callout-text-mobile">NEW</div> <a id="hp-link-inspiration" href="/inspiration/hand-picked-items-for-you" aria-level="3">Hand Picked for You</a> <ul aria-label="menu3" aria-level="3" class="level-three"> <li><a href="javascript:void(0)" class="level-back level-two-back">Hand Picked for You</a></li> <li><a href="/inspiration/hand-picked-items-for-you" target="" aria-label="Hand Picked for You">Hand Picked for You</a></li> </ul> </li>';

  $("li.multilevel ul.level-two li a:contains(Catalogs)")
    .parent()
    .after(injectionCode);
}

var anotherInterval = setInterval(function() {
  if (
    typeof window.jQuery !== "undefined" &&
    typeof utag_data !== "undefined"
  ) {
    clearInterval(anotherInterval);
    $("#hp-link-inspiration").click(function() {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "click-hp-link",
        tags: {}
      });
    });
    if (utag_data.site_type == "desktop") {
      desktopInjection();
    } else {
      mobileInjection();
    }
  }
}, 50);
