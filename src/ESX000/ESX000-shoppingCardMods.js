// close button text
const button = document.querySelector(
  "#shippingVersusFullDelivery button.close"
);

button.style.display = "flex";
button.style.alignItems = "center";

button.querySelector("span").style.display = "block";

button
  .querySelector("span")
  .insertAdjacentHTML(
    "beforebegin",
    `<span style="font-size: 2.2rem; margin-right: 1rem; display: block;" aria-hidden="true">CLOSE</span>`
  );

// video insert
