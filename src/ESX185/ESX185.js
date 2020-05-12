const addCSS = () => {
  const css = `
    <style>
      .product-info-component .thumb-list {
        height: 12rem !important;
        text-align: left!important;
      }
      @media (max-width: 1199px) {
        .product-info-component .thumb-list {
          height: 10rem !important;
        }
      }
      @media (max-width: 991px) {
        .product-info-component .thumb-list {
          height: 11rem !important;
        }
      }
    </style>
  `;

  document.querySelector("head").insertAdjacentHTML("beforeend", css);
};

const findLastVisibleImage = () => {
  const output = {
    imagesShown: 0,
    imagesHidden: 0,
    colorPreviewThumb: false,
    needsSpan: false,
  };

  const totalImages = document.querySelectorAll(".row.thumb-list > div");
  const lastImgIndex = totalImages.length > 14 ? 14 : totalImages.length;

  if (document.querySelectorAll(".row.thumb-list .thumb.spin").length > 0) {
    output.colorPreviewThumb = true;
  }

  if (
    document.querySelectorAll(".row.thumb-list > div").length > 14 ||
    (document.querySelectorAll(".row.thumb-list > div").length > 13 &&
      output.colorPreviewThumb)
  ) {
    output.needsSpan = true;
  }

  output.imagesShown = lastImgIndex;
  output.imagesHidden = totalImages.length - lastImgIndex;
  console.log(output);
  return output;
};

const unbindModal = () => {
  window.$(".product-info-component  div.img-click").each(function() {
    var x = window.$(this).unbind("click");
  });
};

const eventListeners = () => {
  let {
    imagesShown,
    imagesHidden,
    colorPreviewThumb,
    needsSpan,
  } = findLastVisibleImage();

  // add event listener on click
  document.addEventListener("click", (e) => {
    // click new modal launch tile
    if (
      e.target.closest(`.row.thumb-list > div:nth-of-type(${imagesShown})`) &&
      needsSpan
    ) {
      // if there's a color preview thumb or 360 thumb, it won't 'count' in the selector because it's not a div, so remove one from the index
      imagesShown = colorPreviewThumb ? imagesShown - 1 : imagesShown;

      window.$("#viewmoreComponentModal").modal("show");
      // on modal launch add active class to correct image
      let el = document.querySelector(
        `.view-more-component__thumbnails > div:nth-of-type(${imagesShown})`
      );
      el.classList.add("active");
      el.focus();

      // force jumbotron image to match thumb
      let thumbSrc = document.querySelector(
        `.view-more-component__thumbnails > div:nth-of-type(${imagesShown}) img`
      ).src;

      // if customer image - get larger version, otherwise get normal larger version
      if (thumbSrc.search("photorank") > -1) {
        thumbSrc = thumbSrc.replace("thumbnail", "normal");
      } else {
        thumbSrc = `${thumbSrc.split("?")[0]}?w=1000&h=674&mode=pad`;
      }
      console.log("thumbSrc", thumbSrc);

      document.querySelector(".view-more-component__image img").src = thumbSrc;

      // track optimizely click
      console.log("track optimizely launch modal");
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "185_lm",
      });
    } else if (e.target.closest(".row.thumb-list > div")) {
      console.log("track optimizely click other thumbnail");
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "185_cat",
      });
    }
  });
};

const setTabIndexes = () => {
  const { imagesShown, imagesHidden } = findLastVisibleImage();
  for (let i = 1; i < imagesShown + 1; i++) {
    document.querySelector(`.row.thumb-list > div:nth-of-type(${i})`).tabIndex =
      "0";
  }
};

const moveMoreText = () => {
  const { imagesShown, imagesHidden, needsSpan } = findLastVisibleImage();

  // find the more tile - by class name view-more
  const curViewMore = document.querySelector(".row.thumb-list .view-more");
  const spanText = curViewMore.querySelector(".view-more-number");
  // save clone to variable
  const spanTextCopy = spanText.cloneNode(true);
  spanTextCopy.textContent = `+ ${imagesHidden} more`;

  // delete og
  spanText.parentElement.removeChild(spanText);
  // remove view more from class list
  curViewMore.classList.remove("view-more");
  // paste more html on last image visible

  // only add the '+ 5 more' span if there will be additional images hidden past the two rows
  if (needsSpan) {
    document
      .querySelector(`.row.thumb-list > div:nth-of-type(${imagesShown})`)
      .appendChild(spanTextCopy);
    // add view-more to that image's classlist
    document
      .querySelector(`.row.thumb-list > div:nth-of-type(${imagesShown})`)
      .classList.add("view-more");
  }
};

var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    addCSS();
    moveMoreText();
    setTabIndexes();
    unbindModal();
    eventListeners();
  }
}, 50);
