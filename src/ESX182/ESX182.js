var ESX182 = function ESX182() {
  console.debug("ESX182");
  // image find/insertion
  var sku; // fallback case in case split doesnt work

  try {
    var removedQueryString = window.location.href.split("?")[0];
    var trySku = removedQueryString.split("-");
    sku = trySku[trySku.length - 1];
  } catch (error) {
    sku = window.location.href.match(/\d{5,6}/)[0];
  }

  var signatureImageHtml = '<img id="ESX182" style="display:none;margin-bottom: 1rem" src="https://www.livingspaces.com/api/image?recId='.concat(
    sku,
    '&width=70&height=47&mode=pad">'
  );
  document
    .getElementById("back-to-top")
    .insertAdjacentHTML("afterbegin", signatureImageHtml); // scroll handler

  var elemVisible = false;
  var scrollTarget = document.getElementById("productDetails");
  var signatureImage = document.getElementById("ESX182");
  var timesSeen = 0;

  document.addEventListener("scroll", function(e) {
    // make it so it appears when target is halfway scrolled on page
    var modScrollOffset =
      document.documentElement.scrollTop + window.innerHeight / 2;

    if (modScrollOffset >= scrollTarget.offsetTop && elemVisible == false) {
      // console.log('greater');
      signatureImage.style.display = "block";
      elemVisible = true;
      if (timesSeen == 0) {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "182_usii",
        });
      }
    } else if (
      modScrollOffset < scrollTarget.offsetTop &&
      elemVisible == true
    ) {
      // console.log('lesser');
      signatureImage.style.display = "none";
      elemVisible = false;
    }
  });

  document.getElementById("ESX182").addEventListener("click", function() {
    //   OPTIM tracking
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "182_CSIH",
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
  });
};

var waitForBtt = setInterval(function() {
  if (document.getElementById("back-to-top")) {
    ESX182();
    clearInterval(waitForBtt);
  }
}, 50);
