var wait = setInterval(function() {
  if (document.querySelector(".categoryitemsblock")) {
    document
      .querySelector(".categoryitemsblock")
      .insertAdjacentHTML(
        "beforebegin",
        '<style> #FSBar { font-size: 1.6rem !important; text-align: center; justify-content: center; width: 100%; } #FSBar > * { display: inline-block; padding: 1.2rem 0 0; } #FSBar i.fa { font-size: 2rem; margin-right: 1rem; } #FSBar .blktext { margin-left: 0.7rem; font-weight: 600; } #FSBar .blktext * { color: #333333; } #FSBar .blue * { font-weight: bold; color: #00699a; } #FSBar a { text-decoration: none; } </style> <div id="FSBar"> <div class="flex-item blue"> <span><i class="fa fa-truck"></i>FREE Shipping</span> </div> <div class="flex-item blktext"> <span> <a href="/company/shipping-faqs#parcel" >on all accessories, nationwide &rsaquo;</a ></span > </div> </div>'
      );

    document.getElementById("FSBar").addEventListener("click", function() {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "fsb_177",
      });
      window.location.href =
        "https://www.livingspaces.com/company/shipping-faqs#parcel";
    });
    clearInterval(wait);
  }
}, 50);
