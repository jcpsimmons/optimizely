const injectCss = () => {
    $(
        "<style type='text/css'>.ellipsis-wrap { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%;}</style>"
    ).appendTo("head");
};
const injectSlickCss = () => {
    $("#SuggestedProducts .slick-track").css('transform', 'translateX(0)')
}

let ratingGenerator = (average, count) => {
    console.log('average: ', average)
    console.log('count: ', count)
    // If there are no reviews return no code
    if (!parseInt(average) > 0 || !parseInt(average) > 0) {
        return ""
    }
    // ROUND TO .5 GRAIN
    let roundedAverage = Math.ceil(average * 2) / 2;
    let fullStars = parseInt(roundedAverage);

    // Add full-stars
    let fullStarsHtml = new Array(10).fill(1, 0, fullStars).map((x) => {
        return '<span class="fa fa-star" aria-hidden="true"></span>'
    })

    // Add half-stars
    if (!Number.isInteger(roundedAverage)) {
        fullStarsHtml.push('<span class="fa fa-star-half-o" aria-hidden="true"></span>')
    }

    // Add empty-stars
    let missingStars = 5 - fullStarsHtml.length
    if (missingStars) {
        for (i = 0; i < missingStars; i++) {
            fullStarsHtml.push('<span class="fa fa-star-o" aria-hidden="true"></span>')
        }
    }

    let html = `<div class="ratings" role="button">${fullStarsHtml.join("")}<span aria-label="total number of reviews" class="number">(${count})</span> </div>`
    return html
};

const buildHtml = async userData => {
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

    // DESKTOP
    for (const product of data.products) {
        html.push(
            `<div class="col-xs-3 product-element"> <a href="https://www.livingspaces.com/${
            product.pid
            }"> <img src="https://www.livingspaces.com/globalassets/productassets/200000-299999/250000-259999/252000-252999/252100-252199/252191/252191_natural_wood_bed_signature_01.jpg?w=263&amp;h=174&amp;mode=pad" class="img-responsive" alt="${
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

    html = `<section id="" class="container board"> <a class="collapse-link" role="button" data-toggle="collapse" href="#moreLikeThis" aria-expanded="true" aria-controls="moreLikeThis"> More Like This<span class="fa fa-angle-down" aria-hidden="true"></span> </a> <div class="collapse in"> <div class="product-grid-component"> <div class="row" id="SuggestedProducts"> ${html.join(
        ""
    )} </div> </div> </div> </section>`;

    $(".cart-content").after(html);

    // Initialize and style slick if on mobile
    if (utag_data.site_type == 'mobile') {
        // MOBILE
        $("#SuggestedProducts").slick({
            infinite: true,
            slidesToShow: 2.5,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
        });
        injectSlickCss()
    }
    return html;
};

injectCss();
buildHtml(utag_data);




//  utag_data={"site_type":"desktop","site_section":"confirmation","page_type":"confirmation","page_name":"order confirmation","product_name":["kerri 2 piece sectional w/laf chaise"],"product_type":["furniture"],"product_category":["upholstery"],"product_id":["107150"],"product_quantity":["1"],"product_price":["895.00"],"customer_city":"la habra","customer_country":"us","customer_postal_code":"90638","customer_state":"ca","customer_email":"josh.simmons@livingspaces.com","unique_id":"a02c3da7f097fc486721b1de5e808cdc28e7301a717e8681dcdbb33c92f87ad5","customer_id":"c-010407447","order_currency_code":"usd","order_grand_total":"1132.23","order_id":"004676663","order_shipping_amount":"139.00","order_subtotal":"895.00","order_tax_amount":"98.23"};