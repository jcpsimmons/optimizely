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
    #productImageGallery .slick-initialized{
      padding: 0 6.2rem;
    }
    #productImageGallery .slick-slide img{
      max-height: inherit;
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
      <div class="row">
      ${images
        .map((img) => {
          return `
          <div class="col-xs-4">
            <img
              src="${img.src}"
              alt="${img.alt}"
              class="img-responsive"
            />
          </div>
        `;
        })
        .join("")}
      </div>
    </div>
  </section>
`;

  // inject the html
  document
    .getElementById("reviews_container")
    .insertAdjacentHTML("afterend", outputHtml);

  // slick code for var 2
  window
    .$("#productImageGallery .row")
    .slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
    })
    .on("beforeChange", function() {
      // change evt for tracking
      window["optimizely"].push({
        type: "event",
        eventName: "187_ciig",
      });
    });

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
