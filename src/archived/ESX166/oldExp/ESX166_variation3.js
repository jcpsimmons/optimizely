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
    bottom: -10px;
    right: -6px;
    transform: scale(0.6);
    margin-right: 30px;
  }
  #ChatIcon .green-dot i {
    color: white;
    margin: 5px;
  }
  #ChatIcon .text-tag {
    background-color: #333333;
    color: #fff;
    font-size: 14px;
    padding: 7px 91px 7px 7px;
    margin-right: -50px;
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
    margin-right: 30px;
  }
  #RemoveRepChat {
    position: absolute;
    right: 0;
    transform: scale(0.7);
  }
  #RemoveRepChat span {
    margin: 11px 8.5px;
    color: #fff;
  }
</style>
<div id="ChatIcon">
  <div class="text-tag">
    Chat with a live expert
  </div>
  <div class="staffPhoto">
    <img
      src="https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl-168-02.jpg"
      alt=""
    />
    <div class="green-dot">
      <i class="fa fa-check" aria-hidden="true"></i>
    </div>
  </div>
  <div id="RemoveRepChat">
      <span
        style="font-size: 4rem; color: #fff; cursor:pointer;line-height:4rem; margin: 5px;"
        aria-hidden="true"
        >×</span
      >
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
      eventName: "speakWithRep"
    });
    // opens Kore
    $(".messages-starticon").click();
    let waitForAgent = setInterval(() => {
      if ($("li:contains('Chat')").length > 1) {
        $("li:contains('Chat')")
          .last()
          .click();
        clearInterval(waitForAgent);
      }
    }, 50);
  });

  // close prompt on x click
  document.getElementById("RemoveRepChat").addEventListener("click", e => {
    e.stopPropagation();
    $("#ChatIcon").remove();
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "Remove Speak with Rep"
    });
  });

  // tracking for kore chat
  $(".messages-starticon").click(function() {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "clickChatbotIcon"
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
