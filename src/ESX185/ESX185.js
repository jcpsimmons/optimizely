const addCSS = () => {
  const css = `
    <style>
      .product-info-component .thumb-list {
        height: 12rem !important;
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
  };

  const totalImages = document.querySelectorAll(".row.thumb-list > div");
  const lastImgIndex = totalImages.length > 14 ? 14 : totalImages.length;

  output.imagesShown = lastImgIndex;
  output.imagesHidden = totalImages.length - lastImgIndex;
  console.log(output);
  return output;
};

const unbindModal = () => {
  $(".product-info-component  div.img-click").each(function() {
    var x = $(this).unbind("click");
  });
};

const eventListeners = () => {
  const { imagesShown, imagesHidden } = findLastVisibleImage();

  // add event listener on click
  document.addEventListener("click", (e) => {
    if (e.target.closest(`.row.thumb-list > div:nth-of-type(${imagesShown})`)) {
      $("#viewmoreComponentModal").modal("show");
      // on modal launch add active class to correct image
      document
        .querySelector(
          `.view-more-component__thumbnails > div:nth-of-type(${imagesShown})`
        )
        .classList.add("active");
      document
        .querySelector(
          `.view-more-component__thumbnails > div:nth-of-type(${imagesShown})`
        )
        .focus();

      // force jumbotron image to match thumb
      let thumbSrc = document.querySelector(
        `.view-more-component__thumbnails > div:nth-of-type(${imagesShown}) img`
      ).src;

      thumbSrc = `${thumbSrc.split("?")[0]}?w=1000&h=674&mode=pad`;

      document.querySelector(".view-more-component__image img").src = thumbSrc;
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
  const { imagesShown, imagesHidden } = findLastVisibleImage();

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
  document
    .querySelector(`.row.thumb-list > div:nth-of-type(${imagesShown})`)
    .appendChild(spanTextCopy);
  // add view-more to that image's classlist
  document
    .querySelector(`.row.thumb-list > div:nth-of-type(${imagesShown})`)
    .classList.add("view-more");
};

addCSS();
moveMoreText();
setTabIndexes();
unbindModal();
eventListeners();

// document.querySelector(".row.thumb-list > div:nth-of-type(7)").addEventListener(
//   "click",
//   function(e) {
//     alert("Clickrd");
//     e.preventDefault();
//     this.outerHTML = this.outerHTML;
//   },
//   false
// );
