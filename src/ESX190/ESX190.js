const ESX190 = () => {
  let state = {
    currentProduct: {
      name: utag_data.product_name[0],
      size: "",
      type: "",
      currentProduct: true,
    },
    //  searchWords ends up acting like a switch statement - early cases will override later cases
    searchWords: [
      "canopy 4 piece",
      "canopy 3 piece",
      "panel 4 piece",
      "panel 3 piece",
      "platform 4 piece",
      "platform 3 piece",
      "sleigh 4 piece",
      "sleigh 3 piece",
      "poster 4 piece",
      "poster 3 piece",
      "storage 4 piece",
      "storage 3 piece",
      "sleigh bed",
      "poster bed",
      "canopy bed",
      "platform bed",
      "panel bed",
      "storage bed",
      "upholstered headboard with metal",
      "4 piece",
      "3 piece",
    ], // words that can throw a product match in AITC
    alsoInThisCollection: [], // will be arr of objects - params: name,link,size,currentProduct
    sortingOrder: ["queen", "eastern king", "california king"], // the sizes required for the experiment in the correct order to display on the page
    sortedProducts: [], // sorted list of prods in same category. INCLUDES current product
    html: "",
  };

  // Takes arr of objects with name param to be sorted by state.sortingOrder
  const sortedItems = (r) => {
    let sortedArr = [];
    state.sortingOrder.forEach((s) => {
      let match;
      match = r.filter((x) => {
        return x.name.toLowerCase().search(s) > -1 && x.currentProduct;
      })[0];

      console.log("match", match);

      if (typeof match == "undefined") {
        match = r.filter((x) => {
          // this is returning multiple prods sometimes but you're truncating the right ones out
          if (x.name.toLowerCase().search(s) > -1 && x.currentProduct) {
            return true;
          } else if (
            x.name.toLowerCase().search(s) > -1 &&
            x.name.toLowerCase().search(state.currentProduct.type) > -1
          ) {
            return true;
          }
        })[0];
      }

      sortedArr.push(match);
    });
    return sortedArr;
  };

  // Figure out what the current product type is
  state.currentProduct.type = state.searchWords.filter((w) => {
    return state.currentProduct.name.toLowerCase().search(w) > -1;
  })[0];

  // Figure out what the current product size is
  state.currentProduct.size = state.sortingOrder.filter((w) => {
    return state.currentProduct.name.toLowerCase().search(w) > -1;
  })[0];

  // Get data from Also in This Collection
  // then filter it down by the product type
  state.alsoInThisCollection = [
    ...document.querySelectorAll("#thisCollection a"),
  ]
    .map((el) => {
      let link = el.href;
      let name = el.querySelector(".title").textContent;
      let size = state.sortingOrder.filter((s) => {
        return name.toLowerCase().search(s) > -1;
      })[0];
      return {
        name: name,
        link: link,
        size: size,
        currentProduct: false,
      };
    })
    .filter((item) => {
      return item.name.toLowerCase().search(state.currentProduct.type) > -1;
    });

  // Create array of all products including the current one, then sort them by size
  state.sortedProducts = sortedItems([
    ...state.alsoInThisCollection,
    state.currentProduct,
  ]);

  document.querySelector("head").insertAdjacentHTML(
    "beforeend",
    `
      <style>
        #ESX190 {
          display: flex;
          width: 100%;
          justify-content: start;
          margin-bottom: 1rem;
        }
        #ESX190 * {
          text-transform: capitalize;
          font-size: 1.4rem;
          font-weight: 600;
          white-space: nowrap;
        }
        #ESX190 *:not(a) {
          border: 1px solid #333;
          transition: 0.3s;
          border-radius: 2px;
        }
        #ESX190 a:hover button {
          background-color: #eee;
        }
        #ESX190 button {
          background-color: #fff;
          color: #333;
          padding: 1rem 1.5rem;
        }
        #ESX190 > *:nth-child(n + 2) {
          margin-left: 1rem;
        }
        #ESX190 .active-button {
          background-color: #333;
          color: #fff;
          cursor: initial;
        } /* other page style tweaks */
        #price-section {
          margin-bottom: 1rem !important;
        }
      </style>
    `
  );

  state.html = `${state.sortedProducts
    .map((x) => {
      console.log(x);
      let tmp = `<button class=${x.currentProduct ? "active-button" : ""}>${
        x.size
      }</button>`;
      tmp = x.currentProduct ? tmp : `<a href="${x.link}">${tmp}</a>`;
      return tmp;
    })
    .join("")}`;

  state.html = `<div id="ESX190"><span>View Other Sizes</span>${state.html}</div>`;

  document
    .getElementById("price-section")
    .insertAdjacentHTML("afterend", state.html);

  // Add event listener for optimizely
  document.addEventListener("click", (e) => {
    if (e.target.closest("#ESX190")) {
      // Click event for tracking
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "clickSizeOpts",
      });
    }
  });
};

var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    $(document).ready(function() {
      ESX190();
    });
  }
}, 50);
