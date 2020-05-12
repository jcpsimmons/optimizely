document.addEventListener("DOMContentLoaded", function(event) {
  // ESX161
  let html = `
  
  <!-- append to body -->
  <!-- add onclick to it instead of link -->
  <style>
    #BackToTop {
      transform: scale(.8);
      transition: .1s;
      display: none;
      position: fixed;
      bottom: 83px;
      right: 20px;
      background-color: #333;
      border-radius: 10px;
      border: 3px solid #fff;
      color: #fff;
      flex-direction: column;
      padding: 0 1rem 0.65rem;
      text-align: center;
      text-transform: uppercase;
      font-size: 1.3rem;
      z-index: 100;
    }
    #BackToTop i {
      margin: -0.7rem auto -1rem;
    }
  </style>
  
  <div id="BackToTop">
    <i class="fa fa-4x fa-angle-up" aria-hidden="true"></i>
    <span>top<span></span></span>
  </div>
  
  `;

  // add element
  document.querySelector("body").insertAdjacentHTML("beforeend", html);

  const el = document.getElementById("BackToTop");

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      el.style.display = "flex";
      console.log("display");
    }
    if (scrolled < coords) {
      el.style.display = "none";
      console.log("hide");
    }
  }

  function backToTop() {
    // Scroll to top behavior activate
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  // check intersections with footer (change positioning)
  // no longer need with intercom

  // const footer = document.querySelector("footer");

  // const observer = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     if (
  //       entry.intersectionRatio > 0 &&
  //       !Boolean(document.getElementById("StickyButtonWrapper"))
  //     ) {
  //       el.style.bottom = "200px";
  //     } else {
  //       el.style.bottom = "75px";
  //     }
  //   });
  // });

  // observer.observe(footer);

  // scroll and click listeners
  document.addEventListener("scroll", trackScroll);

  el.addEventListener("click", () => {
    // optimizely event
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "clickBackToTopButton",
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
    backToTop();
  });
});
