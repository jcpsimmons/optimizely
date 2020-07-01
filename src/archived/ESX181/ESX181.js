const ESX181 = () => {
  document.querySelector("head").insertAdjacentHTML(
    "beforeend",
    `<style>
  #productImageGallery .container img.img-responsive { display: block; margin-bottom: 1rem }
  </style>`
  );

  let images = [...document.querySelectorAll("#imgSlider img")].map((el) => {
    return el.outerHTML;
  });

  // the second image is actually the primary image so move image 1 to the end of the line!
  images.push(images.shift());

  let filteredImages = [];

  // deduplicate and preserve order
  images.forEach((img) => {
    if (filteredImages.indexOf(img) == -1) {
      filteredImages.push(img);
    }
  });

  filteredImages = filteredImages.join("");

  const productGalleryHtml = `
  <section class="board" id="ESX181">
      <a class="collapse-link" role="button" data-toggle="collapse" href="#productImageGallery" aria-expanded="true" aria-controls="productImageGallery">Product Image Gallery<span class="fa fa-angle-down" aria-hidden="true"></span></a>
      <div class="collapse in" id="productImageGallery">
          <div class="container">
             ${filteredImages}
           </div>
      </div>
  </section>
  `;

  // insert html
  document
    .getElementById("reviews_content_wrap")
    .insertAdjacentHTML("afterend", productGalleryHtml);

  let elemInView = false;

  // on scoll into view throw optimizely evt
  document.addEventListener("scroll", (e) => {
    if (
      document.documentElement.scrollTop + 300 >=
        document.getElementById("ESX181").offsetTop &&
      elemInView == false
    ) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "181_usai",
      });
      elemInView = true;
    }
  });

  document
    .querySelector("#ESX181 .collapse-link")
    .addEventListener("click", (e) => {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "181_ceii",
      });
      console.debug("optimizely evt.");
    });
};

if (document.readyState != "loading") ESX181();
else document.addEventListener("DOMContentLoaded", ESX181);
