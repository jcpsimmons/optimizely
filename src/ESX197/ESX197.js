const ESX197 = () => {
  const cartEl = document.querySelector(".cart-content");
  const priceTotal = document.querySelector(".order-summary-total").textContent;
  const cartHtml = cartEl.outerHTML;
  cartEl.parentNode.removeChild(cartEl);

  const titleCaseItems = () => {
    const upperCaseWord = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    [...document.querySelectorAll("#ESX197 .item > p")].forEach((el) => {
      let curText = el.textContent;
      el.textContent = curText
        .toLowerCase()
        .split("-")
        .map(upperCaseWord)
        .join("-")
        .split(" ")
        .map(upperCaseWord)
        .join(" ");
    });
  };

  const repositionDeliveryHeader = () => {
    deliveryHeader = [
      ...document.querySelectorAll("#ESX197 .content-header.main-header"),
    ].filter(
      (el) =>
        el
          .querySelector(".header-info > p")
          .textContent.search("Delivery Time") !== -1 ||
        el
          .querySelector(".header-info > p")
          .textContent.search("Pickup Time") !== -1
    );

    if (!deliveryHeader.length) return false;

    deliveryHeader = deliveryHeader[0];
    deliveryHeader.classList.add("repositionDeliveryText");

    const date = deliveryHeader.querySelector(".header-info .date");
    const dateHtml = date.outerHTML;

    date.parentNode.removeChild(date);

    deliveryHeader
      .querySelector(".header-info")
      .insertAdjacentHTML("beforeend", dateHtml);
  };

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
        border-bottom: none!important;
        border-top: 1px solid #b5b5b5;
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
        overflow: visible;
      }
      #ESX197 .main-header {
        margin-left: -15px;
        margin-right: -15px;
      }
      #ESX197 .form-title {
        margin-top: 0;
      }
      #ESX197ProductsArea {
        border-bottom: 1px solid #b5b5b5;
      }
      #ESX197 .repositionDeliveryText {
        display: flex;
        flex-direction: column;
      }
      #ESX197 .repositionDeliveryText .header-info {
        display: flex;
      }
      #ESX197 .repositionDeliveryText .header-info p {
        margin-right: .5rem;
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

  titleCaseItems();
  repositionDeliveryHeader();

  const dateText = document.querySelector("#ESX197 .date");
  dateText.textContent = dateText.textContent.split("(")[0];

  const adjustAccordionText = () => {
    let accEl = document.querySelector("#ESX197 > section > a.collapse-link");
    const cartIcon = `<span style="margin-right:1rem;" class="fa fa-shopping-cart" aria-hidden="true"></span>`;
    const arrow = `<span class="fa fa-angle-down" aria-hidden="true"></span>`;
    const priceSpan = `<span class="priceTotal"></span>`;

    const overflowContainer = document.querySelector("#ESX197 .cart-content");

    if (accEl.classList.contains("collapsed")) {
      accEl.innerHTML = cartIcon + "Show Order Summary" + arrow + priceSpan;
      overflowContainer.style.overflow = "hidden"; // need this to enable slide animation
    } else {
      accEl.innerHTML = cartIcon + "Hide Order Summary" + arrow + priceSpan;
      overflowContainer.style.overflow = "visible"; // re-visible to allow title to expand full width
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
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "197_USMPL",
      });
    }
  };
  //call on init
  checkStepVisibility();

  document.addEventListener("click", (e) => {
    checkStepVisibility();
    if (e.target.closest("#ESX197")) {
      adjustAccordionText();
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "197_CPLAM",
      });
    }
  });
};

// if (document.readyState === "complete") {
//   ESX197();
// } else {
//   window.onload(ESX197);
// }

if (!!document.querySelector(".cart-content")) {
  ESX197();
} else {
  let waitLoop = setInterval(() => {
    if (!!document.querySelector(".cart-content")) {
      clearInterval(waitLoop);
      ESX197();
    }
  }, 1000);
}
