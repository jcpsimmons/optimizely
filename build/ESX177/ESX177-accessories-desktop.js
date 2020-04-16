document.querySelectorAll(".category-blocks-component")[document.querySelectorAll(".category-blocks-component").length - 1].insertAdjacentHTML("afterend", '<style> #FSBar { cursor: pointer; font-size: 1.6rem !important; font-weight: bold; display: flex; margin: auto; text-align: center; justify-content: center; margin-bottom: 6rem; } #FSBar > * { width: 38rem; padding: 1.3rem 0; } #FSBar i.fa { font-size: 2rem; margin-right: 1rem; } #FSBar .grey-bg { background-color: #f2f2f2; } #FSBar .grey-bg * { color: #333333; font-weight: 600; } #FSBar .blue-bg { background: #00699a; } #FSBar .blue-bg * { color: #ffffff; } #FSBar a { text-decoration: none; cursor: pointer; } #FSBar a:hover { text-decoration: none; } </style> <div id="FSBar"> <div class="flex-item blue-bg"> <span class="white-text" ><i class="fa fa-truck"></i>FREE Shipping Nationwide ALL Accessories</span > </div> <div class="flex-item grey-bg"> <span >No minimum purchase needed. <a href="/company/shipping-faqs#parcel">Learn more &rsaquo;</a></span > </div> </div>');
document.getElementById("FSBar").addEventListener("click", function () {
  window["optimizely"] = window["optimizely"] || [];
  window["optimizely"].push({
    type: "event",
    eventName: "fsb_177",
    tags: {
      revenue: 0,
      value: 0.0
    }
  });
  window.location.href = "https://www.livingspaces.com/company/shipping-faqs#parcel";
});