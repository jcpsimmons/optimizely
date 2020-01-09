// EXPERIMENT CODE
window.addEventListener('load', function () {
  if (window.jQuery) {
    $('.signup-component').remove();
  }
}, false); // SHARED CODE

window.addEventListener('load', function () {
  if (window.jQuery) {
    if ($('.signup-component').length > 0) {
      $('#email_lp_button').on('click', function () {
        window.optimizely = window.optimizely || [];
        window.optimizely.push({
          type: 'event',
          eventName: 'click_email_signup'
        });
      });
    }
  }
}, false);