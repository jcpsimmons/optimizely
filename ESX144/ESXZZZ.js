// EXPERIMENT CODE - DESKTOP ONLY TEST
var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== 'undefined') {
    clearInterval(anotherInterval);
    $(document).ready(() => {
      $('body').on('click', '.product-info-component .img-wrapper', () => {
        window.$('.action-buttons #largeViewLink').trigger('click');
      });
    });
  }
}, 50);

// clicked - large view icon
//  clicked - signature image

// SHARED CODE
$(document).ready(() => {
  $('body').on('click', '.action-buttons #largeViewLink', () => {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({
      type: 'event',
      eventName: 'largeView_icon',
    });
  });

  $('body').on('click', '.product-info-component .img-wrapper', () => {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({
      type: 'event',
      eventName: 'signature_img',
    });
  });
});
