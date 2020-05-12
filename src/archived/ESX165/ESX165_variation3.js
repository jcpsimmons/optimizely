// VARIATION 1
function addContent($) {
  $(".cart-header")
    .parent()
    .css("position", "relative");
  $(".cart-header").parent().prepend(`
  <style id="ChatbotStyle">
    #ChatIcon .flex-col,
    #ChatIcon .flex-row {
      display: flex;
      flex-wrap: nowrap;
    }
    #ChatIcon .flex-col {
      flex-direction: column;
      justify-content: flex-end;
      color: #fff;
      width: 100%;
      margin: 2rem -9rem 2rem 2rem;
      padding: 1rem 0;
    }
    #ChatIcon .flex-row {
      flex-direction: row-reverse;
    }
    #ChatIcon {
      position: absolute;
      top:-2rem;
      right:0;
      width: auto;
      cursor: pointer;
      z-index:1;
    }
    #ChatIcon img {
      border-radius: 100%;
      border: 5px solid white;
      float: right;
      max-width: 70%;
    }
    #ChatIcon .flex-item {
      margin: auto;
    }
    #ChatIcon .fb-tweak {
      flex-basis: 29%;
      margin-right: 2rem;
    }
    #ChatIcon .flex-row .flex-item {
      position: relative;
    }
    .green-dot {
      background-color: #45ab4e;
      height: auto;
      width: auto;
      border-radius: 100%;
      border: 2px solid white;
      position: absolute;
      bottom: 0;
      right: 0;
      color: white;
    }
    .green-dot i {
      font-size: 12px;
      margin: 0px 4px;
    }
    #ChatIcon .chat-bg {
      background-color: #333333;
      width: 100%;
      height: 5rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
    /* typography */
    #ChatIcon .label-text {
      font-size: 1.4rem;
      color: #fff;
    }
    #ChatIcon .label-text > span {
      color: rgb(170, 170, 170);
    }
    #ChatIcon .main-text {
      font-weight: 600;
      font-size: 1.4rem;
      margin-left: 0
    }
    #ChatIcon .xContainer {
      margin-top: 2rem;
    }
  </style>
  
  <div id="ChatIcon" class="intercom-button">
    <div class="chat-bg"></div>
    <div class="flex-row">
      <div class="flex-item xContainer">
        <span
          id="RemoveRepChat"
          style="font-size: 3rem; color: #fff; cursor:pointer;line-height:4rem;margin-right: 1rem;"
          aria-hidden="true"
          >×</span
        >
      </div>
      <div class="flex-item fb-tweak">
        <img
          src="https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl-168-02.jpg"
          alt=""
          class="img-responsive"
        />
        <div class="green-dot">
          <i class="fa fa-check" aria-hidden="true"></i>
        </div>
      </div>
      <div class="flex-col">
        <div class="flex-item main-text">
          Need help choosing a delivery option?
        </div>
        <div class="label-text">Talk to a live expert</div>
      </div>
    </div>
  </div>
  
`);
}

const eventListeners = ($) => {
  // Open Kore to prompt on click
  document.getElementById("ChatIcon").addEventListener("click", () => {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "speakWithRep",
    });
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

  // tracking for intercom chat
  Intercom("onShow", function() {
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
