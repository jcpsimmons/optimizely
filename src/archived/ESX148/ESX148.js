// Retry of ESX114

$(document).ready(() => {
  function toggleBanner() {
    setTimeout(() => {
      if ($("#mitc >a").hasClass("collapsed")) {
        $("#moreInThisColorContainer").hide();
      } else {
        $("#moreInThisColorContainer").show();
      }
    }, 500);
  }

  $("body").on("click", "#mitc > a", () => {
    toggleBanner();
  });

  function titleCase(str) {
    str = str.toLowerCase().split(" ");
    const final = [];
    for (i = 0; i < str.length; i++) {
      final.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
    }
    return final.join(" ");
  }
  const { material } = utag_data;
  const productAttribute = titleCase(utag_data.product_attribute);
  const colorFamily = utag_data.colorfamily;
  const currentPagePdp = utag_data.product_id[0];
  const queryUrl = `https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&request_id=fd8d6a02a5764b7995c600e766a38bda&url=%2fbr-checker&_br_uid_2=uid%253D4961390647524%253Av%253D11.8%253Ats%253D1463613117510%253Ahc%253D3145&ptype=other&request_type=search&q=%22${productAttribute}%22&start=0&rows=13&search_type=keyword&fl=title,pid,url,price,sale_price,reviews,reviews_count,thumb_image&fq=product_attribute%3A%22${productAttribute}%22&fq=color_groups%3A%22${colorFamily}%22&f_material_type=${material}`;

  window.$.get(queryUrl, data => {
    const returnedItems = [];
    let getNumber = 0;
    if (data.response.docs.length > 13) {
      getNumber = 13;
    } else {
      getNumber = data.response.docs.length;
    }
    for (i = 0; i < getNumber; i++) {
      const curUrl = String(data.response.docs[i].url);
      if (curUrl.search("cv") == -1) {
        returnedItems.push(curUrl);
      }
    }
    if (returnedItems.length < 4) {
      return;
    }
    if (utag_data.site_type == "mobile") {
      var slickSliderInjection =
        "<section class='board' id='mitc'><a class='collapse-link' style='pointer-events:none;' role='button' data-toggle='collapse' href='#moreInThisColor' aria-expanded='true' aria-controls='moreInThisColor'>More in This Color</a><div id='moreInThisColorContainer' class='collapse in' aria-expanded='true' style><div id='moreInThisColor' class='slick-matching-colors mobile-carousel-component'>";
      for (i = 0; i < returnedItems.length; i++) {
        if (returnedItems[i] == currentPagePdp) {
        } else {
          var resizedImage = data.response.docs[i].thumb_image.replace(
            "?w=446&h=296",
            "?w=230&h=155"
          );
          slickSliderInjection += `<div class='col-xs-3'><a href='${data.response.docs[i].url}'><img class='img-responsive' src='${resizedImage}' alt='${data.response.docs[i].title}'></a></div>`;
        }
      }
      slickSliderInjection += "</div></div></section>";
      $("#recentlyViewed")
        .parent()
        .parent()
        .before(slickSliderInjection);
      window.$(".slick-matching-colors").slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: false
      });
    } else {
      var slickSliderInjection =
        "<section class='board' id='mitc'><a class='collapse-link' style='pointer-events:none;' role='button' data-toggle='collapse' href='#moreInThisColor' aria-expanded='true' aria-controls='moreInThisColor'>More in This Color</a><div id='moreInThisColorContainer' class='collapse in' aria-expanded='true' style><div id='moreInThisColor' class='slick-matching-colors row carousel-component'>";
      for (i = 0; i < returnedItems.length; i++) {
        if (returnedItems[i] == currentPagePdp) {
        } else {
          var resizedImage = data.response.docs[i].thumb_image.replace(
            "?w=446&h=296",
            "?w=230&h=155"
          );
          slickSliderInjection += `<div class='col-xs-3'><a href='${data.response.docs[i].url}'><img class='img-responsive' src='${resizedImage}' alt='${data.response.docs[i].title}'></a></div>`;
        }
      }
      slickSliderInjection += "</div></div></section>";
      $("#recentlyViewed")
        .parent()
        .parent()
        .before(slickSliderInjection);
      window.$(".slick-matching-colors").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: true,
        autoplay: false
      });
    }
  });

  $("body").on("click", "#moreInThisColorContainer", () => {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({
      type: "event",
      eventName: "clickMoreInThisColor"
    });
  });
});
