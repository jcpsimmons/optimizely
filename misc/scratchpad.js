const checkoutModal = () => {
  const addModal = () => {
    document.querySelector("body").insertAdjacentHTML(
      "beforebegin",
      `
      <div id="ExperimentContainer">
        <style>
          #ModalThing {
            position: absolute;
            left: 50vw;
            top: 83vw;
            font-size: 5rem;
            z-index: 999;
            transform: translate(-50%,-50%);
          }
        </style>
        <div id="ModalThing">
          <h1>This is a modal stand-in</h1>
          <button onclick="modalOnClickBehavior()">Click to confirm</button>
        </div>
      </div>
      `
    );

    MODAL_IS_VISIBLE = true;
  };

  const checkAddErrors = (fieldsIDsToCheck) => {
    let fieldInvalid = false;

    fieldsIDsToCheck.forEach((field) => {
      const el = document.getElementById(field);

      // if there's no value or check, add error class and show label
      if (el.value === "" || (el === "accept-terms" && !el.checked)) {
        fieldInvalid = true;

        // special case for credit card type field
        if (field === "credit-card-type") {
          el.parentElement.parentElement.classList.add("error");
          el.parentElement.parentElement.querySelector(
            "span.validation-error"
          ).style.display = "block";
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
      } else {
        el.parentElement.classList.remove("error");
        el.parentElement.querySelector("span.validation-error").style.display =
          "none";
      }
    });
  };

  document.addEventListener("click", (e) => {
    if (e.target.id == "placeOrderBtn" && !MODAL_IS_VISIBLE) {
      const fieldsIDsToCheck = [
        "credit-card-type",
        "credit-card",
        "exp-month",
        "exp-year",
        "ccv",
        "accept-terms",
      ];

      e.preventDefault();
      const fieldInvalid = checkAddErrors(fieldsIDsToCheck);
      if (!fieldInvalid) {
        clearErrors(fieldsIDsToCheck);
        addModal();
      }
    }
  });
};

// // form fields

// // ship date
// console.log(
//   document.querySelector("#step3 .cart-main-content .date").textContent
// );

// // address - formatted
// console.log(
//   `${document.getElementById("shipping-address1").value} ${
//     document.getElementById("shipping-address2") === ""
//       ? ""
//       : document.getElementById("shipping-address2").value
//   } ${document.getElementById("shipping-city").value}, ${
//     document.getElementById("shipping-state").value
//   } ${document.getElementById("shipping-zip").value}`
// );

// set global modal variable and launch
let MODAL_IS_VISIBLE = false;

const modalOnClickBehavior = () => {
  const el = document.getElementById("ExperimentContainer");
  el.parentNode.removeChild(el);
  document.MODAL_IS_VISIBLE = false;
  document.getElementById("placeOrderBtn").click();
};

if (document.readyState === "complete") {
  checkoutModal();
} else {
  document.addEventListener("DOMContentLoaded", checkoutModal);
}
