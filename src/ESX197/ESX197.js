const ESX197 = () => {
  const cartEl = document.querySelector(".cart-content");
  const priceTotal = document.querySelector(".order-summary-total").textContent;
  const cartHtml = cartEl.outerHTML;
  cartEl.parentNode.removeChild(cartEl);

  const html = `
  <div id="ESX197">
    <style>
      #ESX197 {
        margin: 2rem -15px 0;
      }
      #ESX197 > section > a {
        background: #f2f2f2;
        margin-bottom: 0;
        padding: .5rem 2rem;
        display: flex;
        align-items: center;
        font-size: 1.4rem;
      }
      #ESX197 .fa.fa-shopping-cart {
        float: left!important;
      }
      #ESX197 .fa.fa-shopping-cart:before {
        content: "\\f07a"!important;
        float: left!important;
        font-size: 2rem;
      }
      #ESX197 .fa.fa-angle-down,
      #ESX197 .fa.fa-angle-down:before {
        float: none!important;
        font-size: 2rem;
        margin-left: .25rem;
      }
      #ESX197 > section {
        margin-bottom: 0;
        margin-top: 1rem;
      }
      #ESX197 .priceTotal {
        margin-left: auto;
      }
      #ESX197 .priceTotal:after {
        content: "${priceTotal}";
        margin-left: auto;
        font-size: 1.4rem;
        font-weight: 600;
      }
      #ESX197 .cart-content {
        margin-left: 15px;
        margin-right: 15px;
      }
      #ESX197 .form-title {
        margin-top: 0;
      }
    </style>
    <section class="container board">
      <a
        class="collapse-link collapsed"
        role="button"
        data-toggle="collapse"
        href="#ESX197ProductsArea"
        aria-expanded="false"
        aria-controls="ESX197ProductsArea"
      >
        <span style="margin-right:1rem;" class="fa fa-shopping-cart" aria-hidden="true"></span>
        Show Order Summary
        <span class="fa fa-angle-down" aria-hidden="true"></span>
        <span class="priceTotal"></span>
      </a>
      <div class="collapse cart-component container" id="ESX197ProductsArea">
        ${cartHtml}
      </div>
    </section>
  </div>
`;

  document.querySelector(".wizard").insertAdjacentHTML("afterend", html);

  const dateText = document.querySelector("#ESX197 .date");
  dateText.textContent = dateText.textContent.split("(")[0];

  const adjustAccordionText = () => {
    let accEl = document.querySelector("#ESX197 > section > a.collapse-link");
    const cartIcon = `<span style="margin-right:1rem;" class="fa fa-shopping-cart" aria-hidden="true"></span>`;
    const arrow = `<span class="fa fa-angle-down" aria-hidden="true"></span>`;
    const priceSpan = `<span class="priceTotal"></span>`;

    if (accEl.classList.contains("collapsed")) {
      accEl.innerHTML = cartIcon + "Show Order Summary" + arrow + priceSpan;
    } else {
      accEl.innerHTML = cartIcon + "Hide Order Summary" + arrow + priceSpan;
    }
  };

  const checkStepVisibility = () => {
    const stepNumber =
      [...document.querySelectorAll("#checkoutVue > li")]
        .map((el) => {
          return el.classList.contains("active");
        })
        .indexOf(true) + 1;
    if (stepNumber === 1) {
      document.getElementById("ESX197").style.display = "none";
    } else {
      document.getElementById("ESX197").style.display = "block";
    }
  };
  //call on init
  checkStepVisibility();

  document.addEventListener("click", (e) => {
    checkStepVisibility();
    if (e.target.closest("#ESX197")) {
      adjustAccordionText();
    }
  });
};

if (document.readyState === "complete") {
  ESX197();
} else {
  document.addEventListener("DOMContentLoaded", ESX197);
}
