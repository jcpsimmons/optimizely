// nest everything in this function to avoid scope issues
const checkoutModal = () => {
  let MODAL_IS_VISIBLE = false;
  let MODAL_ELIGIBLE = true;

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
            <div class="modal-body">
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
                  document.querySelector("#step3 .cart-main-content .date")
                    .textContent
                }
              </p>
            </div>
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

  const submitOrder = () => {
    window.$("#ESX192Modal").modal("hide");
    document.getElementById("placeOrderBtn").click();
  };

  const goToStepTwo = () => {
    window.$("#ESX192Modal").modal("hide");
    document.getElementById("step2Tab").click();
  };

  const showModal = () => {
    window.$("#ESX192Modal").modal("show");
    MODAL_IS_VISIBLE = true;
    MODAL_ELIGIBLE = false;
  };

  const checkAddErrors = (fieldsIDsToCheck) => {
    let fieldInvalid = false;

    fieldsIDsToCheck.forEach((field) => {
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

  const clearErrors = (fieldsIDsToCheck) => {
    fieldsIDsToCheck.forEach((field) => {
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

  // capture event on submission click
  document.addEventListener("click", (e) => {
    if (e.target.id == "placeOrderBtn" && !MODAL_IS_VISIBLE && MODAL_ELIGIBLE) {
      const fieldsIDsToCheck = [
        "credit-card-type",
        "credit-card",
        "exp-month",
        "exp-year",
        "ccv",
        "accept-terms",
      ];

      e.preventDefault();
      clearErrors(fieldsIDsToCheck);
      const fieldInvalid = checkAddErrors(fieldsIDsToCheck);
      if (!fieldInvalid) {
        clearErrors(fieldsIDsToCheck);
        showModal();
      }
    } else if (e.target.id === "ESX192_EditOrderButton") {
      goToStepTwo();
      MODAL_ELIGIBLE = true;
      MODAL_IS_VISIBLE = false;
    } else if (e.target.id === "ESX192_PlaceOrderButton") {
      submitOrder();
    } else if (e.target.id === "ESX192_CloseModalButton") {
      closeModal();
    }
  });
};

// launch on doc ready
if (document.readyState === "complete") {
  checkoutModal();
} else {
  document.addEventListener("DOMContentLoaded", checkoutModal);
}
