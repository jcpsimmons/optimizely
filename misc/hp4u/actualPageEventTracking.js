function addTrackers() {
  $('.price-text')
    .parent()
    .click(() => {
      window.optimizely = window.optimizely || [];
      window.optimizely.push({
        type: 'event',
        eventName: 'clicked-product-tile',
        tags: {},
      });
    });

  $('#RelatedLinks li a').click(() => {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({
      type: 'event',
      eventName: 'click-cat-tile',
      tags: {},
    });
  });
}

var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== 'undefined') {
    clearInterval(anotherInterval);
    addTrackers();
  }
}, 50);


//
$('a:contains(Inspiration)').parent().hover(() => { console.log('boo'); });
