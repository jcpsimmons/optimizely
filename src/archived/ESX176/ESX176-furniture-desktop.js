document
  .querySelectorAll(".category-blocks-component")
  [
    document.querySelectorAll(".category-blocks-component").length - 1
  ].insertAdjacentHTML(
    "afterend",
    '<style> #FSBar { cursor: pointer; font-size: 1.6rem !important; font-weight: bold; display: flex; margin: auto; text-align: center; justify-content: center; margin-bottom: 6rem; } #FSBar > * { padding: 1.3rem 0; } #FSBar i.fa { font-size: 2rem; margin-right: 1rem; } #FSBar .grey-bg { width: 48.5rem; background-color: #f2f2f2; font-weight: 600; } #FSBar .grey-bg * { color: #333333; } #FSBar .blue-bg { width: 27.5rem; background: #00699a; } #FSBar .blue-bg * { color: #ffffff; } #FSBar a { text-decoration: none; cursor: pointer; } #FSBar a:hover { text-decoration: none; } </style> <div id="FSBar"> <div class="flex-item blue-bg"> <span class="white-text" ><i class="fa fa-truck"></i>New! FREE 2-Day Shipping</span > </div> <div class="flex-item grey-bg"> <span >Eligible on all orders over $500. <a href="/company/shipping-faqs#parcel" >Check availability in your area &rsaquo;</a ></span > </div> </div>'
  );

document.getElementById("FSBar").addEventListener("click", function() {
  window["optimizely"] = window["optimizely"] || [];
  window["optimizely"].push({
    type: "event",
    eventName: "fsb_176",
    tags: {
      revenue: 0, // Optional in cents as integer (500 == $5.00)
      value: 0.0, // Optional as float
    },
  });
  window.location.href = "https://www.livingspaces.com/delivery";
});
