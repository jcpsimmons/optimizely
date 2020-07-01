const style = `
  <style>
    #step2 .price-total-table {
      padding: 2rem .5rem;
    }
    #ESX194 h3, #ESX194 .item p {
      font-size: 1.8rem;
    }
    #ESX194 .product-card {
      border: none;
    }
    #ESX194 .product-card .card-side img {
      width: 9rem;
    }
    #ESX194 .form-title {
      display: none;
    }
  </style>
`;

document.querySelector("head").insertAdjacentHTML("beforeend", style);

const sourceEl = document.querySelector("#step2 .col-xs-7.cart-component");

sourceEl.classList.remove("col-xs-7");

let sourceHtml = sourceEl.outerHTML;

sourceEl.parentNode.removeChild(sourceEl);

sourceHtml = `<div id="ESX194">${sourceHtml}</div>`;

sourceEl.querySelector(".form-title").style.display = "none";

document
  .getElementById("shipBillSummary")
  .insertAdjacentHTML("beforebegin", sourceHtml);
