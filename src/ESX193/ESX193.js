const ESX193 = () => {
  const calcFooter = () => {
    setTimeout(() => {
      if (
        document.querySelector("body").getBoundingClientRect().height <
        window.innerHeight
      ) {
        document.querySelector("head").insertAdjacentHTML(
          "beforeEnd",
          `
            <style id="ESX193_footer-fix">
              footer {
                position: absolute;
                bottom: 0;
                width: 100%;
              }
            </style>
          `
        );
      } else if (document.getElementById("ESX193_footer-fix")) {
        const el = document.getElementById("ESX193_footer-fix");
        el.parentNode.removeChild(el);
      }
    }, 10);
  };

  // REMOVE HEADER HIDE ON DEPLOY
  const insertHtml = `
    <style>
      header,
      #free-shipping-header-vue-container {
        display: none;
      }


      #ESX193_container {
        width: 100%;
        background-color: #333;
      }
      #ESX193 {
        color: #fff;
        padding: 1.7rem 0;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }
      #ESX193 > * {
        flex: 0 1 auto;
      }
      #ESX193 .ls-logo,
      #ESX193 .cart-icon {
        flex-basis: 50%;
        margin: auto;
      }

      #ESX193 .cart-icon {
        text-align: right;
        font-size: 3.3rem;
      }
      #ESX193 .cart-icon p {
        font-size: 1.6rem !important;
      }
      /*  */
      #ESX193 .cart-icon > * {
        color: #fff;
      }
      #ESX193 .cart-icon > a > * {
        display: inline-block;
      }
      #ESX193 .cart-icon > a > p {
        margin: 0;
        margin-right: 1rem;
      }
      #ESX193 .cart-icon > a:hover,
      #ESX193 .cart-icon > a:visited,
      #ESX193 .cart-icon > a:active {
        text-decoration: none !important;
      }
    </style>
    <div id="ESX193_container">
      <div id="ESX193" class="container">
        <div class="ls-logo">
          <a href="/">
            <img
              class="img-responsive"
              src="https://livingspaces.com/globalassets/images/lp/2020/06/ls-logo-white.png?width=265"
              alt="Living Spaces Home"
          /></a>
        </div>
        <div class="cart-icon">
          <a href="/shopping-cart">
            <p>Back to Cart</p>
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  `;

  document.querySelector("header").insertAdjacentHTML("afterend", insertHtml);
  calcFooter();

  document.addEventListener("click", (e) => {
    calcFooter();
  });
};

if (document.readyState === "complete") {
  ESX193();
} else {
  document.addEventListener("DOMContentLoaded", ESX193);
}
