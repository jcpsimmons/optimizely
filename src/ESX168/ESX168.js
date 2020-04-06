class hp4uLite {
  constructor() {
    this.eligibility = false;
    this.skus = [];
    this.html = "";
    this.getSkus();
    this.genHtml();
  }
  getSkus() {
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
    return;
  }
  genHtml() {
    if (this.skus.length > 4) {
      let temphtml = this.skus.map((sku) => {
        return `<img class="img-responsive" src="https://www.livingspaces.com/api/image?recId=${sku}&width=160"/>`;
      });
      console.log("temphtml", temphtml);
      this.html = `outerstuff${temphtml.join("")}outerstuff`;
    }
    return;
  }
}

x = new hp4uLite();
console.log(x);

//

/*
const cartSkus = [
  ...document.querySelectorAll(".cart-dropdown-content>.product-element>a"),
].map((a) => a.href.split("-").pop());

const cartTotal = document.querySelector(
  ".cart-dropdown-content>.subtotal strong"
).textContent;

let cartItemData = await fetch(
  `https://www.livingspaces.com/api/restfulproducts?pid=${cartSkus}`
);

cartItemData = await cartItemData.json();
*/
