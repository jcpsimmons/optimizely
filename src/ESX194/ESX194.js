const style = `
  <style>
    #step2 .price-total-table {
      padding: 2rem .5rem;
    }
    #step2 .price-total-table .form-title.form-title-order-summary,
    #shipBillSummary {
      margin-left: 3rem;
      margin-right: 3rem;
    }
    .checkout-component .price-total-table .price-table {
      width: calc(100% - 6rem);
    }
    #ESX194 h3, #ESX194 .item p {
      font-size: 1.8rem;
    }
    #ESX194 .item p {
      font-weight: normal;
    }
    #ESX194 .item .id-no {
      display: inline;
    }
    #ESX194 .product-card {
      border: none;
      padding-left: 0;
      padding-right: 0;
    }
    #ESX194 .product-card .card-side img {
      width: 9rem;
    }
    #ESX194 .form-title,
    #ESX194 .recycle-info,
    #ESX194 .shipping-info {
      display: none;
    }
    #ESX194 .price {
      display: inline-block;
      margin-left: 3rem;
    }
    #ESX194 .price p {
      font-size: 16px;
    }
    .cart-component .item-description .item-and-price {
      display:block
    }
  </style>
`;

// add style
document.querySelector("head").insertAdjacentHTML("beforeend", style);

// source element
const sourceEl = document.querySelector("#step2 .col-xs-7.cart-component");
sourceEl.classList.remove("col-xs-7");

// assign html to var
let sourceHtml = sourceEl.outerHTML;

// remove OG source el
sourceEl.parentNode.removeChild(sourceEl);

// nest html in an id'd div
sourceHtml = `<div id="ESX194">${sourceHtml}</div>`;

// one more modification
sourceEl.querySelector(".form-title").style.display = "none";

// insert it in the new spot
document
  .getElementById("shipBillSummary")
  .insertAdjacentHTML("beforebegin", sourceHtml);

// have to move all prices into another div to get alignment right
[...document.querySelectorAll("#ESX194 .price")].forEach((el) => {
  let insertTarget = el.parentNode.querySelector(".item .id-no");
  let html = el.outerHTML;
  el.parentNode.removeChild(el);
  insertTarget.insertAdjacentHTML("afterend", html);
});
