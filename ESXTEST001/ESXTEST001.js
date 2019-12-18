function checkAndUpdate() {
  Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
  };
  var firstDate = Date.parse(
    window.server.DeliveryDates[0].value.split(" ")[0]
  );
  var today = new Date();
  var fiveDaysOut = today.addDays(5);

  var curZip = parseInt($(".current-shipping-zip-code").text());
  if ((curZip >= 90001) & (curZip <= 96162)) {
    var state = "CA";
  } else if ((curZip >= 85001) & (curZip <= 86556)) {
    var state = "AZ";
  }

  if (
    (state == "CA" && firstDate < fiveDaysOut) ||
    (state == "AZ" && firstDate < fiveDaysOut)
  ) {
    //   ADD COLON
    if (
      $("p.delivery-fee")
        .html()
        .search(":") == -1
    ) {
      $("body").append(
        '<style> p.delivery-fee { position: relative; } .in-home-options .delivery-fee span { margin-left: 0rem !important; color: #00699a; font-weight: bolder; font-size: 1.8rem } .delivery-fee span::before { content: ":"; color: #333; font-weight: normal; margin-left: -.3rem; margin-right: .3rem; } </style>'
      );
    }

    if (state == "CA") {
      $("body").append(
        '<style> p.delivery-fee::after { content: "Shipping From Rialto, CA 92324"; position: absolute; right: 0; bottom: 1px } </style>'
      );
    } else {
      $("body").append(
        '<style> p.delivery-fee::after { content: "Shipping From Phoenix, AZ 85043"; position: absolute; right: 0; bottom: 1px } </style>'
      );
    }
  }
}

// MIGHT NEED WINDOW ON EVENT BUS
function eventBusHook() {
  EventBus.$on("refreshCart", function() {
    checkAndUpdate();
  });
}

var anotherInterval = setInterval(function() {
  if (
    typeof window.jQuery !== "undefined" &&
    typeof window.server !== "undefined"
  ) {
    clearInterval(anotherInterval);
    checkAndUpdate();
    eventBusHook();
  }
}, 50);
