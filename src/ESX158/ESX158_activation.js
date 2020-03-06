// Wait for the questions to load

// ESX158 Hook for Optimizely
if (
  utag_data.product_attribute.search(/sofa|dining chair|bed/) > -1 &&
  utag_data.site_type == "desktop"
) {
  let tableHeaders = Array.from(document.querySelectorAll("th")).map(item => {
    return item.textContent.trim();
  });

  let searchingFor = [
    "Seat Height",
    "Recommended Weight Capacity",
    "Seat Type",
    "Back Type",
    "What type of assembly is required",
    "Recommended Box Spring"
  ];

  const matchFound = searchingFor.some(r => tableHeaders.indexOf(r) >= 0);

  if (matchFound) {
    let ESX158Interval = setInterval(() => {
      if (
        document.getElementById("BVQANoQuestionsID") ||
        document.getElementById("BVQAQuestionsID")
      ) {
        if (
          document.getElementById("BVQANoQuestionsID") ||
          document.querySelectorAll(".BVQAQuestionSummary").length < 6
        ) {
          console.debug("Page eligible for ESX158");
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
