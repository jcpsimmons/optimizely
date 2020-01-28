var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    var isScrolledIntoView = function isScrolledIntoView(elem) {
      var $elem = $(elem);
      var $window = $(window);
      var docViewTop = $window.scrollTop();

      if (!elementVisible) {
        docViewTop = docViewTop - $('#WhiteBackground');
      }

      var docViewBottom = docViewTop + $window.height();
      var elemTop = $elem.offset().top;
      var elemBottom = elemTop + $elem.height();
      return elemBottom <= docViewBottom && elemTop >= docViewTop;
    };

    clearInterval(anotherInterval);
    var $ = window.jQuery;
    var css = "<style> .sticky_addToCart { position: fixed; z-index: 999; display: block; bottom: 0; left: 50%; transform: translateX(-50%); } .moveChatIcon { top: -25px; } .messages-starticon { transition: 0.2s } #WhiteBackground { display:none; z-index: 100; background-color:rgba(255,255,255,.9); border-top: 1px solid grey; position: fixed; left: 0; right: 0; bottom: 0; height: 7.5rem; box-shadow: 0 -5.3px 3px -4px grey; }</style>";
    $('head').after(css);
    var elementVisible = true;
    $("#product-detail-page-vue form").before('<div id="WhiteBackground"></div>').wrap('<div id="StickyButtonWrapper"></div>');
    $(window).scroll(function () {
      $("#btnAddToCart").each(function () {
        if (isScrolledIntoView($("#product-detail-page-vue")) && elementVisible == false || isScrolledIntoView($('#iOSAppLink')) && elementVisible == false) {
          elementVisible = true;
          $(".sticky_addToCart").removeClass("sticky_addToCart");
          $('.messages-starticon').removeClass("moveChatIcon");
          $('#WhiteBackground').hide();
        } else if (!isScrolledIntoView($(this)) && elementVisible == true) {
          elementVisible = false;
          $('#StickyButtonWrapper').addClass('sticky_addToCart');
          $('.messages-starticon').addClass("moveChatIcon");
          $('#WhiteBackground').show();
        }
      });
    });
  }
}, 50);