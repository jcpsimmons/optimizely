var swapList = function swapList() {
  var shipToHeader = $("#omniInventoryHeader");
  var shipToContent = $("#omniinventory ul>li>span.fa-truck").parent().parent();
  $(".shipping-wrapper>span.shipping-title").after(shipToContent).after(shipToHeader);
};

var omniWaitLoop = function omniWaitLoop() {
  var omniCnt = 0;
  var checkOmniinventoryPopulate = setInterval(function () {
    if ($("#omniinventory .header-title").length) {
      clearInterval(checkOmniinventoryPopulate);
      swapList();
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