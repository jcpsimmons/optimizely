// Experiment Code

var anotherInterval = setInterval(function () {
    if (typeof window.jQuery !== "undefined" && $('#omniinventory').length > 0) {
        clearInterval(anotherInterval);
        modalHtml =
            "<div class='modal fade' id='packageDimensionsModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel'style='display: none;'><div class='modal-dialog' role='document'><div class='modal-content'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button><div class='modal-header text-center'><span src='Content/images/assets/pickup-20x20.png' role='presentation' alt='' style='max-width: 1.8rem;'class='fa fa-cube fa-2x'></span><h4 class='modal-title'>Package Dimensions</h4></div><div class='modal-body'><ul class='pickup-list'><li>Case goods are packaged in boxes and come partially- or fully-assembled. Please check the product details for assembly time estimates.</li><li>Upholstery items are wrapped in a protective plastic packaging for transit.</li><li>For safe and secure transit, always verify that you have extra room in addition to the package dimensions listed.</li></ul></div></div></div></div>";
        $("#omniinventory").append(modalHtml);
        packageDimensions = $("th:contains('Package')")
            .next()
            .text()
            .trim();
        insertHtml =
            "<li id='packageModalClick'><span src='Content/images/assets/pickup-20x20.png' role='presentation' alt='' style='max-width: 1.8rem;' class='fa fa-cube'></span><img src='Content/images/assets/pickup-138.png' class='hidden in-store' role='presentation' alt=''>Package Dimensions: " +
            packageDimensions +
            " <a href='#' class='fa fa-question-circle' data-target='#packageDimensionsModal' data-toggle='modal'><span class='sr-only'>Click for more package dimension details</span></a></li>";
        $("#omniinventory .list-unstyled:first-of-type").append(insertHtml);
        $("#packageModalClick").click(function () {
            window['optimizely'] = window['optimizely'] || [];
            window['optimizely'].push({
                type: "event",
                eventName: "openPkgDimMobile",
            });
        });
    }
}, 50);






// Polling Function
function jsCondition() {
    return $("th:contains('Package')").length > 0
}
