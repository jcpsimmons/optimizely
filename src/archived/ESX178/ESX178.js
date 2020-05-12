var SIZE = "large";

const ESX178 = (version) => {
  // CONFIG VARS
  // arg takes small or large version
  var $ = window.jQuery; // need to make sure scoped correctly for ajax

  let INJECTION_LOCATION;
  let SLIDES_TO_SCROLL;

  if (version == "small") {
    INJECTION_LOCATION = ".cart-main-content";
    SLIDES_TO_SCROLL = 3;
  } else {
    INJECTION_LOCATION = ".cart-content .row:first-of-type";
    SLIDES_TO_SCROLL = 6;
  }

  const injectCss = () => {
    document.querySelector("head").insertAdjacentHTML(
      "beforeend",
      `
  <style>


  #ESX178,
  #ItemsInCartScroll {
    padding-top: 2rem;
  }
  #ESX178 {
    border: 1px solid #d5d5d5;
    overflow: hidden;
    margin-top: 4rem;
    padding: 1.2rem 0
  }
  #ESX178 .slick-row > div {
    visibility: hidden;
  }
  #ESX178 .slick-slide {
    width: auto !important;
    padding-left: 2rem !important;
  }
  #ESX178 .slick-slide a {
    border: none;
  }
  #ESX178 .slick-slide a img {
    width: 16rem;
  }
  #ESX178 .slick-initialized .slick-slide {
    padding: 0;
  }
  #ESX178 .nextArrow,
  #ESX178 .prevArrow {
    width: 4rem;
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: 38%;
    transition: 0.25s;
    opacity: 0;
  }
  #ESX178 .slickitems:hover .nextArrow,
  #ESX178 .slickitems:hover .prevArrow {
    opacity: 1;
  }
  #ESX178 .prevArrow {
    transform: translateY(-50%) scaleX(-1);
    left: 2.5rem;
  }
  #ESX178 .nextArrow {
    transform: translate(-50%, -50%);
    right: 0;
  }
  @media (max-width: 1199px) {
    #ESX178 h3 {
      font-size: 1.5rem;
    }
    #ESX178 p {
      font-size: 1.3rem;
    }
  }
  #ESX178 p.prodtitle, #ESX178 p.prodprice {
    width: 15.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  #ESX178 p.prodtitle {
    margin-top: .5rem;
    margin-bottom: 0;
  }
  
  #ESX178 p.prodprice {
    font-weight:bold;
  }

  #ESX178 .header {
    margin-left: 1.7rem;
    font-size: 2rem!important;
    font-weight: 600!important;
  }

  #ESX178 .savings {
    font-size: 1.4rem;
    font-weight: 600;
    color: #ffffff;
    padding: .2rem .7rem;
    background: #00699a;
    margin-left: 1.4rem;
  }

  #ESX178 .slickitems {
    margin-top: 2rem;
  }

  #ESX178 .slick-dots {
    bottom: -2.5rem!important;
  }

  #ESX178 .viewall {
    float: right;
    font-size: 1.4rem;
    font-weight: normal;
    color: #333333;
    margin-right: 1.2rem;
  }
  #ESX178 .viewall:hover {
    text-decoration: underline;
  }

  #ESX178 .slick-dots li button:before {
    content: "\\f10c"!important;
  }
  
  #ESX178 .slick-dots li.slick-active button:before {
    content: "\\f111"!important;
  }


  </style>
  
  `
    );
  };

  const initSlick = () => {
    $("#ESX178 .slickitems").slick({
      slidesToScroll: SLIDES_TO_SCROLL, // this messes up the active dot/dot counting
      slidesToShow: SLIDES_TO_SCROLL,
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

  const addEventListeners = () => {
    // Swipe slider
    $("#ESX178").on("swipe", function(event, slick, direction) {
      console.log("Swipe Slider");
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "178_iws",
      });
    });

    // Click dots or arrows
    [
      ...document.querySelectorAll("#ESX178 .slick-dots, #ESX178 .slick-arrow"),
    ].forEach((el) => {
      el.addEventListener("click", () => {
        console.log("Click Dots and Arrows");
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "178_iws",
        });
      });
    });

    // Click product
    [...document.querySelectorAll("#ESX178 .slick-slide")].forEach((el) => {
      el.addEventListener("click", () => {
        console.log("Click product");
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "178_cpl",
        });
      });
    });

    // Click view more link
    document.querySelector("#ESX178 .viewall").addEventListener("click", () => {
      console.log("Click view more link");
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "178_cva",
      });
    });
  };

  const checkEligible = () => {
    if (
      document.querySelector(
        ".progress__actual-value.text-blue.font-weight-600"
      )
    ) {
      return (
        parseInt(
          document
            .querySelector("[for=tohome-option] span.label-n-t")
            .innerText.replace("$", "")
        ) == 59 &&
        parseInt(
          document
            .querySelector(".free-shipping-incentive__title")
            .textContent.replace(/[^0-9\.]/g, "")
        ) < 59
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

  const getShippingCost = () => {
    let spans = [...document.querySelectorAll(".delivery-option label span")];
    spans = spans.filter((s) => {
      return s.textContent.trim() == "Shipping";
    });
    return parseInt(spans[0].nextElementSibling.textContent.replace("$", ""));
  };

  const genHtml = (prods) => {
    // takes array of objects, returns HTML

    // create image tiles
    let html = prods
      .map((p) => {
        return `
      <div>
        <a href="${p.url}"
          ><img class="img-responsive" src="${p.thumb_image.split("?")[0] +
            "?w=160&h=108&mode=pad"}" />
          <p class="prodtitle">${p.title}</p>
          <p class="prodprice">$${parseInt(p.price)}</p>
          </a
        >
        </div>
      `;
      })
      .join("");

    // add banner and nest in div with ID
    html = `
    <div id="ESX178">
     <span class="header">Add $${state.need} to get FREE shipping</span>
        <span class="savings">SAVE $${state.shippingCost - state.need}</span>
        <a
        href="https://www.livingspaces.com/search?term=decor&sale_price=%5b${
          state.need
        }+TO+${state.need + 20}%5d&sortby=sale_price+asc"
        >
        <span class="viewall">View More Options</span>
        </a
      ><div class="slickitems">${html}</div>
    </div>
  `;

    return html;
  };

  const getNeedAmt = () => {
    return parseInt(
      document
        .querySelector(".free-shipping-incentive__title")
        .textContent.match(/[0-9]+/g)[0]
    );
  };

  const bloomreachApiCall = () => {
    $.ajax({
      url: `https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&ptype=category&request_type=search&search_type=keyword&request_id=b0311963-1ef8-4e98-8a27-52a58fcddd7f&url=https://www.livingspaces.com/shopping-cart&q=decor&start=0&rows=12&fl=pid,price,thumb_image,url,title,sale_price&fq=sale_price:[${
        state.need
      }%20TO%20${state.need +
        20}]&sort=sale_price%20asc&fq=reviews:%224.0%22OR%224.1%22OR%224.2%22OR%224.3%22OR%224.4%22OR%224.5%22OR%224.6%22OR%224.7%22OR%224.8%22OR%224.9%22OR%225.0%22`,
      success: function(result) {
        var html = genHtml(result.response.docs);
        document
          .querySelector(INJECTION_LOCATION)
          .insertAdjacentHTML("afterend", html);
        initSlick();
        addEventListeners();
      },
    });
  };

  // can call this whenever page changes to update everything - it takes state to see if anything has changed
  const updateState = (oldState) => {
    state = {
      zip: utag_data["cp.lsf-selected-zip-code"],
      cartTotal: getCartTotal(),
      need: 0,
      shippingCost: getShippingCost(),
      moreOptionsUrl:
        "https://www.livingspaces.com/search?term=decor&sale_price=%5b9+TO+29%5d&sortby=sale_price+asc",
    };

    state.need = getNeedAmt();

    state.moreOptionsUrl = `https://www.livingspaces.com/search?term=decor&sale_price=%5b${
      state.need
    }+TO+${state.need + 20}%5d&sortby=sale_price+asc`;

    console.log("oldState", oldState);
    console.log("state", state);

    if (JSON.stringify(oldState) == JSON.stringify(state)) {
      return state;
    } else if (
      oldState == {} ||
      JSON.stringify(oldState) !== JSON.stringify(state)
    ) {
      // REMOVE element if it exists already
      if (document.getElementById("ESX178")) {
        let el = document.getElementById("ESX178");
        el.parentElement.removeChild(el);
      }

      bloomreachApiCall();
      return state;
    }
  };

  // init code here
  let state;
  if (checkEligible()) {
    injectCss();
    state = updateState({});
  } else {
    injectCss();
    state = {};
  }

  // Observe changes and update accordingly
  const observer = new MutationObserver((mutations) => {
    // On mutation check if eligibility is met -
    if (checkEligible()) {
      // Update data
      state = updateState(state);
    } else {
      // Remove if not eligible
      if (document.getElementById("ESX178")) {
        let el = document.getElementById("ESX178");
        el.parentElement.removeChild(el);
      }
    }
  });
  var config = {
    attributes: true,
    childList: true,
    subtree: true,
  };
  observer.observe(document.querySelector(".cart-change-zipcode"), config);
  observer.observe(document.querySelector(".cart-main-content"), config);
};

var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    ESX178(SIZE);
  }
}, 50);
