$(document).ready(() => {
  window.EventBus.$on('productResultsUpdated', (data) => {
    if (data.facet == 'features') {
      window.optimizely = window.optimizely || [];
      window.optimizely.push({
        type: 'event',
        eventName: 'clickFeaturesFacet',
      });
    }
  });
});
