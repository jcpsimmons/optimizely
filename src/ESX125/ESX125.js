window.addEventListener(
  'load',
  () => {
    if (window.jQuery) {
      window
        .$('.navbar-collapse')
        .children('.nav')
        .click(() => {
          window.optimizely = window.optimizely || [];
          window.optimizely.push({
            type: 'event',
            eventName: 'clickedSortingFacet',
          });
        });
      window.EventBus.$on('productResultsUpdated', (data) => {
        window
          .$('.navbar-collapse')
          .children('.nav')
          .click(() => {
            console.log('ESX125_CLICKEVENT');
            window.optimizely = window.optimizely || [];
            window.optimizely.push({
              type: 'event',
              eventName: 'clickedSortingFacet',
            });
          });
      });
    }
  },
  false,
);
