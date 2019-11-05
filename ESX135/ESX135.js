// Experiment Code

window.addEventListener(
  "load",
  function() {
    try {
      if (window.jQuery) {
        $("#remember-me").prop("checked", true);
        $("#remember-me")
          .parent()
          .parent()
          .hide();
      }
    } catch (e) {}
  },
  false
);

// Page targeting - https://www.livingspaces.com/checkout and JS condition:
function jsCondition() {
  return $('span:contains("Sign In")').css("font-weight") == 600;
}

try {
} catch {}
