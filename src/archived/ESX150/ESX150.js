const injectCss = () => {
  $(
    "<style type='text/css'> .ellipsis-wrap { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; } #SuggestedProducts .cart-component .container { padding-left: 0; padding-left: 0; } @media(max-width:767px) { #SuggestedProducts .product-grid-component { margin-left: -15px } .slick-list { margin-left: 0 } } </style>"
  ).appendTo("head");
};

let ratingGenerator = (average, count) => {
  // console.log("average: ", average);
  // console.log("count: ", count);
  // If there are no reviews return no code
  if (!parseInt(average) > 0 || !parseInt(average) > 0) {
    return "";
  }
  // ROUND TO .5 GRAIN
  let roundedAverage = Math.ceil(average * 2) / 2;
  let fullStars = parseInt(roundedAverage);

  // Add full-stars
  let fullStarsHtml = new Array(10).fill(1, 0, fullStars).map(throwawayVar => {
    return '<span class="fa fa-star" aria-hidden="true"></span>';
  });

  // Add half-stars
  if (!Number.isInteger(roundedAverage)) {
    fullStarsHtml.push(
      '<span class="fa fa-star-half-o" aria-hidden="true"></span>'
    );
  }

  // Add empty-stars
  let missingStars = 5 - fullStarsHtml.length;
  if (missingStars) {
    for (i = 0; i < missingStars; i++) {
      fullStarsHtml.push(
        '<span class="fa fa-star-o" aria-hidden="true"></span>'
      );
    }
  }

  let html = `<div class="ratings" role="button">${fullStarsHtml.join(
    ""
  )}<span aria-label="total number of reviews" class="number">(${count})</span> </div>`;
  return html;
};

const buildHtml = async (userData, cssSelector) => {
  let html = [];

  // UTAG DATA PARSING
  let cartItems = userData.product_id;
  let recentlyViewed = JSON.parse(userData["cp.lsf-recently-viewed-list"]);
  recentlyViewed = recentlyViewed.slice(0, 4);

  if (recentlyViewed.length == 0) {
    return false;
  }

  // console.log(
  //   "url: ",
  //   `https://www.livingspaces.com/api/restfulproducts?pid=${recentlyViewed.join(
  //     ","
  //   )}`
  // );
  // API CALL
  let res = await fetch(
    `https://www.livingspaces.com/api/restfulproducts?pid=${recentlyViewed.join(
      ","
    )}`
  );
  let data = await res.json();
  // console.log(data);

  if (utag_data.site_type == "desktop") {
    // DESKTOP
    for (const product of data.products) {
      html.push(
        `<div class="col-xs-3 product-element"> <a href="https://www.livingspaces.com/${
        product.pid
        }" target="_blank"> <img src="${
        product.images[0].imageUrl
        }?w=263&amp;h=174&amp;mode=pad" class="img-responsive" alt="${
        product.title
        }"> <span class="title ellipsis-wrap">${
        product.title
        }</span> <span class="price">$${
        product.price.salePrice
        }</span><div class="ratings" role="button">${ratingGenerator(
          product.reviewsAvg,
          product.reviewsCount
        )}</div></a> </div>`
      );
    }

    html = `<section id="PeopleWhoBoughtWrapper" class="container board"> <a class="collapse-link" role="button" data-toggle="collapse" href="#SuggestedProducts" aria-expanded="true" aria-controls="SuggestedProducts">People Who Bought This Also Bought</a> <div class="collapse in"> <div class="product-grid-component"> <div class="row" id="SuggestedProducts"> ${html.join(
      ""
    )} </div> </div> </div> </section>`;

    $(cssSelector).before(html);
  } else {
    // MOBILE
    for (const product of data.products) {
      html.push(
        `<div class="product-element"> <a href="https://www.livingspaces.com/${
        product.pid
        }"> <img src="${
        product.images[0].imageUrl
        }?w=151&amp;h=100&amp;mode=pad" class="img-responsive lazy " alt="${
        product.title
        }"> <span class="title">${product.title}</span> <span class="price">$${
        product.price.salePrice
        }</span> <div class="ratings" role="button">${ratingGenerator(
          product.reviewsAvg,
          product.reviewsCount
        )}</div> </a> </div>`
      );
    }

    html = `<section class="board"> <a class="collapse-link" role="button" data-toggle="collapse" href="#SuggestedProducts" aria-expanded="true" aria-controls="SuggestedProducts" style=" font-size: 2.1rem; ">People Who Bought This Also Bought</a> <div class="collapse in" id="SuggestedProducts"> <div class="product-grid-component"> <div class="mobile-carousel-component"> ${html.join(
      ""
    )}</div> </div> </div> </section>`;

    $(cssSelector).before(html);
    $("#SuggestedProducts .mobile-carousel-component").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: false
    });
    // injectSlickCss()
  }
  return true;
};

var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    injectCss();
    // console.log("run");
    // buildHtml(utag_data, "#main-image");
    buildHtml(utag_data, ".pl-container");
  }
}, 50);
