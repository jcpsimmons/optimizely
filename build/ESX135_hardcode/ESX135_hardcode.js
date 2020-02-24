function esx135Hardcode() {
  function checkAndHide() {
    var checkoutButton = document.getElementById("remember-me");
    checkoutButton.checked = true;
    checkoutButton.parentNode.parentNode.style.display = "none";
  }

  function ready(fn) {
    if (document.readyState != "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(checkAndHide);
}

esx135Hardcode();