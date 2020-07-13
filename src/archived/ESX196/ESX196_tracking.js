const ESX196ELs = () => {
  document.addEventListener("click", (e) => {
    if (e.target.closest("#ESX196")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "196_CBTCB",
        tags: {
          revenue: 0, // Optional in cents as integer (500 == $5.00)
          value: 0.0, // Optional as float
        },
      });
    }
  });
};

if (document.readyState === "complete") {
  ESX196ELs();
} else {
  document.addEventListener("DOMContentLoaded", ESX196ELs);
}
