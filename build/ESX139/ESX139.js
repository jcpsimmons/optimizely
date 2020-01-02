"use strict";

// Targeting Code
function jsCondition() {
  return utag_data.product_group_id == 'dining tables';
} // Experiment Code


function titleCase(str) {
  str = str.toLowerCase().split(' ');
  var _final = [];

  for (i = 0; i < str.length; i++) {
    _final.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
  }

  return _final.join(' ');
}

function desktop() {
  var _utag_data = utag_data,
      material = _utag_data.material;
  var group = utag_data.product_group_id;
  var productAttribute = titleCase(utag_data.product_attribute);
  var colorFamily = utag_data.colorfamily;
  var currentPagePdp = utag_data.product_id[0];
  var queryUrl = "https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&request_id=fd8d6a02a5764b7995c600e766a38bda&url=%2fbr-checker&_br_uid_2=uid%253D4961390647524%253Av%253D11.8%253Ats%253D1463613117510%253Ahc%253D3145&ptype=other&request_type=search&q=%22".concat(productAttribute, "%22&start=0&rows=13&search_type=keyword&fl=title,pid,url,price,sale_price,reviews,reviews_count,thumb_image&fq=product_attribute%3A%22").concat(productAttribute, "%22&fq=color_groups%3A%22").concat(colorFamily, "%22&f_material_type=").concat(material);
  window.$.get(queryUrl, function (data) {
    var returnedItems = [];
    var getNumber = 0;

    if (data.response.docs.length > 13) {
      getNumber = 13;
    } else {
      getNumber = data.response.docs.length;
    }

    for (i = 0; i < getNumber; i++) {
      var curUrl = String(data.response.docs[i].url);

      if (curUrl.search('cv') == -1) {
        returnedItems.push(curUrl);
      }
    }

    if (returnedItems.length < 4) {
      return;
    }

    var slickSliderInjection = "<div id='moreInThisColorContainer' class='collapse in' aria-expanded='true' style><div id='moreInThisColor' class='slick-matching-colors row carousel-component'>";

    for (i = 0; i < returnedItems.length; i++) {
      if (returnedItems[i] == currentPagePdp) {} else {
        var resizedImage = data.response.docs[i].thumb_image.replace('?w=446&h=296', '?w=230&h=155');
        slickSliderInjection += "<div class='col-xs-3'><a href='".concat(data.response.docs[i].url, "'><img class='img-responsive' src='").concat(resizedImage, "' alt='").concat(data.response.docs[i].title, "'></a></div>");
      }
    }

    slickSliderInjection += '</div></div>';
    slickSliderInjection = "<section class='container board'><a class='collapse-link' role='button' data-toggle='collapse' href='#moreInThisColorContainer' aria-expanded='true' aria-controls='#moreInThisColorContainer'>More In This Color<span class='fa fa-angle-down' aria-hidden='true'></span></a>".concat(slickSliderInjection, "</section>");
    $('#reviews_container').after(slickSliderInjection);
    window.$('.slick-matching-colors').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      arrows: true,
      autoplay: false
    });
    $("a[href$='#moreLikeThis']").text('More In This Color').append("<span class='fa fa-angle-down' aria-hidden='true'></span>").attr('href', '#moreInThisColorContainer').attr('aria-controls', '#moreInThisColorContainer');
  });
  $('body').on('click', '#moreInThisColorContainer', function () {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({
      type: 'event',
      eventName: 'clickMoreInThisColor'
    });
  });
}

function mobile() {
  $('body').append('<style>#moreInThisColor .slick-slide {padding-left:1.2rem;} #moreInThisColor .slick-track {padding-left:2.3rem;}</style>');
  var _utag_data2 = utag_data,
      material = _utag_data2.material;
  var group = utag_data.product_group_id;
  var productAttribute = titleCase(utag_data.product_attribute);
  var colorFamily = utag_data.colorfamily;
  var currentPagePdp = utag_data.product_id[0];
  var queryUrl = "https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&request_id=fd8d6a02a5764b7995c600e766a38bda&url=%2fbr-checker&_br_uid_2=uid%253D4961390647524%253Av%253D11.8%253Ats%253D1463613117510%253Ahc%253D3145&ptype=other&request_type=search&q=%22".concat(productAttribute, "%22&start=0&rows=13&search_type=keyword&fl=title,pid,url,price,sale_price,reviews,reviews_count,thumb_image&fq=product_attribute%3A%22").concat(productAttribute, "%22&fq=color_groups%3A%22").concat(colorFamily, "%22&f_material_type=").concat(material);
  window.$.get(queryUrl, function (data) {
    var returnedItems = [];
    var getNumber = 0;

    if (data.response.docs.length > 13) {
      getNumber = 13;
    } else {
      getNumber = data.response.docs.length;
    }

    for (i = 0; i < getNumber; i++) {
      var curUrl = String(data.response.docs[i].url);

      if (curUrl.search('cv') == -1) {
        returnedItems.push(curUrl);
      }
    }

    if (returnedItems.length < 4) {
      return;
    }

    var slickSliderInjection = "<div id='moreInThisColorContainer' class='collapse in' aria-expanded='true' style><div id='moreInThisColor' class='slick-matching-colors row'>";

    for (i = 0; i < returnedItems.length; i++) {
      if (returnedItems[i] == currentPagePdp) {} else {
        var resizedImage = data.response.docs[i].thumb_image;
        slickSliderInjection += "<a href='".concat(data.response.docs[i].url, "'><img class='img-responsive' src='").concat(resizedImage, "' alt='").concat(data.response.docs[i].title, "'></a>");
      }
    }

    slickSliderInjection += '</div></div>';
    slickSliderInjection = "<section class='board'><a class='collapse-link' role='button' data-toggle='collapse' href='#moreInThisColorContainer' aria-expanded='true' aria-controls='#moreInThisColorContainer'>More In This Color<span class='fa fa-angle-down' aria-hidden='true'></span></a>".concat(slickSliderInjection, "</section>");
    $('#reviews_content_wrap').after(slickSliderInjection);
    window.$('.slick-matching-colors').slick({
      infinite: false,
      slidesToShow: 2.7,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      autoplay: false
    });
  });
  $('body').on('click', '#moreInThisColorContainer', function () {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({
      type: 'event',
      eventName: 'clickMoreInThisColor'
    });
  });
}

var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== 'undefined' && $('#omniinventory').length > 0) {
    clearInterval(anotherInterval);

    if (utag_data.site_type == 'mobile') {
      mobile();
    } else {
      desktop();
    }
  }
}, 50);