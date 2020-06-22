const ESX192 = ($) => {
  console.log("ESX192 Loaded");

  let ORDER_SUBMITTED = false;
  let MODAL_IS_VISIBLE = false;
  let FORM_COMPLETE = false;
  let AMEX = false;
  const FIELD_IDS_TO_CHECK = () => {
    return [
      "credit-card-type",
      "credit-card",
      "exp-month",
      "exp-year",
      `${AMEX ? "amexccv" : "ccv"}`,
      "accept-terms",
    ];
  };

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
                <button
                  id="ESX192_EditOrderButton"
                  type="button"
                  class="btn btn-primary"
                >
                  Edit Order
                </button>
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
    // this var keeps track of if there is UPS shipping and LS delivery on a cart
    let shipAndDeliverCount = 0;

    // get all of the mixed cart data
    const shippingInfo = [
      ...document.querySelectorAll(
        "#step3 .cart-component .content-header.main-header"
      ),
    ]
      .map((el) => {
        data = {};

        // figure out if it's pickup/shipping/delivery
        const titleText = el.querySelector(".title").innerText.toLowerCase();
        if (titleText.includes("pickup")) {
          data.location = `Pickup Store: ${el
            .querySelector(".title")
            .textContent.split("at ")[1]
            .trim()}`;
          data.window = `Pickup Window:
        ${el
          .querySelector(".date")
          .textContent.split("(")[0]
          .trim()}`;
        } else if (titleText.includes("shipped")) {
          shipAndDeliverCount++;

          data.location =
            shipAndDeliverCount < 2
              ? `UPS Shipping Address: ${
                  document.getElementById("shipping-address1").value
                }
        ${
          document.getElementById("shipping-address2") === ""
            ? ""
            : document.getElementById("shipping-address2").value
        }
        ${document.getElementById("shipping-city").value},
        ${document.getElementById("shipping-state").value}
        ${document.getElementById("shipping-zip").value}`
              : "";
          data.window = `UPS Shipping Window: ${el
            .querySelector(".date")
            .textContent.split("(")[0]
            .trim()}`;
        } else if (titleText.includes("delivered")) {
          shipAndDeliverCount++;

          data.location =
            shipAndDeliverCount < 2
              ? `Delivery Address: ${
                  document.getElementById("shipping-address1").value
                }
        ${
          document.getElementById("shipping-address2") === ""
            ? ""
            : document.getElementById("shipping-address2").value
        }
        ${document.getElementById("shipping-city").value},
        ${document.getElementById("shipping-state").value}
        ${document.getElementById("shipping-zip").value}`
              : "";
          data.window = `Delivery Window: ${el
            .querySelector(".date")
            .textContent.split("(")[0]
            .trim()}`;
        }

        return data;
      })
      .map((item) => {
        return `${item.location !== "" ? `<p>${item.location}</p>` : ""}<p>${
          item.window
        }</p>`;
      })
      .join("");

    document.querySelector("#ESX192Modal .modal-body").innerHTML = shippingInfo;
  };

  const checkFormComplete = () => {
    // special case - LS Credit Card - if LS credit card is selected, return true if agree is checked and there is a card no.
    if (
      document.getElementById("credit-card-type").value ===
      "Living Spaces Credit Card"
    ) {
      if (
        document.getElementById("synchrony-card").value !== "" &&
        document.getElementById("accept-terms").checked
      ) {
        return true;
      } else {
        return false;
      }
    }

    console.log(`checking: ${FIELD_IDS_TO_CHECK()}`);

    FORM_COMPLETE = FIELD_IDS_TO_CHECK()
      .map((field) => {
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
      })
      .every((item) => item === true);

    return FORM_COMPLETE;
  };

  // listeners to change MODAL_IS_VISIBLE variable
  $("#ESX192Modal").on("hide.bs.modal", function() {
    MODAL_IS_VISIBLE = false;
  });

  $("#ESX192Modal").on("show.bs.modal", function() {
    MODAL_IS_VISIBLE = true;
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "192_SMUSM",
    });
  });

  const submitOrder = () => {
    ORDER_SUBMITTED = true;
    $("#ESX192Modal").modal("hide");
    document.getElementById("placeOrderBtn").click();
  };

  const showModal = () => {
    $("#ESX192Modal").modal("show");
  };

  const closeModal = () => {
    $("#ESX192Modal").modal("hide");
  };

  const checkErrors = () => {
    let errors = false;

    [...document.querySelectorAll("#step3 .validation-error")].forEach((el) => {
      if (el.style.display !== "none") {
        errors = true;
      }
    });

    return errors;
  };

  const checkAddErrors = () => {
    console.log(`checking: ${FIELD_IDS_TO_CHECK()}`);

    let fieldInvalid = false;

    // special case for LS CC
    if (
      document.getElementById("credit-card-type").value ===
      "Living Spaces Credit Card"
    ) {
      if (document.getElementById("synchrony-card").value === "") {
        fieldInvalid = true;
        const parent = document.getElementById("synchrony-card").parentElement;
        parent.classList.add("error");
        parent.querySelector(".validation-error").style.display = "block";
      }
      if (document.getElementById("accept-terms").checked === false) {
        fieldInvalid = true;
        document
          .getElementById("accept-terms")
          .parentElement.querySelector(".validation-error").style.display =
          "block";
      }
      return fieldInvalid;
    }

    FIELD_IDS_TO_CHECK().forEach((field) => {
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

  const clearErrors = () => {
    FIELD_IDS_TO_CHECK().forEach((field) => {
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

  const errorWithCard = () => {
    return document
      .getElementById("paymentError")
      .textContent.toLowerCase()
      .includes("error processing card");
  };

  const goToStepTwo = () => {
    document.getElementById("step2Tab").click();
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
      console.log("checkpoint 1");
      if (!checkFormComplete() || errorWithCard()) {
        console.log("option 1");
        return true;
      } else if (checkErrors()) {
        console.log("option 2");
        e.preventDefault();
      } else {
        console.log("option3");
        e.preventDefault();
        clearErrors();

        const fieldInvalid = checkAddErrors();
        if (!fieldInvalid) {
          console.log("option 4");
          clearErrors();
          insertModalBody();
          showModal();
        }
      }
    } else if (e.target.id === "ESX192_PlaceOrderButton") {
      submitOrder();
    } else if (e.target.id === "ESX192_CloseModalButton") {
      closeModal();
    } else if (e.target.id === "ESX192_EditOrderButton") {
      closeModal();
      goToStepTwo();
    }
  });
  document.addEventListener("change", (e) => {
    console.log("e.target.value :>> ", e.target.value);
    if (e.target.id === "credit-card-type") {
      console.log(`checking amex ${e.target.value === "Amex"}`);
      AMEX = e.target.value === "Amex";
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
