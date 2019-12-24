window.onscroll = function() {
  reposNav();
};

// define class
var style = document.createElement("style");
style.type = "text/css";
style.innerHTML =
  ".stickyStyle { position:sticky;top:0;width:100%;z-index:99;background-color:rgba(255,255,255,.9); } .dropdownMenus {background-color:rgba(255,255,255,.9); box-shadow:1.2px 5px 5px lightgrey;}";
document.getElementsByTagName("head")[0].appendChild(style);

// Get page components
$("#plpServerSide .faceted-search-component")
  .addClass("toWrap")
  .addClass("dropdownMenus");
$("#plpServerSide .row:first-of-type").addClass("toWrap");

$(".toWrap").wrapAll('<div id="NavContainer" class="stickyStyle"></div>');

// Get the offset position of the navbar
var sticky = document.querySelector("#NavContainer").offsetTop;

// move on scroll - check for dupes of title
function reposNav() {
  if (window.pageYOffset >= sticky) {
    $("#NavContainer").addClass("stickyStyle");
  } else {
    $("#NavContainer").removeClass("stickyStyle");
  }
}

// window.onscroll = function() {
//   reposNav();
// };

// // define class
// var style = document.createElement("style");
// style.type = "text/css";
// style.innerHTML =
//   ".stickyStyle { position:sticky;top:0;width:100%;z-index:99;background-color:rgba(255,255,255,.9);box-shadow:1.2px 5px 5px lightgrey; }";
// document.getElementsByTagName("head")[0].appendChild(style);

// // make wrapper div
// var wrapDiv = document.createElement('div')

// // Get page components
// var navbar = document.querySelector("#plpServerSide .faceted-search-component");
// var pageTitle = document.querySelector("#plpServerSide .row:first-of-type");

// pageTitle.setAttribute("id", "navPageTitle");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // move on scroll - check for dupes of title
// function reposNav() {
//   if (window.pageYOffset >= sticky) {
//     if (navbar.querySelector("#navPageTitle") == null) {
//       navbar.innerHTML = pageTitle.outerHTML + navbar.innerHTML;
//     }
//     navbar.classList.add("stickyStyle");
//   } else {
//     if (navbar.querySelector("#navPageTitle") !== null) {
//       navbar.querySelector("#navPageTitle").outerHTML = "";
//     }
//     navbar.classList.remove("stickyStyle");
//   }
// }
