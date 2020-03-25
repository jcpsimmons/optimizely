async function cartAdds() {
  // ARRAY OF CART ADDS
  //   probably move this to manual triggering on site for Optimizely
  const numItemsInCart = parseInt(
    document.querySelector(".counter.cart").textContent.trim()
  );

  if (!numItemsInCart) {
    //   break function if nothing is in cart
    return false;
  }

  //   Add style tag
  document.querySelector("head").insertAdjacentHTML(
    "beforeend",
    `
<style>
  #ItemsInCart {
    max-width: 1140px;
    margin: 0 auto 2rem;
  }
  #ItemsInCart .item {
    display: inline-block;
    margin: 0 2rem;
    font-weight: 600;
    font-size: 2rem;
  }
  #ItemsInCart .cart-items {
    display: flex;
    flex-wrap: nowrap;
  }
  #ItemsInCart .cart-items>div {
    margin: auto 1rem;
  }
  #ItemsInCart .outer-flex {
    display: flex;
    align-items: center;
    width: 70%;
    margin: auto auto auto 0;
    border-radius: 4px;
    box-shadow: 0 0 6px 0 #bbb;
    padding: 3rem;
  }
  #ItemsInCart button {
    color: #fff;
    background-color: #ad4e17;
  }
  #ItemsInCart button a {
    color: #fff!important;
  }
  #ItemsInCart button a:hover,#ItemsInCart button a:visited,#ItemsInCart button a:focus {
      text-decoration:none
  }
  #ItemsInCart .checkout-button {
    margin-left: 4rem;
  }
</style>
`
  );

  const cartSkus = [
    ...document.querySelectorAll(".cart-dropdown-content>.product-element>a")
  ].map(a => a.href.split("-").pop());

  const cartTotal = document.querySelector(
    ".cart-dropdown-content>.subtotal strong"
  ).textContent;

  let cartItemData = await fetch(
    `https://www.livingspaces.com/api/restfulproducts?pid=${cartSkus}`
  );

  cartItemData = await cartItemData.json();

  insertHtml = cartItemData.products
    .map(item => {
      console.log(item.images[0]);
      return `<div><a href="/${item.pid}"><img class="img-responsive" src="${item.images[0].imageUrl}"/><p>${item.title}</p><p>$${item.price.salePrice}</p></a></div>`;
    })
    .join("");

  insertHtml = `
  <div id="ItemsInCart" class="text-center">
  <div class="outer-flex">
    <div class="cart-items">${insertHtml}</div>
  </div>
</div>`;

  document
    .getElementById("ls_hero_event")
    .parentElement.insertAdjacentHTML("afterend", insertHtml);
}
cartAdds();
