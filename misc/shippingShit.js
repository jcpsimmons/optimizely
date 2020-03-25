window.addEventListener("DOMContentLoaded", function() {
  document
    .querySelector(".search-form-container button")
    .addEventListener("click", function() {
      handlerInterval();
    });

  document
    .getElementById("cityOrZipCodeInput")
    .addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        handlerInterval();
      }
    });

  function handlerInterval() {
    var tmpInt = setInterval(function() {
      if (
        document.querySelectorAll(".delivery-options-table tr td").length > 0
      ) {
        try {
          swapDeliveryHtml();
          clearInterval(tmpInt);
        } catch (error) {}
      }
    }, 50);
  }

  function swapDeliveryHtml() {
    // var pricesOverNinetyNine =
    //   [
    //     ...document.querySelectorAll(
    //       ".delivery-options-table tr td:nth-of-type(3)"
    //     )
    //   ].filter(function(el) {
    //     return parseInt(el.textContent.trim().replace(/\$|,/g, "")) > 99;
    //   }).length > 0;
    // if (!pricesOverNinetyNine) {
    //   document.querySelector(".full-service-header").innerHTML =
    //     '<span><img src="/Content/images/assets/full-service-delivery-40x40.png"></span> <span> Full Service Delivery $99 </span>';
    // }

    document.querySelector(".free-pickup-list").innerHTML =
      "<ul><li>Only available in Arizona</li></ul";

    document.querySelector(".full-service-list").innerHTML =
      "<ul><li> Placement of Items(s) in room(s) of choice </li> <li> Assembly of all items </li> <li> Removal of all boxes and debris </li></ul>";

    document
      .querySelector(".search-form-container button")
      .addEventListener("click", function() {
        handlerInterval();
      });

    document
      .getElementById("cityOrZipCodeInput")
      .addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          handlerInterval();
        }
      });
  }
});
