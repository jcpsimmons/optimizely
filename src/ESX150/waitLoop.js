var anotherInterval = setInterval(function () {
    if (typeof window.jQuery !== "undefined") {
        var $ = window.jQuery;
        $("body").on('click', '#SuggestedProducts', function (e) {
            window["optimizely"] = window["optimizely"] || [];
            window["optimizely"].push({
                type: "event",
                eventName: "clickSuggestedProducts",
                tags: {
                    revenue: 0, // Optional in cents as integer (500 == $5.00)
                    value: 0.0 // Optional as float
                }
            });
        });
        clearInterval(anotherInterval);
    }
}, 50);
