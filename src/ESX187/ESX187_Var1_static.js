const ESX187 = () => {
  // grab/filter/modifiy image links and alt text
  var images = Array.from(
    document.querySelectorAll(".row.thumb-list .thumb.img-click img")
  )
    .filter(
      (img) => img.alt.search("360") == -1 && img.src.search("akamai") == -1
    )
    .map((img) => {
      const output = {};
      output.src = img.src.split("?")[0] + "?w=380&h=256&mode=pad"; // resize query param
      output.alt = img.alt;
      return output;
    });

  // generate html
  let outputHtml = `
  <style>
    #productImageGallery .row {
      margin: 0;
    }
    #productImageGallery .col-xs-4 {
      padding: 0.2rem;
    }
  </style>
  <section class="board" id="ESX187">
    <a
      class="collapse-link"
      role="button"
      data-toggle="collapse"
      href="#productImageGallery"
      aria-expanded="true"
      aria-controls="productImageGallery"
      >Product Image Gallery<span
        class="fa fa-angle-down"
        aria-hidden="true"
      ></span
    ></a>
    <div class="container collapse in" id="productImageGallery">

      ${images
        .map((img, index) => {
          let output = `
          <div class="col-xs-4">
            <img
              src="${img.src}"
              alt="${img.alt}"
              class="img-responsive"
            />
          </div>
        `;
          //  omit this for slick slider version - batches images in rows to take care of wrapping in grid
          if (index == 0) {
            output = `<div class="row">${output}`;
          } else if (index == images.length) {
            output = `${output}</div>`;
          } else if ((index + 1) % 3 == 0) {
            output = `${output}</div><div class="row">`;
          }
          console.log(output);
          return output;
        })
        .join("")}

    </div>
  </section>
`;

  // inject the html
  document
    .getElementById("reviews_container")
    .insertAdjacentHTML("afterend", outputHtml);

  document.addEventListener("click", (e) => {
    if (e.target.closest("#ESX187")) {
      // OPTIMIZELY CLICK EVENT HERE
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "187_ciig",
      });
    }
  });
};

var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    $(document).ready(ESX187);
  }
}, 50);
