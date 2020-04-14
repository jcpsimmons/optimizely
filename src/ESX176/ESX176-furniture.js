document.querySelector("header").style.marginBottom = 0;

var message = [
  "New! FREE 2-Day Shipping",
  '<span >Eligible on all orders over $500. <a href="/delivery">Check availability in your area &rsaquo;</a></span >'
];

var padding = "1.2rem 0";

if (utag_data.site_type == "mobile") {
  message = [
    "FREE 2-Day Shipping",
    '<span ><a href="/delivery">Check your availability &rsaquo;</a></span >'
  ];
  padding = ".7rem 0";
}
document
  .querySelector("#free-shipping-header-vue-container .alert-dismissible")
  .insertAdjacentHTML(
    "afterend",
    "<style> #FSBar { cursor:pointer;background-color: #f2f2f2; width: 100%; font-size: 1.6rem !important; text-align: center; padding:" +
      padding +
      '; } #FSBar i.fa { margin-right: 1rem; } #FSBar span { color: #333333; font-weight: 600; margin: auto 0.3rem; } #FSBar .blue-text { color: #00699a; font-weight: bold; } #FSBar a { text-decoration: none; cursor: pointer; } #FSBar a:hover { text-decoration: none; } </style> <div id="FSBar"> <span class="blue-text" ><i class="fa fa-truck"></i>' +
      message[0] +
      "</span >" +
      message[1] +
      "</div> "
  );

document.getElementById("FSBar").addEventListener("click", function() {
  window.location.href = "https://www.livingspaces.com/delivery";
});
