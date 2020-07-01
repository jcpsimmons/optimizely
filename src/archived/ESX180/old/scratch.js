let MODAL_IN_VIEW = false;

let SCROLL = window.pageYOffset;

document.addEventListener("scroll", () => {
  SCROLL = window.pageYOffset;
});

// takes true or false to lock scroll on page
function scrollLock(bool) {
  if (!document.getElementById("ESX180ScrollLock") && bool) {
    document.querySelector("head").insertAdjacentHTML(
      "beforeend",
      `
        <style id="ESX180ScrollLock">
          body {
            margin: 0 !important;
            height: 100% !important;
            overflow: hidden !important;
          }
          #ESX180ScrollOverlay {
            background: black;
            height: 100vh;
            width: 100vw;
            position: absolute;
            top: ${SCROLL}px;
            left: 0;
            overflow: hidden;
            z-index: 98;
            opacity: 0.7;
          }
        </style>
      `
    );

    document
      .querySelector("body")
      .insertAdjacentHTML("beforeend", `<div id="ESX180ScrollOverlay"></div>`);
  } else if (document.getElementById("ESX180ScrollLock") && !bool) {
    $("#ESX180Active").remove();
    $("#ESX180ScrollLock").remove();
    $("#ESX180ScrollOverlay").remove();
    document.querySelector(
      "#product-detail-page-vue .out-stock-wrapper"
    ).style.position = "inherit";
  }
}

const scrollToTop = () => {
  if (SCROLL !== 0) {
    window.scrollTo(0, 0);
  }
};

// adds modal style and displays modal
const addModalCode = () => {
  const el = document.querySelector(
    "#product-detail-page-vue .out-stock-wrapper"
  );

  el.style.position = "absolute";
  el.style.left = `calc(${-$("#product-detail-page-vue").offset()
    .left}px + 50vw)`;
  el.style.top = `calc(${SCROLL -
    $("#product-detail-page-vue").offset().top}px + ${
    window.pageYOffset
  }px + 50vh)`;

  const modalActiveStyle = `
    <style id="ESX180Active">
      #product-detail-page-vue .out-stock-wrapper {
        background: #fff;
        width: 80rem;
        height: 27rem;
        position: absolute;
        z-index: 99;
        transform: translate(-50%, -50%);
      }
      #product-detail-page-vue .out-stock-wrapper .out-stock,
      #product-detail-page-vue .out-stock-wrapper .like-holder {
        display: none;
      }
      #product-detail-page-vue .out-stock-wrapper form {
        display: flex;
        margin: auto;
        margin-top: 18rem;
        justify-content: center;
      }
      #product-detail-page-vue .out-stock-wrapper form > * {
        margin: auto;
        z-index: 101;
      }
      #product-detail-page-vue .out-stock-wrapper input {
        background: #fff;
        width: 30rem !important;
        margin-right: 1.6rem;
      }
      #btnEmailMeBackInStock {
        background-color: #bd5519;
        opacity: 1 !important;
        margin-top: 0 !important;
      }
      #ESX180TextOverlay {
        position: absolute;
        z-index: 100;
        top: 0;
        display: block !important;
        transform: translate(-50%, -50%);
        text-align: center;
      }
      #ESX180TextOverlay h3 {
        font-size: 3rem;
        padding-bottom: 2rem;
      }
      #ESX180TextOverlay h4 {
        font-size: 2rem;
      }
      #ESX180TextOverlay button {
        top: 0rem;
        position: absolute;
        right: 0rem;
        font-size: 5rem;
        opacity: 1;
      }
      #ESX180TextOverlay button span {
        color: #333!important;
        opacity: 1;
      }
    </style>
  `;

  document
    .querySelector("head")
    .insertAdjacentHTML("beforeend", modalActiveStyle);

  // add the text overlay
  const textOverlay = `
    <div id="ESX180TextOverlay" style="display:none;"><h3>Currently Out of Stock</h3><h4>We plan on getting more inventory, sign up to be alerted by email below</h4><button type="button" data-dismiss="modal" aria-label="Close" class="close" ><span aria-hidden="true">×</span></button></div>
    `;
  document
    .querySelector(".page.LsfVariantProxy")
    .insertAdjacentHTML("beforeend", textOverlay);

  // set up left position
  $("#ESX180TextOverlay").css(
    "left",
    `${$("#product-detail-page-vue .out-stock-wrapper").offset().left +
      $("#product-detail-page-vue .out-stock-wrapper").width() / 2}px`
  );

  // top position
  $("#ESX180TextOverlay").css(
    "top",
    `calc(${$("#product-detail-page-vue .out-stock-wrapper").offset().top +
      $("#product-detail-page-vue .out-stock-wrapper").height() /
        2}px - 4.5rem)`
  );
};

// event listeners
window.addEventListener("resize", () => {
  if (MODAL_IN_VIEW) {
    //   need to use a position reference element because the actual element moves on init
    const el = document.querySelector(
      "#product-detail-page-vue .out-stock-wrapper"
    );

    el.style.left = `calc(${-$("#product-detail-page-vue").offset()
      .left}px + 50vw)`;
    el.style.top = `calc(${SCROLL -
      $("#product-detail-page-vue").offset().top}px + ${window.pageYOffset}px)`;

    // set up left position
    $("#ESX180TextOverlay").css(
      "left",
      `${$("#product-detail-page-vue .out-stock-wrapper").offset().left +
        $("#product-detail-page-vue .out-stock-wrapper").width() / 2}px`
    );

    // top position
    $("#ESX180TextOverlay").css(
      "top",
      `calc(${$("#product-detail-page-vue .out-stock-wrapper").offset().top +
        $("#product-detail-page-vue .out-stock-wrapper").height() /
          2}px - 4.5rem)`
    );
  }
});

document.addEventListener("click", (e) => {
  if (e.target.id == "btnEmailMeBackInStock") {
    displayModal(false);
  }
});

document.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key == "Escape") {
    displayModal(false);
  }
});

const displayModal = (bool) => {
  MODAL_IN_VIEW = bool;
  if (bool) {
    scrollToTop();
    setTimeout(() => {
      addModalCode();
      scrollLock(true);
    }, 1);
  } else {
    scrollLock(false);
  }
};

displayModal(true);
