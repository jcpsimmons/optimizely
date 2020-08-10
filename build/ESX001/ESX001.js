var addReturnPolicyModal = function addReturnPolicyModal() {
  try {
    var linkSelector = "#omniInventoryHeader > .not-in-store > .header-title > a";
    var link = document.querySelector(linkSelector);
    link.attributes.href = "#";
    link.textContent = "Return Policy";
    document.addEventListener("click", function (e) {
      if (e.target.closest(linkSelector)) {
        e.preventDefault();
        $("#ReturnPolicyModal").modal();
      }
    });
    document.querySelector("body").insertAdjacentHTML("beforeend", "<style> #ReturnPolicyModal img { margin: auto; max-width: 5rem; } #ReturnPolicyModal p { text-align: center; margin-top: 2rem; margin-bottom: 4rem; } #ReturnPolicyModal ul { position: relative; margin-top: 1rem; margin-bottom: 0; } #ReturnPolicyModal li { font-size: 1.8rem; color: #333; font-family: \"Source Sans Pro\", sans-serif; text-align: left; } #ReturnPolicyModal .modal-dialog .modal-header { padding: 4.6rem 0 0; } </style> <div class=\"modal fade\" id=\"ReturnPolicyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" > <div class=\"modal-dialog\" role=\"document\"> <div class=\"modal-content\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" > <span aria-hidden=\"true\">\xD7</span> </button> <div class=\"modal-header text-center\"> <img src=\"/globalassets/images/LP/2020/08/return150x150.png\" class=\"img-responsive\" /> <h4 class=\"modal-title\">Return Policy</h4> </div> <div class=\"modal-body\"> <ul class=\"pickup-list\"> <li> Living Spaces accepts returns within seven (7) days of your receipt of an item </li> <li> You will be charged a 10% restocking fee on all regular stock furniture returns. </li> <li> Living spaces does not charge a restock fee on accessories such as area rugs, lamps, wall art, silk, trees, florals, and table and ledge accessories. </li> <li> Returns are not accepted on Special Order items or as-is marked items. </li> <li> Returns are not accepted on sleep pillows, comforter sets, or other bedding products </li> <li> Living Spaces does not accept returns on mattresses or box springs that do not qualify for a sleep trial* </li> </ul> <p> For more information see our <a style=\"display: inline-block; text-decoration: underline;\" target=\"_blank\" href=\"/company/store-policies\" >Store Policies Page &rsaquo;</a > </p> </div> </div> </div> </div>");
  } catch (error) {}
};

addReturnPolicyModal();