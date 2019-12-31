$(document).ready(() => {
  $('.secondary-nav .container .row .col-sm-6:first-of-type').empty();

  const firstLink = "<a id='animation1' class='banner-text white-link' href='https://www.livingspaces.com/delivery'>Now delivering nationwide starting at $99.</a>";

  const secondLink = "<a id='animation2' class='banner-text white-link' href='https://www.livingspaces.com/company/financing'><i class='fa fa-credit-card' aria-hidden='true'></i> Special Financing Available Today!</a>";

  $('.secondary-nav .container .row .col-sm-6:first-of-type').html(firstLink);

  function addRemAnimation() {
    $('.secondary-nav .container .row .col-sm-6:first-of-type')
      .removeClass('in-n-out')
      .addClass('in-n-out');
  }

  function flipFlop(state) {
    addRemAnimation();
    if (state == 1) {
      $('.secondary-nav .container .row .col-sm-6:first-of-type').html(
        firstLink,
      );
      $('#animation1').one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
          $(this).hide();
          $('.secondary-nav .container .row .col-sm-6:first-of-type').empty();
        },
      );
    } else {
      $('.secondary-nav .container .row .col-sm-6:first-of-type').html(
        secondLink,
      );
      $('#animation2').one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
          $(this).hide();
          $('.secondary-nav .container .row .col-sm-6:first-of-type').empty();
        },
      );
    }
  }

  addRemAnimation();
  let state = 2;
  setInterval(() => {
    flipFlop(state);
    if (state == 1) {
      state = 2;
    } else {
      state = 1;
    }
  }, 7000);
});

// FOR BOTH VARIATIONS
$(document).ready(() => {
  $('.secondary-nav .container .row .col-sm-6:first-of-type').click(() => {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({
      type: 'event',
      eventName: 'clickBannerLink',
    });
  });
});
