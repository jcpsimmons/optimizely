function addContent($) {
  $(".delivery-options-container").parent().first().before("\n  <style id=\"ChatbotStyle\">\n  #ChatIcon {\n    position: absolute;\n    width: 218px;\n    background-color: #fff;\n    z-index: 99;\n    right:20px;\n    top:-50px;\n  }\n  #ChatIcon .flex-col,\n  #ChatIcon .flex-row {\n    display: flex;\n    flex-wrap: nowrap;\n  }\n  #ChatIcon .flex-col {\n    flex-direction: column;\n    margin-left: 1rem;\n    justify-content: center;\n    position: relative;\n  }\n  #ChatIcon .flex-row {\n    flex-direction: row;\n  }\n  #ChatIcon {\n    box-shadow: 00 0 6px 0 #bbbbbb;\n    border-radius: 40px;\n    cursor: pointer;\n  }\n  #ChatIcon img {\n    border-radius: 100%;\n    border: 2px solid #dbdbdb;\n    width: 90px;\n  }\n  #ChatIcon .flex-row .flex-item {\n    position: relative;\n  }\n  .green-dot {\n    background-color: #47ab50;\n    height: 13px;\n    width: 13px;\n    border-radius: 100%;\n    border: 2px solid white;\n    position: absolute;\n    bottom: 0;\n    right: 2px;\n  }\n  #RemoveRepChat {\n    position: absolute;\n    top: -23px;\n    right: 0;\n    background-color: #fff;\n    border-radius: 50%;\n    border: 1px solid #dbdbdb;\n    transform: scale(0.8);\n  }\n  #RemoveRepChat span {\n    margin: 10px 8px;\n  }\n  /* typography */\n  #ChatIcon .label-text {\n    font-size: 1.2rem;\n    margin-right: calc(40px - 1rem);\n    color: grey;\n    text-align: right;\n  }\n  #ChatIcon .main-text {\n    font-size: 1.4rem;\n    line-height: 1.75rem;\n    color: #4c4c4c;\n    margin: auto 15px;\n  }\n</style>\n<div id=\"ChatIcon\">\n  <div class=\"flex-row\">\n    <div class=\"flex-item\">\n      <img\n        src=\"https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl-168-02.jpg\"\n        alt=\"\"\n        class=\"img-responsive\"\n      />\n      <div class=\"green-dot\"></div>\n    </div>\n    <div class=\"flex-col\">\n      <div class=\"flex-item main-text\">\n        Chat with a live expert for help with your cart.\n      </div>\n    </div>\n    <div id=\"RemoveRepChat\">\n      <span\n        style=\"font-size: 35px; color: #333; cursor:pointer;line-height:36px\"\n        aria-hidden=\"true\"\n        >\xD7</span\n      >\n    </div>\n  </div>\n</div>\n\n");
}

var eventListeners = function eventListeners($) {
  document.getElementById("ChatIcon").addEventListener("click", function () {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "speakWithRep"
    });
    $(".messages-starticon").click();
    var waitForAgent = setInterval(function () {
      if ($("li:contains('Chat')").length > 1) {
        $("li:contains('Chat')").last().click();
        clearInterval(waitForAgent);
      }
    }, 50);
  });
  document.getElementById("RemoveRepChat").addEventListener("click", function (e) {
    e.stopPropagation();
    $("#ChatIcon").remove();
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "Remove Speak with Rep"
    });
  });
  $(".messages-starticon").click(function () {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "clickChatbotIcon"
    });
  });
};

var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    addContent($);
    eventListeners($);
  }
}, 50);