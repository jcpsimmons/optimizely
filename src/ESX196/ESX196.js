const ESX196 = () => {
  let HEADER_IN_VIEW = true;
  let MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const headerIsVisible = () => {
    let rect = document.querySelector("header").getBoundingClientRect();
    return rect.bottom > 0;
  };

  const adjustButtonPosition = (headerVisible) => {
    let headerHeight;
    if (headerVisible) {
      headerHeight = document.querySelector("header").getBoundingClientRect()
        .bottom;
    }

    // let pageTopOffset = document.documentElement.scrollTop;

    document.getElementById("ESX196").style.top = `calc(1rem + ${
      HEADER_IN_VIEW ? headerHeight : 0
    }px)`;
  };

  document.addEventListener("scroll", () => {
    HEADER_IN_VIEW = headerIsVisible();
    adjustButtonPosition(HEADER_IN_VIEW);
  });

  const style = `
  <style>
    #ESX196 {
      z-index: 99;
      position: fixed;
      top: ${MOBILE ? "14rem" : "17rem"};
      left: ${MOBILE ? "0" : "3rem"};
      transition: top .2s;
    }
    #ESX196 button {
      color: #fff;
      background: #00699a;
      font-size: 1.6rem;
      border-radius: ${MOBILE ? "0 0.25rem 0.25rem 0" : "0.25rem"};
      transition: 0.2s;
      ${MOBILE ? "min-width: 5rem" : ""}
    }
    #ESX196 i {
      font-size: 1.3rem;
      margin-right: 1rem;
    }
    #ESX196 span {
      margin-right: 1rem;
    }
    #ESX196 button:hover, #ESX196 button:active, #ESX196 button:visited {
      background-color: #024f73;
    }
  </style>
`;

  document.querySelector("head").insertAdjacentHTML("beforeend", style);
  document
    .querySelector("body")
    .insertAdjacentHTML(
      "beforeend",
      `<div id="ESX196"><a href="/shopping-cart"><button class="btn primary-button" role="button"><i class="fa fa-chevron-left" aria-hidden="true"></i><span>Back to Cart</span></button></a></div>`
    );
};

if (document.readyState === "complete") {
  ESX196();
} else {
  document.addEventListener("DOMContentLoaded", ESX196);
}
