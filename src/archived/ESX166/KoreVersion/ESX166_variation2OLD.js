// VARIATION 1
function addContent($) {
  document.querySelector(".main-header").insertAdjacentHTML(
    "afterend",
    `
  <style id="ChatbotStyle">
  #ChatIcon {
    position: absolute;
    width: 170px;
    background-color: #ebebeb;
    z-index: 99;
    right:20px;
    top:20px
  }
  #ChatIcon .flex-col,
  #ChatIcon .flex-row {
    display: flex;
    flex-wrap: nowrap;
  }
  #ChatIcon .flex-col {
    position: relative;
    text-align: center;
    background-color: white;
    margin: 10px;
    border: 1px solid #dbdbdb;
    padding: 10px 0;
  }
  #ChatIcon .flex-row {
    flex-direction: column-reverse;
    align-items: center;
  }
  #ChatIcon {
    box-shadow: 00 0 6px 0 #bbbbbb;
    cursor: pointer;
  }
  #ChatIcon img {
    border-radius: 100%;
    border: 2px solid #fff;
    width: 44px;
  }
  #ChatIcon .flex-row .flex-item {
    position: relative;
  }
  .green-dot {
    background-color: #47ab50;
    border-radius: 100%;
    border: 2px solid white;
    position: absolute;
    bottom: -5px;
    right: -3px;
    transform: scale(0.6);
  }
  #RemoveRepChat {
    position: absolute;
    top: -23px;
    left: -19px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #dbdbdb;
    transform: scale(0.7);
  }
  #RemoveRepChat span {
    margin: 11px 8.5px;
  }
  #StaffPhoto {
    margin-top: -20px;
    z-index: 99;
    margin-bottom: 10px;
  }
  /* typography */
  #ChatIcon .label-text {
    font-size: 1.2rem;
    margin-right: calc(40px - 1rem);
    color: grey;
    text-align: right;
  }
  #ChatIcon .main-text {
    font-size: 14px;
    line-height: 2rem;
    color: #4c4c4c;
    margin: auto;
  }
  #ChatIcon .green-dot i {
    color: #fff;
    margin: 0 3px;
  }
</style>
<div id="ChatIcon" class="intercom-button">
  <div class="flex-row">
    <div class="flex-item" id="StaffPhoto">
      <img
        src="https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl-168-02.jpg"
        alt=""
        class="img-responsive"
      />
      <div class="green-dot"><i class="fa fa-check" aria-hidden="true"></i></div>
    </div>
    <div class="flex-col">
      <div class="flex-item main-text">
        Chat with a live expert for help with your cart.
      </div>
    </div>
    <div id="RemoveRepChat">
      <span
        style="font-size: 4rem; color: #333; cursor:pointer;line-height:4rem"
        aria-hidden="true"
        >×</span
      >
    </div>
  </div>
</div>

`
  );
}

const eventListeners = ($) => {
  // Open Kore to prompt on click
  document.getElementById("ChatIcon").addEventListener("click", () => {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "speakWithRep",
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
  document.getElementById("RemoveRepChat").addEventListener("click", (e) => {
    e.stopPropagation();
    $("#ChatIcon").remove();
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "Remove Speak with Rep",
    });
  });

  // tracking for kore chat
  $(".messages-starticon").click(function() {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "clickChatbotIcon",
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
