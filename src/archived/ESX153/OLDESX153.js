const injectCSS = () => {
  let css =
    "#DimensionsModal { display: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 5; color: red; } #ModalBlackout { display: none; height: 100vh; position: fixed; width: 100vw; overflow: hidden; background-color: rgb(0, 0, 0, 0.6); top: 0; left: 0; z-index: 3; overflow: hidden; } #ModalX { color: #fff; font-size: 4rem; position: relative; float: right; margin-right: -2rem; } .stop-scrolling { height: 100%; overflow: hidden; }";
  css = `<style>${css}</style>`;
  $("head").append(css);
};

const getImageLink = () => {
  let imgSrc = $("img[alt$='Dimensions Diagram']")[0].src
  imgSrc = `${imgSrc.split('?')[0]}?w=1000&h=674&mode=pad`
  return imgSrc
}

const injectHTML = () => {
  // Modal and backdrop
  $("body").prepend('<div id="ModalBlackout"></div>');
  $("body").prepend(
    `<div id="DimensionsModal"><i class="fa fa-times" aria-hidden="true" role="button" id="ModalX"></i><img class="img-responsive" src="${getImageLink()}"></div>`
  );
  // PDP Icon for clicking
  $(".product-icons ul.list-unstyled").append(
    `<li><img id="ProductDimensionsModalButton" role="button" src="https://via.placeholder.com/70x70?text=dimensions%20image" class="img-responsive " alt="${document.title} Dimensions Image"></li>`
  );
};

const addModalListeners = () => {
  // Show on icon press
  $("#ProductDimensionsModalButton").click(function () {
    console.log("button clicked");
    $("#DimensionsModal, #ModalBlackout").show();
    stopScroll(true);
  });

  // hide on x press
  $("#ModalX, #ModalBlackout").click(function () {
    $("#DimensionsModal, #ModalBlackout").hide();
    stopScroll(false);
  });

  // hide on esc key
  $(document).keyup(function (e) {
    if (e.key === "Escape" && document.getElementById('DimensionsModal').style.display == 'block') {
      $("#DimensionsModal, #ModalBlackout").hide();
      stopScroll(false);
    }
  });
};

const stopScroll = bool => {
  bool
    ? document.body.classList.add("stop-scrolling")
    : document.body.classList.remove("stop-scrolling");
};

var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;

    injectCSS();

    const sku = utag_data.product_id;
    injectHTML(sku);

    addModalListeners();
  }
}, 50);
