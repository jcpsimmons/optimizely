document.querySelector("head").insertAdjacentHTML(
  "beforeend",
  `
<style>
.out-stock {
    width: ${document.querySelector("#product-detail-page-vue").offsetWidth}px
}
#ESX180 {
    font-size:1.6rem;
    white-space: normal;
}
</style>
`
);

document.querySelector(
  ".out-stock"
).innerHTML = `<p id="ESX180">We plan on getting more inventory, sign up to be alerted by email below</p>`;

window.addEventListener("resize", () => {
  console.log("resize");
  document.getElementById("ESX180").parentElement.style.width = `${
    document.querySelector("#product-detail-page-vue").offsetWidth
  }px`;
});


let x = html`<img src>`