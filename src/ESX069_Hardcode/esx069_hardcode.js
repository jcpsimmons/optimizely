// ESX 069 Hardcode

function addSpecialOrderText() {
  var specialOrderTextExists;

  try {
    specialOrderTextExists =
      document.querySelector(".update-link").textContent ==
      "Special Order Selections";
  } catch {
    specialOrderTextExists = false;
  }

  if (utag_data.site_type == "desktop" && specialOrderTextExists) {
    var injection = document.createElement("div");
    injection.className = "co_message_wrapper";
    injection.innerHTML =
      '<img src="/Content/images/assets/color-swatch.png" alt="color-swatch" class="special-order img-responsive"/> <p>Customized orders are not eligible for returns. Any customized item cancelled prior to delivery are subject to 25% fee.</p>';
    document
      .querySelector("#couponContainer")
      .parentNode.insertAdjacentElement("afterend", injection);
  } else if (utag_data.site_type == "mobile" && specialOrderTextExists) {
    var injection = document.createElement("div");
    injection.className = "co_message_wrapper";
    injection.innerHTML =
      '<img src="/Content/images/assets/color-swatch.png" alt="color-swatch" class="special-order img-responsive"/> <p>Custom orders cannot be returned and will be subject to a 25% fee if cancelled prior to delivery.</p>';

    document
      .querySelector("#couponContainer")
      .parentNode.insertAdjacentElement("afterend", injection);
  }
}

function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(addSpecialOrderText);
