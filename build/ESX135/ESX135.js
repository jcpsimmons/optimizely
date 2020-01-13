window.addEventListener("load", function () {
  try {
    if (window.jQuery) {
      $("#remember-me").prop("checked", true);
      $("#remember-me").parent().parent().hide();
    }
  } catch (e) {}
}, false);

function jsCondition() {
  return $('span:contains("Sign In")').css("font-weight") == 600;
}

try {} catch (_unused) {}