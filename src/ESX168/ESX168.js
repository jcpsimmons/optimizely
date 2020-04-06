class hp4uLite {
  constructor(containerId) {
    this.eligibility = false;
    this.skus = [];
    this.html = "";
    this.getSkus();
    this.genHtml();
    this.getCartSkus();
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
  getCartSkus() {
    // will return an empty array if there are no cartadds
    this.cartSkus = [
      ...document.querySelectorAll(".cart-dropdown-content>.product-element>a"),
    ].map((a) => a.href.split("-").pop());

    // gets cart total from graphic - good secondary check
    this.cartTotal = document.querySelector(
      ".cart-dropdown-content>.subtotal strong"
    ).textContent;
  }

}

let HP4U = new hp4uLite('HP4U');
let ItemsInCart = new hp4uLite('ItemsInCart');
console.log(x);

