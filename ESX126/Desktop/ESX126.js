var anotherInterval = setInterval(function() {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    function titleCase(str) {
      str = str.toLowerCase().split(" ");
      var final = [];
      for (i = 0; i < str.length; i++) {
        final.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
      }
      return final.join(" ");
    }
    var size = utag_data.size;
    var productAttribute = titleCase(utag_data.product_attribute);
    var colorFamily = utag_data.colorfamily;
    var currentPageSku = utag_data.product_id[0];
    var queryUrl =
      "https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&request_id=fd8d6a02a5764b7995c600e766a38bda&url=%2fbr-checker&_br_uid_2=uid%253D4961390647524%253Av%253D11.8%253Ats%253D1463613117510%253Ahc%253D3145&ptype=other&request_type=search&q=%22" +
      size +
      "%22&start=0&rows=4&search_type=keyword&fl=title,pid,url,price,sale_price,reviews,reviews_count,thumb_image&fq=product_attribute%3A%22" +
      productAttribute +
      "%22&fq=color_groups%3A%22" +
      colorFamily;

    window.$.get(queryUrl, function(data) {
      if (data.response.docs.length > 3) {
        $("#moreLikeThis .product-grid-component .row")
          .children()
          .remove();
        $("a[href$='#moreLikeThis']")
          .text("More in This Size")
          .append("<span class='fa fa-angle-down' aria-hidden='true'></span>")
          .attr("href", "#moreInThisSizeContainer")
          .attr("aria-controls", "moreInThisSizeContainer");
        for (i = 0; i < data.response.docs.length; i++) {
          if (data.response.docs[i].pid != currentPageSku) {
            // make sure this page's sku isnt included in results
            $("#moreLikeThis .product-grid-component .row").append(
              "<div class='col-md-3 col-xs-6 product-element'><a href='" +
                String(data.response.docs[i].url) +
                "'><img src='" +
                String(data.response.docs[i].thumb_image) +
                "'alt='" +
                String(data.response.docs[i].title) +
                "' class='img-responsive'><span class='title'>" +
                String(data.response.docs[i].title) +
                "</span><span class='price'>" +
                "$" +
                String(data.response.docs[i].sale_price) +
                "</span>"
            );
          }
        }
      }
    });
    $("body").on("click", "#moreInThisSizeContainer", function() {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "click_more_like_this"
      });
    });
  }
}, 50);
