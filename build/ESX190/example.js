var ESX999 = function ESX999($) {
  document.addEventListener("click", function (e) {
    if (e.target.closest("#target .selector .here")) {}
  });
};

var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    $(document).ready(function () {
      ESX999();
    });
  }
}, 50);