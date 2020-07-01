// this goes in shared code
const ESX184 = () => {
  const supressError = (err) => {
    return true;
  };

  try {
    document.addEventListener("click", (e) => {
      if (
        e.target.parentNode.parentNode.parentNode.classList.contains(
          "gift-card"
        )
      ) {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "184_cgc",
          tags: {
            revenue: 0, // Optional in cents as integer (500 == $5.00)
            value: 0.0, // Optional as float
          },
        });
      } else if (e.target.id == "coupon-code") {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "184_csc",
          tags: {
            revenue: 0, // Optional in cents as integer (500 == $5.00)
            value: 0.0, // Optional as float
          },
        });
      }
    });
  } catch (error) {
    supressError(error);
  }
};

window.$(document).ready(ESX184);
