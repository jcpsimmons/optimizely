// USE CSS INSTEAD
// IN OTHER FILE

//VARIATION CODE
var anotherInterval = setInterval(function() {
  if (typeof window.jQuery !== "undefined" && $("#omniinventory").length > 0) {
    clearInterval(anotherInterval);
    if ($('a[href*="/rialto-dc"]').length > 0) {
      $('a[href*="/rialto-dc"]')
        .parent()
        .hide();
    }
  }
}, 50);

// JS Function Code
function jsCondition() {
  store = utag_data["cp.lsf-my-store-id"];
  if (
    ["01", "03", "04", "05", "06", "07", "08", "09", "12", "13"].indexOf(
      store
    ) !== -1 &&
    store !== "88"
  ) {
    return true;
  }
}

01|03|04|05|06|07|08|09|12|13