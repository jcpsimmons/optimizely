$(document).ready(() => {
  $('body').on('click', '#block226978', () => {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({
      type: 'event',
      eventName: 'click_quick_links',
    });
  });
});
