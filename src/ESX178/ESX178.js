const checkEligible = () => {
  if (
    document.querySelector(".progress__actual-value.text-blue.font-weight-600")
  ) {
    return (
      parseFloat(
        document
          .querySelector(".progress__actual-value.text-blue.font-weight-600")
          .textContent.replace("$", "")
      ) +
        50 <
      501
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
  let html = prods
    .map((p) => {
      return `<a href="${p.url}"><img src="${p.thumb_image}"/><p>${
        p.title
      } $${parseInt(p.price)}</p></a>`;
    })
    .join("");
  html = `<div id="ESX178>${html}</div>`;
  return html;
};

const bloomreachApiCall = () => {
  $.ajax({
    url: `https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&ptype=category&request_type=search&search_type=keyword&request_id=b0311963-1ef8-4e98-8a27-52a58fcddd7f&url=https://www.livingspaces.com/shopping-cart&q=decor&start=0&rows=8&fl=pid,price,thumb_image,url,title,sale_price&fq=sale_price:[${
      state.need
    }%20TO%20${state.need + 20}]&sort=sale_price%20asc`,
    success: function(result) {
      var html = genHtml(result.response.docs);
      document
        .querySelector(".cart-main-content")
        .insertAdjacentHTML("afterend", html);
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

if (checkEligible()) {
  state = updateState({});
}

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
