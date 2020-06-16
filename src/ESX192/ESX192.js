const ESX192 = ($) => {
  console.log("ESX192 Loaded");

  let ORDER_SUBMITTED = false;
  let MODAL_IS_VISIBLE = false;
  let FORM_COMPLETE = false;
  const FIELD_IDS_TO_CHECK = [
    "credit-card-type",
    "credit-card",
    "exp-month",
    "exp-year",
    "ccv",
    "accept-terms",
  ];

  // change place order button text
  document.getElementById("placeOrderBtn").innerText = "Review Order";

  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `
      <style>
        #ESX192Modal {
          text-align: center;
        }
        #ESX192Modal .modal-footer {
          text-align: center;
        }
        #ESX192_PlaceOrderButton {
          background: #bd5519;
          border-color: #bd5519;
          margin-left: 3rem;
        }
        #ESX192_EditOrderButton {
          background: #686868;
          border-color: #686868;
        }
        #ESX192Modal .modal-footer a {
          text-decoration: none;
        }
      </style>
      <div id="ESX192Modal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Review Order</h5>
              <button
                id="ESX192_CloseModalButton"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer">
              <a href="/shopping-cart">
                <button
                  id="ESX192_EditOrderButton"
                  type="button"
                  class="btn btn-primary"
                >
                  Edit Order
                </button>
              </a>
              <button
                id="ESX192_PlaceOrderButton"
                type="button"
                class="btn btn-primary"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    `
  );

  const insertModalBody = () => {
    document.querySelector("#ESX192Modal .modal-body").innerHTML = `
      ${
        document
          .querySelector("#step3 .cart-main-content .header-info p")
          .textContent.toLowerCase()
          .includes("pickup")
          ? `
            <p>
              Pickup Store:
              ${
                document
                  .querySelector(
                    "#step3 .cart-main-content .main-header .title"
                  )
                  .textContent.split("at ")[1]
              }
            </p>
            <p>
              Pickup Window:
              ${
                document
                  .querySelector("#step3 .cart-main-content .date")
                  .textContent.split("(")[0]
              }
            </p>
          `
          : `
          <p>
            Delivery Address:
            ${document.getElementById("shipping-address1").value}
            ${
              document.getElementById("shipping-address2") === ""
                ? ""
                : document.getElementById("shipping-address2").value
            }
            ${document.getElementById("shipping-city").value},
            ${document.getElementById("shipping-state").value}
            ${document.getElementById("shipping-zip").value}
          </p>
          <p>
            Delivery Window:
            ${
              document
                .querySelector("#step3 .cart-main-content .date")
                .textContent.split("(")[0]
            }
          </p>
        `
      }
    `;
  };

  const checkFormComplete = () => {
    FORM_COMPLETE = FIELD_IDS_TO_CHECK.map((field) => {
      const el = document.getElementById(field);

      // if there's no value or check, add error class and show label
      if (
        (el.id !== "accept-terms" && el.value === "") ||
        (el.id === "accept-terms" && !el.checked)
      ) {
        return false;
      } else {
        return true;
      }
    }).every((item) => item === true);

    return FORM_COMPLETE;
  };

  // listeners to change MODAL_IS_VISIBLE variable
  $("#ESX192Modal").on("hide.bs.modal", function() {
    MODAL_IS_VISIBLE = false;
  });

  $("#ESX192Modal").on("show.bs.modal", function() {
    MODAL_IS_VISIBLE = true;
    // ADD OPTIMIZELY EVENT FOR USER SEES MODAL
  });

  const submitOrder = () => {
    ORDER_SUBMITTED = true;
    $("#ESX192Modal").modal("hide");
    document.getElementById("placeOrderBtn").click();
  };

  const showModal = () => {
    $("#ESX192Modal").modal("show");
  };

  const checkAddErrors = (FIELD_IDS_TO_CHECK) => {
    let fieldInvalid = false;

    FIELD_IDS_TO_CHECK.forEach((field) => {
      const el = document.getElementById(field);

      // if there's no value or check, add error class and show label
      if (
        (el.id !== "accept-terms" && el.value === "") ||
        (el.id === "accept-terms" && !el.checked)
      ) {
        fieldInvalid = true;
        // special case for credit card type field
        if (field === "credit-card-type") {
          el.parentElement.parentElement.classList.add("error");
          el.parentElement.parentElement.querySelector(
            "span.validation-error"
          ).style.display = "block";
        } else if (field === "accept-terms") {
          el.parentElement.querySelector(".validation-error").style.display =
            "block";
        } else {
          el.parentElement.classList.add("error");
          el.parentElement.querySelector(
            "span.validation-error"
          ).style.display = "block";
        }
      }
    });

    return fieldInvalid;
  };

  const clearErrors = (FIELD_IDS_TO_CHECK) => {
    FIELD_IDS_TO_CHECK.forEach((field) => {
      const el = document.getElementById(field);

      // special case for credit card type field
      if (field === "credit-card-type") {
        el.parentElement.parentElement.classList.remove("error");
        el.parentElement.parentElement.querySelector(
          "span.validation-error"
        ).style.display = "none";
      } else if (field === "accept-terms") {
        el.parentElement.querySelector(".validation-error").style.display =
          "none";
      } else {
        el.parentElement.classList.remove("error");
        el.parentElement.querySelector("span.validation-error").style.display =
          "none";
      }
    });
  };

  // not called - bailing on CC now
  const hideCCError = () => {
    // hide CC error on submit - vue will take a second to validate CC and re-show error if necessary
    document.getElementById("paymentError").style.display = "none";
  };

  const errorWithCard = () => {
    return document
      .getElementById("paymentError")
      .textContent.toLowerCase()
      .includes("error processing card");
  };

  // capture event on submission click
  document.addEventListener("click", (e) => {
    if (
      (e.target.id == "placeOrderBtn" &&
        !MODAL_IS_VISIBLE &&
        !ORDER_SUBMITTED) ||
      (e.target.id == "placeOrderBtn" &&
        !MODAL_IS_VISIBLE &&
        ORDER_SUBMITTED &&
        document.getElementById("paymentError").style.display !== "none")
    ) {
      if (!checkFormComplete() || errorWithCard()) {
        return true;
      } else {
        e.preventDefault();
        clearErrors(FIELD_IDS_TO_CHECK);

        const fieldInvalid = checkAddErrors(FIELD_IDS_TO_CHECK);
        if (!fieldInvalid) {
          clearErrors(FIELD_IDS_TO_CHECK);
          insertModalBody();
          showModal();
        }
      }
    } else if (e.target.id === "ESX192_PlaceOrderButton") {
      submitOrder();
    } else if (e.target.id === "ESX192_CloseModalButton") {
      closeModal();
    }
  });
};

const ESX192WaitLoop = () => {
  // wait for jquery
  var wait = setInterval(() => {
    if (typeof window.jQuery !== "undefined") {
      clearInterval(wait);
      var $ = window.jQuery;
      ESX192($);
    }
  }, 50);
};

// launch on doc ready
if (document.readyState === "complete") {
  ESX192WaitLoop();
} else {
  document.addEventListener("DOMContentLoaded", ESX192WaitLoop);
}
