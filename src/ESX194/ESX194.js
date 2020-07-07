const ESX194 = () => {
  const style = `
  <style>
    #step2 .price-total-table,
    #step3 .price-total-table {
      padding: 0 0.5rem 2rem;
    }
    #step2 .price-total-table .form-title.form-title-order-summary,
    #step3 .price-total-table .form-title.form-title-order-summary,
    #shipBillSummary {
      margin-left: 3rem;
      margin-right: 3rem;
    }
    #step3 .price-total-table .price-table {
      margin: auto!important;
    }
    #step3 .price-total-table .form-title {
      margin-left: 3rem;
      margin-top: 1rem;
    }
    #step3 .form-group-holder{
      width: 110%;
    }
    .checkout-component .price-total-table .price-table {
      width: calc(100% - 6rem)!important;
    }
    .ESX194 {
      margin-top: 3rem;
    }
    .ESX194 h3,
    .ESX194 .item p {
      font-size: 1.8rem!important;
    }
    .ESX194 .item p {
      font-weight: normal!important;
    }
    .ESX194 .item .id-no {
      display: inline;
    }
    .ESX194 .header-info {
      margin-top: 0.5rem;
      text-align: left!important;
    }
    .ESX194 .header-info .date {
      display: inline!important;
    }
    .ESX194 .product-card {
      border: none;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
    }
    .ESX194 .product-card .card-side img {
      width: 9rem;
    }
    .ESX194 .cart-component .content-header {
      margin-left: -0.5rem;
      margin-right: -0.5rem;
    }
    .ESX194 .cart-component .main-header {
      display: block;
    }
    .ESX194 .form-title,
    #step3 .col-xs-7.cart-component,
    .ESX194 .recycle-info,
    .ESX194 .shipping-info {
      display: none!important;
    }
    .ESX194 .form-title {
      margin-left: 1rem;
    }
    .ESX194 .price {
      display: inline-block;
      margin-left: 3rem;
    }
    .ESX194 .price p {
      font-size: 16px;
    }
    .ESX194 .cart-component .item-description {
      padding-right: .25rem;
    }
    .cart-component .item-description .item-and-price {
      display: block;
    }

    #step2 .col-xs-7 > form > *,
    #delivery-instructions {
      max-width: 100%;
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
  sourceHtml = `<div class="ESX194">${sourceHtml}</div>`;

  // one more modification - hide OG form title
  sourceEl.querySelector(".form-title").style.display = "none";

  // insert it in the new spots (step 2 and 3)
  document
    .getElementById("shipBillSummary")
    .insertAdjacentHTML("afterend", sourceHtml);

  document
    .querySelector("#step3 .price-total-table .price-table")
    .insertAdjacentHTML("afterend", sourceHtml);

  // have to move all prices into another div to get alignment right
  [...document.querySelectorAll(".ESX194 .price")].forEach((el) => {
    let insertTarget = el.parentNode.querySelector(".item .id-no");
    let html = el.outerHTML;
    el.parentNode.removeChild(el);
    insertTarget.insertAdjacentHTML("afterend", html);
  });

  // title case all product names
  [...document.querySelectorAll(".ESX194 .product-card .item p")].forEach(
    (el) => {
      let text = el.textContent.toLowerCase();
      let titleText = text
        .split(" ")
        .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(" ");
      el.textContent = titleText;
    }
  );

  // change page column sizes for more room
  ["#step2", "#step3"].forEach((sel) => {
    document.querySelector(
      `${sel} .col-xs-4`
    ).className = document
      .querySelector(`${sel} .col-xs-4`)
      .className.replace("4", "5");
    document.querySelector(
      `${sel} .col-xs-8`
    ).className = document
      .querySelector(`${sel} .col-xs-8`)
      .className.replace("8", "7");
  });
};

if (document.readyState === "complete") {
  ESX194();
} else {
  document.addEventListener("DOMContentLoaded", ESX194);
}
