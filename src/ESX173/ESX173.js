// will need some kind of timing/wait function for AITC ?

let state = {
  currentProduct: {
    name: utag_data.product_name[0],
    size: "",
    type: "",
    currentProduct: true
  },
  searchWords: ["platform", "panel", "4 piece", "3 piece"], // words that can throw a product match in AITC
  alsoInThisCollection: [], // will be arr of objects - params: name,link,size,currentProduct
  sortingOrder: ["queen", "eastern king", "california king"], // the sizes required for the experiment in the correct order to display on the page
  sortedProducts: [], // sorted list of prods in same category. INCLUDES current product
  html: ""
};

// Takes arr of objects with name param to be sorted by state.sortingOrder
const sortedItems = r => {
  let sortedArr = [];
  state.sortingOrder.forEach(s => {
    let match = r.filter(x => {
      return x.name.toLowerCase().search(s) > -1;
    })[0];
    sortedArr.push(match);
  });
  return sortedArr;
};

// Figure out what the current product type is
state.currentProduct.type = state.searchWords.filter(w => {
  return state.currentProduct.name.toLowerCase().search(w) > -1;
})[0];

// Figure out what the current product size is
state.currentProduct.size = state.sortingOrder.filter(w => {
  return state.currentProduct.name.toLowerCase().search(w) > -1;
})[0];

// Get data from Also in This Collection
// then filter it down by the product type
state.alsoInThisCollection = [...document.querySelectorAll("#thisCollection a")]
  .map(el => {
    let link = el.href;
    let name = el.querySelector(".title").textContent;
    let size = state.sortingOrder.filter(s => {
      return name.toLowerCase().search(s) > -1;
    })[0];
    return {
      name: name,
      link: link,
      size: size,
      currentProduct: false
    };
  })
  .filter(item => {
    return item.name.toLowerCase().search(state.currentProduct.type) > -1;
  });

// Create array of all products including the current one, then sort them by size
state.sortedProducts = sortedItems([
  ...state.alsoInThisCollection,
  state.currentProduct
]);

document.querySelector("head").insertAdjacentHTML(
  "beforeend",
  `
<style> #ESX173 { display: flex; width: 100%; justify-content: start; margin-bottom: 1rem; } #ESX173 * { text-transform: capitalize; font-size: 1.4rem; font-weight: 600; white-space: nowrap; } #ESX173 *:not(a) { border: 2px solid #323232; transition: 0.3s; } #ESX173 a:hover button { background-color: #d4d4d4; } #ESX173 button { background-color: #fff; color: #323232; padding: 1rem 1.5rem; } #ESX173 > *:nth-child(n + 2) { margin-left: 1rem; } #ESX173 .active-button { background-color: #323232; color: #fff; cursor: initial; } /* other page style tweaks */ #price-section { margin-bottom: 1rem !important; } </style>
`
);

state.html = `<div id="ESX173">${state.sortedProducts
  .map(x => {
    let tmp = `<button class=${x.currentProduct ? "active-button" : ""}>${
      x.size
    }</button>`;
    tmp = x.currentProduct ? tmp : `<a href="${x.link}">${tmp}</a>`;
    return tmp;
  })
  .join("")}</div>`;

document
  .getElementById("price-section")
  .insertAdjacentHTML("afterend", state.html);

// Add event listener for optimizely
document.getElementById("ESX173").addEventListener("click", () => {
  window["optimizely"] = window["optimizely"] || [];
  window["optimizely"].push({
    type: "event",
    eventName: "clickSizeOpts"
  });
});
