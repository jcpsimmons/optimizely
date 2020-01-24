if (document.querySelectorAll('.product-icons li').length > 1) {
  document.querySelector('li[data-icon="Product Dimensions"]').style.display = 'none';
} else {
  document.querySelector('.product-icons').style.display = 'none';
}

if (utag_data.site_type == 'desktop') {
  var dimensionsImage = document.querySelector('div.thumb img[alt*=Dimensions]').src.split('?')[0] + '?w=1000&h=674&mode=pad';
  document.getElementById('pdp_icon_diagram').src = dimensionsImage;
} else {
  var dimensionsImage = document.querySelector('#imgSlider img[alt*=Dimensions]').src.split('?')[0] + '?w=1000&h=674&mode=pad';
  document.getElementById('pdp_icon_diagram').src = dimensionsImage;
}

document.querySelector('li[data-icon="Product Dimensions"]').addEventListener('click', function () {
  window['optimizely'] = window['optimizely'] || [];
  window['optimizely'].push({
    type: "event",
    eventName: "clickDimensionsIcon"
  });
});
["101626", "103936", "107293", "108724", "107150", "107153", "110217", "206402", "208176", "206428", "217438", "223311", "223511", "220649", "223319", "223334", "228238", "224793", "221606", "223336", "225820", "206430", "214362", "58274", "56131", "85720", "87980", "91615", "94752", "85728", "86396", "90112", "89893", "94755", "73327", "85707", "90543", "224796", "85678", "85686", "85699", "231742", "233740"].indexOf(utag_data.product_id[0]) !== -1;