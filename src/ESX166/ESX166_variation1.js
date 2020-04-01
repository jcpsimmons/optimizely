// VARIATION 1
function addContent($) {
  $(".delivery-options-container")
    .parent()
    .first().before(`
  <style id="ChatbotStyle">
  #ChatIcon {
    position: absolute;
    width: 218px;
    background-color: #fff;
    z-index: 99;
    right:20px;
    top:-50px;
  }
  #ChatIcon .flex-col,
  #ChatIcon .flex-row {
    display: flex;
    flex-wrap: nowrap;
  }
  #ChatIcon .flex-col {
    flex-direction: column;
    margin-left: 1rem;
    justify-content: center;
    position: relative;
  }
  #ChatIcon .flex-row {
    flex-direction: row;
  }
  #ChatIcon {
    box-shadow: 00 0 6px 0 #bbbbbb;
    border-radius: 40px;
    cursor: pointer;
  }
  #ChatIcon img {
    border-radius: 100%;
    border: 2px solid #dbdbdb;
  }
  #ChatIcon .flex-row .flex-item {
    position: relative;
  }
  .green-dot {
    background-color: #47ab50;
    height: 13px;
    width: 13px;
    border-radius: 100%;
    border: 2px solid white;
    position: absolute;
    bottom: 0;
    right: 2px;
  }
  #RemoveRepChat {
    position: absolute;
    top: -23px;
    right: 0;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    transform: scale(0.8);
  }
  #RemoveRepChat span {
    margin: 10px 8px;
  }
  /* typography */
  #ChatIcon .label-text {
    font-size: 1.2rem;
    margin-right: calc(40px - 1rem);
    color: grey;
    text-align: right;
  }
  #ChatIcon .main-text {
    font-size: 1.4rem;
    line-height: 1.75rem;
    color: #4c4c4c;
    margin: auto 15px;
  }
</style>
<div id="ChatIcon">
  <div class="flex-row">
    <div class="flex-item">
      <img
        src="https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl.jpg"
        alt=""
        class="img-responsive"
      />
      <div class="green-dot"></div>
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

  // close prompt on x click
  document.getElementById("RemoveRepChat").addEventListener("click", e => {
    e.stopPropagation();
    $("#ChatIcon").remove();
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "Remove Speak with Rep",
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0 // Optional as float
      }
    });
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
