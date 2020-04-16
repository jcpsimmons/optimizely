const injectCss = () => {
  document.querySelector("head").insertAdjacentHTML(
    "beforeend",
    `
  <style>


  #ESX178, #ItemsInCartScroll { padding-top: 2rem; } #ESX178 { overflow: hidden; } #ESX178 .slick-row > div { visibility: hidden; } #ESX178 .slick-slide { width: auto !important; padding-left: 2rem !important; } #ESX178 .slick-slide a { border: none; } #ESX178 .slick-slide a img { width: 16rem; } #ESX178 .IICText { padding: 0 2rem; justify-content: space-between; } #ESX178 .IICText .flex-item > * { display: inline; } #ESX178 .slick-initialized .slick-slide { padding: 0; } #ESX178 .nextArrow, #ESX178 .prevArrow { cursor: pointer; position: absolute; z-index: 1; top: 50%; transition: 0.25s; opacity: 0; } #ESX178:hover .nextArrow, #ESX178:hover .prevArrow { opacity: 1; } #ESX178 .prevArrow { transform: translateY(-50%) scaleX(-1); left: 2.5rem; } #ESX178 .nextArrow { transform: translate(-50%, -50%); } @media (max-width: 1199px) { #ESX178 h3 { font-size: 1.5rem; } #ESX178 p { font-size: 1.3rem; } } #ESX178 p.prodtitle { width: 17.5rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  </style>
  
  `
  );
};

const initSlick = () => {
  $("#ESX178 .slickitems").slick({
    arrows: false,
    slidesToScroll: 4,
    infinte: false,
    variableWidth: true,
    arrows: true,
    dots: true,
    nextArrow:
      '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive nextArrow">',
    prevArrow:
      '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive prevArrow">',
  });
};

const checkEligible = () => {
  if (
    document.querySelector(".progress__actual-value.text-blue.font-weight-600")
  ) {
    return (
      501 -
        parseFloat(
          document
            .querySelector(".progress__actual-value.text-blue.font-weight-600")
            .textContent.replace("$", "")
        ) <
      50
    );
  } else {
    return false;
  }
};

const getCartTotal = () => {
  // freeShippingSlider
  try {
    return parseFloat(
      document
        .querySelector(".progress__actual-value.text-blue.font-weight-600")
        .textContent.replace("$", "")
    );
  } catch (error) {
    return false;
  }
};

const genHtml = (prods) => {
  // takes array of objects, returns HTML

  // create image tiles
  let html = prods
    .map((p) => {
      return `
      <div>
        <a href="${p.url}"
          ><img class="img-responsive" src="${p.thumb_image}" />
          <p class="prodtitle">${p.title}</p>
          <p class"prodprice">$${parseInt(p.price)}</p>
          </a
        >
        </div>
      `;
    })
    .join("");

  // add banner and nest in div with ID
  html = `
    <div id="ESX178">
      <a
        href="https://www.livingspaces.com/search?term=decor&sale_price=%5b${
          state.need
        }+TO+${state.need + 20}%5d&sortby=sale_price+asc"
        ><h2>Add $${state.need} to get FREE shipping</h2></a
      ><div class="slickitems">${html}</div>
    </div>
  `;

  return html;
};

const bloomreachApiCall = () => {
  $.ajax({
    url: `https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&ptype=category&request_type=search&search_type=keyword&request_id=b0311963-1ef8-4e98-8a27-52a58fcddd7f&url=https://www.livingspaces.com/shopping-cart&q=decor&start=0&rows=8&fl=pid,price,thumb_image,url,title,sale_price&fq=sale_price:[${
      state.need
    }%20TO%20${state.need +
      20}]&sort=sale_price%20asc&fq=reviews:%224.0%22OR%224.1%22OR%224.2%22OR%224.3%22OR%224.4%22OR%224.5%22OR%224.6%22OR%224.7%22OR%224.8%22OR%224.9%22OR%225.0%22`,
    success: function(result) {
      var html = genHtml(result.response.docs);
      document
        .querySelector(".cart-main-content")
        .insertAdjacentHTML("afterend", html);
      initSlick();
    },
  });
};

// can call this whenever page changes to update everything - it takes state to see if anything has changed
const updateState = (oldState) => {
  state = {
    zip: utag_data["cp.lsf-selected-zip-code"],
    cartTotal: getCartTotal(),
    need: 0,
    moreOptionsUrl:
      "https://www.livingspaces.com/search?term=decor&sale_price=%5b9+TO+29%5d&sortby=sale_price+asc",
  };

  state.need = 501 - state.cartTotal;
  state.moreOptionsUrl = `https://www.livingspaces.com/search?term=decor&sale_price=%5b${
    state.need
  }+TO+${state.need + 20}%5d&sortby=sale_price+asc`;

  if (oldState == state) {
    return state;
  } else if (oldState == {} || oldState !== state) {
    // Put function calls here that need to happen if INIT or if state changes (HTML updates!)
    bloomreachApiCall();
    return state;
  }
};

// must be 501 pretax for freeship

const observer = new MutationObserver((mutationsList, observer) => {
  // Use traditional 'for loops' for IE 11
  for (let mutation of mutationsList) {
    if (
      mutation.type === "childList" ||
      mutation.type === "attributes" ||
      mutation.type === "characterData"
    ) {
      console.log("mutation");
      if (checkEligible()) {
        console.log("stateUpdate");
        state = updateState({});
      } else if (document.getElementById("ESX178")) {
        console.log("removeHTML");
        let el = document.getElementById("ESX178");
        el.parentNode.removeChild(el);
      }
    }
  }
});

observer.observe(document.querySelector(".cart-main-content"), {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true,
});

// init code here
let state;
if (checkEligible()) {
  injectCss();
  state = updateState({});
} else {
  injectCss();
  state = {};
}
