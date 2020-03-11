if (utag_data.product_attribute.search(/sofa|dining chair|bed/) > -1 && utag_data.site_type == "desktop") {
  var tableHeaders = Array.from(document.querySelectorAll("th")).map(function (item) {
    return item.textContent.trim();
  });
  var searchingFor = ["Seat Height", "Recommended Weight Capacity", "Seat Type", "Back Type", "What type of assembly is required", "Recommended Box Spring"];
  var matchFound = searchingFor.some(function (r) {
    return tableHeaders.indexOf(r) >= 0;
  });

  if (matchFound) {
    var ESX158Interval = setInterval(function () {
      if (document.getElementById("BVQANoQuestionsID") || document.getElementById("BVQAQuestionsID")) {
        if (document.getElementById("BVQANoQuestionsID") || document.querySelectorAll(".BVQAQuestionSummary").length < 6) {
          window["optimizely"] = window["optimizely"] || [];
          window["optimizely"].push({
            type: "page",
            pageName: "ESX158_PageActivation"
          });
        }

        clearInterval(ESX158Interval);
      }
    }, 50);
  }
}