// JS for item load on page
const customItemLayerInit = () => {
  var jq = setInterval(() => {
    if (window.jQuery) {
      var $sliderOne = $("#ItemsInCartScroll > div");
      // Do image append here once script-generated
      $sliderOne.slick({
        // slidesToShow: 1.75,
        infinte: false,
        arrows: true,
        variableWidth: true,
        nextArrow:
          '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive nextArrow">',
        prevArrow:
          '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive prevArrow">',
      });

      var $sliderTwo = $("#HP4UScroll > div");
      // Do image append here once script-generated
      $sliderTwo.slick({
        arrows: false,
        // slidesToShow: 1.75,
        infinte: false,
        variableWidth: true,
        arrows: true,
        nextArrow:
          '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive nextArrow">',
        prevArrow:
          '<img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/slick-arrow.png" alt="" class="img-responsive prevArrow">',
      });

      // calculate next arrow positions
      let iicWidth = document.getElementById("ItemsInCart").offsetWidth;
      let hp4uWidth = document.getElementById("HP4U").offsetWidth;
      document.querySelector("#ItemsInCart .nextArrow").style.right = "2rem";
      document.querySelector(
        "#HP4U .nextArrow"
      ).style.left = `calc(${hp4uWidth}px - 6rem)`;
      window.addEventListener("resize", () => {
        console.log("resize");
        document.querySelector("#HP4U .nextArrow").style.left = `calc(${
          document.getElementById("HP4U").offsetWidth
        }px - 6rem)`;
      });

      // fade in slides
      setTimeout(function() {
        $(".slick-slide")
          .hide()
          .css("visibility", "visible")
          .fadeIn("slow");
      }, 1000);
      // reset height -- not working rn for some reason
      // $("#UserRelatedLayer > *").css("height", "auto");

      clearInterval(jq);
    }
  }, 50);
};

const cssInjection = () => {
  html = `<style>#UserRelatedLayer{display:flex;flex-wrap:nowrap;margin:auto;max-width: 1140px;}#UserRelatedLayer h3{font-weight:400;font-size:2rem}#UserRelatedLayer p{font-size:1.6rem}#UserRelatedLayer h3 b{font-weight:700}#UserRelatedLayer h3,#UserRelatedLayer p{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#UserRelatedLayer>*{max-width:1140px;margin:0 auto;border:1px solid #d5d5d5;padding:1.4rem 0 1.5rem;overflow:hidden;height:18.2rem}#UserRelatedLayer .flex-row{display:flex;flex-direction:row;flex-wrap:nowrap}#UserRelatedLayer .flex-col{display:flex;flex-direction:row;flex-wrap:nowrap}#HP4UScroll,#ItemsInCartScroll{padding-top:2rem}#HP4UScroll{overflow:hidden;width:1000px}#UserRelatedLayer .slick-row>div{visibility:hidden}#UserRelatedLayer .slick-slide{width:auto!important;padding-left:2rem!important}#UserRelatedLayer .slick-slide a{border:none}#UserRelatedLayer .slick-slide a img{width:16rem}#UserRelatedLayer .IICText{padding:0 2rem;justify-content:space-between}#UserRelatedLayer .IICText .flex-item>*{display:inline}#UserRelatedLayer .slick-initialized .slick-slide{padding:0}#HP4U{margin-left:2rem}#UserRelatedLayer .nextArrow,#UserRelatedLayer .prevArrow{cursor:pointer;position:absolute;z-index:1;top:50%;transition:.25s;opacity:0}#HP4U:hover .nextArrow,#HP4U:hover .prevArrow,#ItemsInCart:hover .nextArrow,#ItemsInCart:hover .prevArrow{opacity:1}#UserRelatedLayer .prevArrow{transform:translateY(-50%) scaleX(-1);left:2.5rem}#UserRelatedLayer .nextArrow{transform:translate(-50%,-50%)}@media (max-width:1199px){#UserRelatedLayer h3{font-size:1.5rem}#UserRelatedLayer p{font-size:1.3rem}}</style>`;

  document.querySelector("head").insertAdjacentHTML("beforeend", html);
};

// HTML builder
class hp4uLite {
  constructor(containerId, flexBasis) {
    this.containerId = containerId;
    this.flexBasis = flexBasis; // takes a string with percentage symbol

    this.eligibility = false;
    this.skus = [];
    this.html = "";
    this.hp4u = containerId == "HP4U" ? true : false;
    return this;
  }

  getHPSkus() {
    if (
      utag_data["cp.lsf-liked-items"] ||
      utag_data["cp.lsf-recently-viewed-list"]
    ) {
      this.eligibility = true;

      utag_data["cp.lsf-liked-items"] &&
        this.skus.push(...JSON.parse(utag_data["cp.lsf-liked-items"]));

      utag_data["cp.lsf-recently-viewed-list"] &&
        this.skus.push(...JSON.parse(utag_data["cp.lsf-recently-viewed-list"]));
    }
    if (this.skus.length < 10) {
      // if there are less than 10 skus - add from top sellers until there are 10 total in this.skus (while loop)
    }
    return this;
  }

  getCartSkus() {
    // will return an empty array if there are no cartadds
    this.skus = [
      ...document.querySelectorAll(".cart-dropdown-content>.product-element>a"),
    ].map((a) => a.href.split("-").pop());

    return this;
  }

  _getCartSubtotal() {
    // return a string
    return document
      .querySelector(".cart-dropdown-content .subtotal strong")
      .innerText.split(".")[0];
  }

  genHtml() {
    let header = this.hp4u
      ? `<div class="flex-item"> <h3><b>Hand Picked for YOU</b></h3></div>`
      : `<div class="flex-item"> <h3><b>In Your Cart</b> (${
          this.skus.length
        })</h3> </div> <div class="flex-item"> <p>Subtotal:</p> <h3><b>${this._getCartSubtotal()}</b></h3> </div>`;

    let images = this.skus
      .map((sku) => {
        return `
          <div>
            <a href="/${this.hp4u ? sku : "shopping-cart"}"
              ><img
                class="img-responsive"
                src="https://www.livingspaces.com/api/image?recId=${sku}&width=160"
              />
            </a>
          </div>
        `;
      })
      .join("");

    this.html = `
      <div id="${this.containerId}" style="flex-basis:${this.flexBasis}">
        <div class="IICText flex-row">${header}</div>
          <div class="" id="${this.containerId}Scroll">
            <div class="slick-row">${images}
            </div>
        </div>
      </div>
    `;

    return this;
  }
}

cssInjection();

let ItemsInCartStatus = "none"; // none/single/multiple

// check for items in cart and run if exists
if (document.querySelector(".cart-dropdown-content .subtotal strong")) {
  let ItemsInCart = new hp4uLite("ItemsInCart", "27%").getHPSkus().genHtml();
  ItemsInCartStatus = ItemsInCart.skus.length > 1 ? "multiple" : "single";
  var ItemsInCartHTML = ItemsInCart.html;
} else {
  ItemsInCartHTML = "";
}

let HP4U = new hp4uLite("HP4U", ItemsInCartStatus == "none" ? "100%" : "73%")
  .getHPSkus()
  .genHtml();

let injectionHTML = `<div id="UserRelatedLayer" class="flex-row">${ItemsInCartHTML}${HP4U.html}</div>`;

document
  .getElementById("ls_hero_event")
  .parentElement.insertAdjacentHTML("afterend", injectionHTML);

customItemLayerInit();
