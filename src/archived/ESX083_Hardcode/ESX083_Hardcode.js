function ESX083() {
  var conditionCheck = setInterval(function() {
    if (window.jQuery && window.openWelcomePopUp) {
      if (
        (window.location.href.indexOf("gclid") >= 0 &&
          document.referrer.indexOf("www.google.com") >= 0) ||
        (document.referrer.indexOf("www.livingspaces.com") < 0 &&
          document.referrer.indexOf("www.google.com") < 0 &&
          document.referrer != "")
      ) {
        window.$.cookie("lsf-email-request-overlay", true, {
          expires: 60,
          path: "/"
        });
        openWelcomePopUp();
        clearInterval(conditionCheck);
      }
    }
  });
  setTimeout(function() {
    try {
      clearInterval(conditionCheck);
    } catch (error) {}
  }, 5000);
}

ESX083();
