const ESX190 = () => {
  let state = {
    currentProduct: {
      name: utag_data.product_name[0],
      size: "",
      type: "",
      currentProduct: true,
      sku: window.location.href.match(/[0-9]{5,7}$/gm)
        ? window.location.href.match(/[0-9]{5,7}$/gm)[0]
        : null,
    },
    //  searchWords ends up acting like a switch statement - early cases will override later cases
    searchWords: [
      "panel bed with storage",
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
    sortingOrder: ["twin", "full", "queen", "eastern king", "california king"], // the sizes required for the experiment in the correct order to display on the page
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
    sortedArr = sortedArr.filter((x) => x !== undefined);
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
      let sku = link.match(/[0-9]{5,7}$/gm)
        ? link.match(/[0-9]{5,7}$/gm)[0]
        : null;
      let price = el.querySelector(".price").textContent;
      let name = el.querySelector(".title").textContent;
      let size = state.sortingOrder.filter((s) => {
        return name.toLowerCase().search(s) > -1;
      })[0];
      return {
        name: name,
        sku: sku,
        link: link,
        size: size,
        price: price,
        currentProduct: false,
      };
    })
    .filter((item) => {
      if (state.currentProduct.type === "panel bed") {
        return (
          item.name.toLowerCase().search(state.currentProduct.type) > -1 &&
          item.name.toLowerCase().search("storage") == -1
        );
      } else {
        return item.name.toLowerCase().search(state.currentProduct.type) > -1;
      }
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
          margin-bottom: 3rem;
          align-items: center;
        }
        #ESX190 * {
          text-transform: capitalize;
          font-size: 1.4rem;
          font-weight: 600;
          white-space: nowrap;
        }
        #ESX190 button {
          border: 1px solid #333;
          border-radius: 2px;
        }
        #ESX190 a:hover button {
          background-color: #333;
          color: #fff;
        }
        #ESX190 button {
          background-color: #fff;
          color: #333;
          padding: 1rem 1.5rem;
        }
        #ESX190 button span, #ESX190 > span {
          font-weight: 800;
        }
        #ESX190 > *:nth-child(n + 2) {
          margin-left: 1rem;
        }
        #ESX190 .active-button {
          background-color: #333;
          color: #fff;
          cursor: initial;
        }
        @media (min-width: 992px) and (max-width: 1100px) {
          #ESX190 button {
            padding: 1rem .5rem;
          }
        }
      </style>
    `
  );

  state.html = `${state.sortedProducts
    .filter((i) => i.sku !== state.currentProduct.sku) // remove current product
    .map((x) => {
      console.log("products to display", x);
      let tmp = `<button><span>${x.size}</span> ${x.price}</button>`;
      tmp = x.currentProduct ? tmp : `<a href="${x.link}">${tmp}</a>`;
      return tmp;
    })
    .join("")}`;

  state.html = `<div id="ESX190"><span>View Other Sizes</span>${state.html}</div>`;

  document
    .getElementById("price-section")
    .insertAdjacentHTML("afterend", state.html);
};

$(document).ready(function() {
  ESX190();
});

// Add event listener for optimizely
document.addEventListener("click", (e) => {
  if (e.target.closest("#ESX190")) {
    // Click event for tracking
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "190_cso",
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
  }
});
