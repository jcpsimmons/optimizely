function addContent($) {
  document.querySelector(".cart-content > .container").insertAdjacentHTML(
    "afterend",
    `
  <style id="ChatbotStyle">
  #ChatIcon {
    width: 100%;
    background-color: #ebebeb;
  }
  #ChatIcon .flex-col,
  #ChatIcon .flex-row {
    display: inline-block;
    flex-wrap: nowrap;
  }
  #ChatIcon .flex-col {
    position: relative;
    text-align: center;
    background-color: white;
    margin: 10px 0;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    padding: 7px 7px 7px 3rem;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
  }
  #ChatIcon .flex-row {
    width: 100%;
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
    margin-right: .8rem;
    float:right;
    transform: scale(0.7) translateY(-33.8%);
  }
  #RemoveRepChat span {
  }
  #StaffPhoto {
    position:absolute!important;
    z-index: 99;
    left: 0;
    top: 50%;
    transform: translate(-50%,-50%);
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
    line-height: 2rem;
    color: #4c4c4c;
    margin: auto;
  }
  #ChatIcon .green-dot i {
    color: #fff;
    margin: 0 3px;
  }
  @media (max-width: 378){
    #ChatIcon img {
      width: 54px;
    }
  }
</style>
<div id="ChatIcon">
  <div class="flex-row">
    <div class="flex-col">
      <div class="flex-item main-text">
      Need help with your cart? Chat with an expert.
      </div>
      <div class="flex-item" id="StaffPhoto">
      <img
        src="https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl-168-02.jpg"
        alt=""
        class="img-responsive"
      />
      <div class="green-dot"><i class="fa fa-check" aria-hidden="true"></i></div>
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
