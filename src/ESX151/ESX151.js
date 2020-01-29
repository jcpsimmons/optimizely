var anotherInterval = setInterval(() => {
    if (typeof window.jQuery !== "undefined") {
        clearInterval(anotherInterval);
        var $ = window.jQuery;

        // CREATE AND ADD CSS
        const css =
            "<style> .sticky_addToCart { position: fixed; z-index: 999; display: block; bottom: 3rem; left: 50%; transform: translateX(-50%); } .moveChatIcon { top: -60px; } .messages-starticon { transition: 0.2s } #WhiteBackground { display:none; z-index: 100; background-color:rgba(255,255,255,.9); border-top: 1px solid grey; position: fixed; left: 0; right: 0; bottom: 0; height: 10rem; box-shadow: 0 -0.6px 4.5px 2.2px #757575; }</style>";
        $('head').after(css)


        var elementVisible = true;
        // Initialize
        $("#product-detail-page-vue form").before('<div id="WhiteBackground"></div>').wrap(
            '<div id="StickyButtonWrapper"></div>'
        );

        // THIS detects scroll direction - you can use this variable in the bottom ~300-400px of the page or so

        var lastScrollTop = 0;
        var scrollUp = false;

        $(window).scroll(function (event) {
            var st = $(this).scrollTop();
            if (st > lastScrollTop) {
                scrollUp = false
                console.log('scrollUp', scrollUp)
            } else {
                scrollUp = true
                console.log('scrollUp', scrollUp)
            }
            lastScrollTop = st;
        });

        $(window).scroll(function () {
            $("#btnAddToCart").each(function () {
                // Button in main view
                if (
                    isScrolledIntoView($("#product-detail-page-vue")) &&
                    (elementVisible == false) || !bottomActivationArea()
                ) {
                    console.log("in view");
                    elementVisible = true;
                    $(".sticky_addToCart").removeClass("sticky_addToCart");
                    $('.messages-starticon').removeClass("moveChatIcon")
                    $('#WhiteBackground').hide()
                    // Sticky button
                } else if ($(window).scrollTop() > 1 && !isScrolledIntoView($(this)) && (elementVisible == true)) {
                    $('body').css('margin-top', '0')
                    console.log("scrolled out of view");
                    elementVisible = false;
                    $('#StickyButtonWrapper').addClass('sticky_addToCart')
                    $('.messages-starticon').addClass("moveChatIcon")
                    $('#WhiteBackground').show()
                }
            });
        });

        function isScrolledIntoView(elem) {
            var $elem = $(elem);
            var $window = $(window);

            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();

            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        function bottomActivationArea() {
            var additionalSpacing;
            if (elementVisible) { additionalSpacing = $('#WhiteBackground').height() } else { additionalSpacing = 0 }
            var pxFromBottom = $(document).height() - $(window).scrollTop() - $(window).height()
            console.log('pxFromBottom', pxFromBottom)
            if (pxFromBottom > 500 + additionalSpacing) { return true } else { return false }
        }
    }
}, 50);


// || (isScrolledIntoView($('#iOSAppLink') && (elementVisible == false)))