let buildHtml;

buildHtml = async userData => {
  let html = [];

  // UTAG DATA PARSING
  let cartItems = userData.product_id;
  let recentlyViewed = JSON.parse(userData["cp.lsf-recently-viewed-list"]);
  recentlyViewed = recentlyViewed
    .filter(item => !cartItems.includes(item))
    .slice(0, 4);

  // API CALL
  let res = await fetch(
    `https://www.livingspaces.com/api/restfulproducts?pid=${recentlyViewed.join(
      ","
    )}`
  );
  let data = await res.json();

  if (utag_data.site_type == "desktop") {
    for (const product of data.products) {
      html.push(
        `<div class="col-xs-3 product-element"> <a href="https://www.livingspaces.com/${product.pid}"> <img src="https://www.livingspaces.com/globalassets/productassets/200000-299999/250000-259999/252000-252999/252100-252199/252191/252191_natural_wood_bed_signature_01.jpg?w=263&amp;h=174&amp;mode=pad" class="img-responsive" alt="${product.title}"> <span class="title">${product.title}</span> <span class="price">$${product.price.salePrice}</span> </a> </div>`
      );
    }

    console.log(html);

    html = `<section class="container board"> <a class="collapse-link" role="button" data-toggle="collapse" href="#moreLikeThis" aria-expanded="true" aria-controls="moreLikeThis"> More Like This<span class="fa fa-angle-down" aria-hidden="true"></span> </a> <div class="collapse in" id="moreLikeThis"> <div class="product-grid-component"> <div class="row"> ${html.join(
      ""
    )} </div> </div> </div> </section>`;
  } else {
  }
  console.log(html);
  $(".cart-content").after(html);
  return html;
};

buildHtml(utag_data);
