// I'd like to update the language of the omni-channel section of the cart.

// This is the current language: Get everything delivered for $99.00
// If there are no items in their cart, I'd like to update that to "Get unlimited items delivered for $99"

// Let's make sure to take the .00 off after the $99



// VARIATION CODE
window.addEventListener(
    "load",
    function () {
        try {
            if (window.jQuery) {
                newHtml = $("#omniinventory .list-unstyled:nth-of-type(2) li").html().replace("Get everything delivered for $99.00", "Get unlimited items delivered for $99");
                $("#omniinventory .list-unstyled:nth-of-type(2) li").html(newHtml);
            }
        } catch (e) { }
    },
    false
);

// JS Function Code
function jsCondition() {
    return Number($("span.counter.cart").text()) == 0
}