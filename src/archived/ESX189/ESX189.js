const ESX189 = () => {
  const style = `
    <style>
      #successAddToCartModal .row.button-group {
        align-items: baseline;
      }
      #ESX189 {
        margin-top: 1.7rem;
        white-space: nowrap;
      }
      #ESX189 a {
        white-space: nowrap;
      }
      #ESX189 img {
        display: inline;
        width: 4rem;
        margin-left: 7px
      }
    </style>
  `;
  document.querySelector("head").insertAdjacentHTML("beforeend", style);

  const html = `
    <div id="ESX189">
      <a href="/shopping-cart">Checkout with</a
      ><a href="/shopping-cart"
        ><img
          class="img-responsive"
          src="https://www.livingspaces.com/globalassets/images/lp/2020/05/ESX189_apple-pay.png"
      /></a>
    </div>
  `;

  document
    .querySelector(
      "#successAddToCartModal .modal-footer .row.button-group .col-xs-6.text-left"
    )
    .insertAdjacentHTML("beforeend", html);

  document.addEventListener("click", (e) => {
    if (e.target.closest("#ESX189")) {
      console.debug("189 Click");
      // optimizely event
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "189_capb",
        tags: {
          revenue: 0, // Optional in cents as integer (500 == $5.00)
          value: 0.0, // Optional as float
        },
      });
    }
  });
};

ESX189();
