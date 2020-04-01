// VARIATION 3
function addContent($) {
  $(".cart-header .col-xs-12").css("margin-bottom", "25px");
  $(".cart-header .col-xs-12").append(`
  <style id="ChatbotStyle">
  #ChatIcon {
    position: absolute;
    background-color: #fff;
    z-index: 99;
    right: 10px;
    top: 50px;
    display: flex;
    align-items: center;
  }
  #ChatIcon .green-dot {
    background-color: #47ab50;
    border-radius: 100%;
    border: 3px solid white;
    position: absolute;
    bottom: -7px;
    right: -2px;
    transform: scale(0.6);
  }
  #ChatIcon .green-dot i {
    color: white;
    margin: 5px;
  }
  #ChatIcon .text-tag {
    background-color: #333333;
    color: #fff;
    font-size: 14px;
    padding: 7px 40px 7px 7px;
  }
  #ChatIcon .staffPhoto {
    margin-left: -30px;
  }
  #ChatIcon img {
    border-radius: 100%;
    height: 44px;
    width: 44px;
    border: 2px solid white;
    position: relative;
  }
</style>
<div id="ChatIcon">
  <div class="text-tag">
    Chat with a live expert
  </div>
  <div class="staffPhoto">
    <img
      src="https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl.jpg"
      alt=""
    />
    <div class="green-dot">
      <i class="fa fa-check" aria-hidden="true"></i>
    </div>
  </div>
</div>

`);
}

const eventListeners = $ => {
  // Open Kore to prompt on click
  document.getElementById("ChatIcon").addEventListener("click", () => {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "speakWithRep",
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0 // Optional as float
      }
    });
    // opens Kore
    $(".messages-starticon").click();
    let waitForAgent = setInterval(() => {
      if ($("li:contains('Chat with an agent')").length > 1) {
        $("li:contains('Chat with an agent')")
          .last()
          .click();
        clearInterval(waitForAgent);
      }
    }, 50);
  });

  // tracking for kore chat
  $(".messages-starticon").click(function() {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "clickChatbotIcon",
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0 // Optional as float
      }
    });
  });
};

var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    addContent($);
    eventListeners($);
  }
}, 50);
