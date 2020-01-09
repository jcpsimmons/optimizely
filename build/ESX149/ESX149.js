var swapListHandler = function swapListHandler() {
  // util fcn for checking if enough elements exist
  var elemCount = function elemCount(arr) {
    elementCount = arr.map(function (item) {
      console.log(item.length);
      return item.length;
    }).reduce(function (a, b) {
      return a + b;
    });
    return elementCount;
  }; // DESKTOP CODE


  var swapListDesktop = function swapListDesktop() {
    // Get the elements (order matters)
    var elemArray = [$("#omniinventory ul>li>span.fa-truck").parent().parent(), $("#omniinventory ul>li:contains(This item can only be ordered in store.)").parent().parent(), $("#omniInventoryHeader")];

    if (elemCount(elemArray) > 1) {
      //   Put them after the section header, catch to log errors
      elemArray.forEach(function (item) {
        try {
          $(".shipping-wrapper>span.shipping-title").after(item);
        } catch (err) {
          console.error(err);
        }
      });
    }
  }; // MOBILE CODE


  var swapListMobile = function swapListMobile() {
    // Get the elements (order matters)
    var elemArray = [$("#omniWrap ul>li>span.fa-truck").parent().parent(), $("#omniWrap ul>li:contains(This item can only be ordered in store.)").parent().parent(), $("#omniInventoryHeader")];

    if (elemCount(elemArray) > 1) {
      //   Put them after the section header, catch to log errors
      elemArray.forEach(function (item) {
        try {
          $("#omniWrap").prepend(item);
        } catch (err) {
          console.error(err);
        }
      });
    }
  }; //   DETERMINE DEVICE AND CODE TO USE


  if (utag_data.site_type == "desktop") {
    swapListDesktop();
  } else {
    swapListMobile();
  }
}; // Wait for omnichannel load


var omniWaitLoop = function omniWaitLoop() {
  var omniCnt = 0;
  var checkOmniinventoryPopulate = setInterval(function () {
    if ($("#omniinventory .header-title").length) {
      clearInterval(checkOmniinventoryPopulate);
      swapListHandler();
    } else if (omniCnt > 14) {
      clearInterval(checkOmniinventoryPopulate);
    }

    omniCnt++;
  }, 500);
}; // Wait for JQ load make sure $ is aliased to JQ


var jqueryWaitLoop = function jqueryWaitLoop() {
  var anotherInterval = setInterval(function () {
    if (typeof window.jQuery !== "undefined") {
      clearInterval(anotherInterval);
      var $ = window.jQuery;
      omniWaitLoop();
    }
  }, 50);
};

jqueryWaitLoop();