const lookup = {};

Array.from(document.querySelectorAll(".department-buttons__item")).forEach(
  (e) => {
    let text = e.querySelector("p").innerText;
    let abbr = text
      .replace(" &", "")
      .split(" ")
      .map((n) => n.toUpperCase())
      .join("_");
    lookup[text] = `999_${abbr}`;
  }
);

document.addEventListener("click", (e) => {
  if (e.target.closest(".department-buttons__item")) {
    let target = e.target;

    // search parents for correct parent el so later query selector works
    while (!target.classList.contains("department-buttons__item")) {
      target = target.parentElement;
      console.log("target :>> ", target);
    }

    let text = target.querySelector("p").innerText;

    if (!!lookup[text]) {
      console.log(lookup[text]);
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: lookup[text],
      });
    }
  }
});

// util

// const els = [...document.querySelectorAll(".department-buttons__item")].map(
//   (e) => {
//     let text = e.querySelector("p").innerText;
//     let abbr = text
//       .replace(" &", "")
//       .split(" ")
//       .map((n) => n.toUpperCase())
//       .join("_");
//     return `999_${abbr}`;
//   }
// );

// 0: "999_CHAT_WITH_AN_EXPERT"
// 1: "999_TRACK_DELIVERY"
// 2: "999_CHANGE_DELIVERY"
// 3: "999_DELIVERY_OPTIONS"
// 4: "999_FREE_SHIPPING"
// 5: "999_PARCEL_SHIPPING"
// 6: "999_FAQS"
// 7: "999_SHIPPING_FAQS"
// 8: "999_LOCATIONS_HOURS"
// 9: "999_FIND_AN_OUTLET_CENTER"
// 10: "999_ORDER_HISTORY"
// 11: "999_CALL_US"
// 12: "999_BOOK_AN_APPOINTMENT"
// 13: "999_MESSAGE_US"
// 14: "999_FINANCING"
// 15: "999_CREDIT_CARD_HELP"
// 16: "999_PROMOTIONS"
// 17: "999_ABOUT_LIVING_SPACES"
// 18: "999_TRADE_PROGRAM"
// 19: "999_LOW_PRICE_GUARANTEE"
// 20: "999_COMMUNITY"
// 21: "999_STORE_POLICES"
// 22: "999_RETURN_POLICY"
// 23: "999_CARE_FREE_PLAN"
// 24: "999_WARRANTY_INFORMATION"
// 25: "999_UNSUBSCRIBE"
