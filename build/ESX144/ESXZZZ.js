var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== 'undefined') {
    clearInterval(anotherInterval);
    $(document).ready(function () {
      $('body').on('click', '.product-info-component .img-wrapper', function () {
        window.$('.action-buttons #largeViewLink').trigger('click');
      });
    });
  }
}, 50);
$(document).ready(function () {
  $('body').on('click', '.action-buttons #largeViewLink', function () {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({
      type: 'event',
      eventName: 'largeView_icon'
    });
  });
  $('body').on('click', '.product-info-component .img-wrapper', function () {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({
      type: 'event',
      eventName: 'signature_img'
    });
  });
});