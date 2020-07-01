document.querySelector("body").insertAdjacentHTML(
  "beforeend",
  `
<div id="ESX180BSModal" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title text-center">Currently Out of Stock</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>We plan on getting more inventory, sign up to be alerted by email below</p>
      </div>
      <div class="modal-footer">
    <!-- cta -->
    <div class="target"></div>
      </div>
    </div>
  </div>
</div>
`
);

$("#ESX180BSModal").modal();

//

const modalInactiveStyle = `
<style>
#product-detail-page-vue .out-stock-wrapper {
    width:auto;
}
</style>
`;

document
  .querySelector("head")
  .insertAdjacentHTML("beforeend", modalInactiveStyle);

const modalActiveStyle = `
  <style id="ESX180Active">
    #product-detail-page-vue .out-stock-wrapper {
      position: absolute;
      z-index: 9999;
      transform: translate(-50%, -50%);
    }
    #product-detail-page-vue .out-stock-wrapper .out-stock,
    #product-detail-page-vue .out-stock-wrapper .like-holder {
      display: none;
    }
    #product-detail-page-vue .out-stock-wrapper form {
      display: flex;
      margin: auto;
      justify-content: center;
    }
    #product-detail-page-vue .out-stock-wrapper form > * {
      margin: auto;
    }
    #product-detail-page-vue .out-stock-wrapper input {
      background: #fff;
      width: 30rem !important;
      margin-right: 1.6rem;
    }
    #btnEmailMeBackInStock {
      background-color: #bd5519;
      opacity: 1 !important;
      margin-top: 0 !important;
    }
    #ESX180BSModal .target {
      margin: auto;
      height: 7rem;
    }
  </style>
`;

document
  .querySelector("head")
  .insertAdjacentHTML("beforeend", modalActiveStyle);

const setAbsPos = () => {
  // fisrt set with of out stock wrapper =
  // input width + button width  + 1.6rem (margin)
  let newWidth = $("#oos_email").width() + $("#btnEmailMeBackInStock").width();
  newWidth = `calc(${newWidth}px + 1.6rem + 3rem)`;

  $("#product-detail-page-vue .out-stock-wrapper").css("width", newWidth);

  $("#ESX180BSModal .target").css("width", newWidth);

  // abs position of the out of stock wrapper =
  // - input box offset left + modal offset left + modal width / 2
  var newLeft =
    -$("#product-detail-page-vue .out-stock-wrapper").offset().left +
    $("#ESX180BSModal .target").offset().left;

  newLeft = `${newLeft}px`;

  $("#product-detail-page-vue .out-stock-wrapper").css("left", newLeft);

  // set the top
  var newTop =
    -$("#product-detail-page-vue .out-stock-wrapper").offset().top / 2 +
    $("#ESX180BSModal .target").offset().top;

  newTop = `${newTop}px`;

  $("#product-detail-page-vue .out-stock-wrapper").css("top", newTop);
};

// modal shown event
$("#ESX180BSModal").on("shown.bs.modal", function() {
  setAbsPos();
});

// modal hidden event
$("#ESX180BSModal").on("hidden.bs.modal", function() {
  // do something…
  $("#ESX180Active").remove();
});
