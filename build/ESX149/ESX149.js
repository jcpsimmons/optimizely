var swapListHandler = function swapListHandler() {
  var elemCount = function elemCount(arr) {
    elementCount = arr.map(function (item) {
      return item.length;
    }).reduce(function (a, b) {
      return a + b;
    });
    return elementCount;
  };

  var swapListDesktop = function swapListDesktop() {
    var elemArray = [$("#omniinventory ul>li>span.fa-truck").parent().parent(), $("#omniinventory ul>li:contains(This item can only be ordered in store.)").parent().parent(), $("#omniInventoryHeader")];

    if (elemCount(elemArray) > 1) {
      elemArray.forEach(function (item) {
        try {
          $(".shipping-wrapper>span.shipping-title").after(item);
        } catch (err) {}
      });
    }
  };

  var swapListMobile = function swapListMobile() {
    var elemArray = [$("#omniWrap ul>li>span.fa-truck").parent().parent(), $("#omniWrap ul>li:contains(This item can only be ordered in store.)").parent().parent(), $("#omniInventoryHeader")];

    if (elemCount(elemArray) > 1) {
      elemArray.forEach(function (item) {
        try {
          $("#omniWrap").prepend(item);
        } catch (err) {}
      });
    }
  };

  if (utag_data.site_type == "desktop") {
    swapListDesktop();
  } else {
    swapListMobile();
  }
};

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
};

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