var ESX182 = function ESX182() {
  var sku;

  try {
    var removedQueryString = window.location.href.split("?")[0];
    var trySku = removedQueryString.split("-");
    sku = trySku[trySku.length - 1];
  } catch (error) {
    sku = window.location.href.match(/\d{5,6}/)[0];
  }

  var signatureImageHtml = '<img id="ESX182" style="display:none;margin-bottom: 1rem" src="https://www.livingspaces.com/api/image?recId='.concat(sku, '&width=70&height=47&mode=pad">');
  document.getElementById("back-to-top").insertAdjacentHTML("afterbegin", signatureImageHtml);
  var elemVisible = false;
  var scrollTarget = document.getElementById("productDetails");
  var signatureImage = document.getElementById("ESX182");
  var timesSeen = 0;
  document.addEventListener("scroll", function (e) {
    var modScrollOffset = document.documentElement.scrollTop + window.innerHeight / 2;

    if (modScrollOffset >= scrollTarget.offsetTop && elemVisible == false) {
      signatureImage.style.display = "block";
      elemVisible = true;

      if (timesSeen == 0) {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "182_usii"
        });
      }
    } else if (modScrollOffset < scrollTarget.offsetTop && elemVisible == true) {
      signatureImage.style.display = "none";
      elemVisible = false;
    }
  });
  document.getElementById("ESX182").addEventListener("click", function () {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "182_CSIH",
      tags: {
        revenue: 0,
        value: 0.0
      }
    });
  });
};

var waitForBtt = setInterval(function () {
  if (document.getElementById("back-to-top")) {
    ESX182();
    clearInterval(waitForBtt);
  }
}, 50);