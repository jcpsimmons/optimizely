function addContent($) {
  document.querySelector(".main-header").insertAdjacentHTML("afterend", "\n  <style id=\"ChatbotStyle\">\n  #ChatIcon {\n    position: absolute;\n    width: 170px;\n    background-color: #ebebeb;\n    z-index: 99;\n    right:20px;\n    top:20px\n  }\n  #ChatIcon .flex-col,\n  #ChatIcon .flex-row {\n    display: flex;\n    flex-wrap: nowrap;\n  }\n  #ChatIcon .flex-col {\n    position: relative;\n    text-align: center;\n    background-color: white;\n    margin: 10px;\n    border: 1px solid #dbdbdb;\n    padding: 10px 0;\n  }\n  #ChatIcon .flex-row {\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n  #ChatIcon {\n    box-shadow: 00 0 6px 0 #bbbbbb;\n    cursor: pointer;\n  }\n  #ChatIcon img {\n    border-radius: 100%;\n    border: 2px solid #fff;\n    width: 44px;\n  }\n  #ChatIcon .flex-row .flex-item {\n    position: relative;\n  }\n  .green-dot {\n    background-color: #47ab50;\n    border-radius: 100%;\n    border: 2px solid white;\n    position: absolute;\n    bottom: -5px;\n    right: -3px;\n    transform: scale(0.6);\n  }\n  #RemoveRepChat {\n    position: absolute;\n    top: -23px;\n    left: -19px;\n    background-color: #fff;\n    border-radius: 50%;\n    border: 2px solid #dbdbdb;\n    transform: scale(0.7);\n  }\n  #RemoveRepChat span {\n    margin: 11px 8.5px;\n  }\n  #StaffPhoto {\n    margin-top: -20px;\n    z-index: 99;\n    margin-bottom: 10px;\n  }\n  /* typography */\n  #ChatIcon .label-text {\n    font-size: 1.2rem;\n    margin-right: calc(40px - 1rem);\n    color: grey;\n    text-align: right;\n  }\n  #ChatIcon .main-text {\n    font-size: 14px;\n    line-height: 2rem;\n    color: #4c4c4c;\n    margin: auto;\n  }\n  #ChatIcon .green-dot i {\n    color: #fff;\n    margin: 0 3px;\n  }\n</style>\n<div id=\"ChatIcon\">\n  <div class=\"flex-row\">\n    <div class=\"flex-item\" id=\"StaffPhoto\">\n      <img\n        src=\"https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl-168-02.jpg\"\n        alt=\"\"\n        class=\"img-responsive\"\n      />\n      <div class=\"green-dot\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></div>\n    </div>\n    <div class=\"flex-col\">\n      <div class=\"flex-item main-text\">\n        Chat with a live expert for help with your cart.\n      </div>\n    </div>\n    <div id=\"RemoveRepChat\">\n      <span\n        style=\"font-size: 4rem; color: #333; cursor:pointer;line-height:4rem\"\n        aria-hidden=\"true\"\n        >\xD7</span\n      >\n    </div>\n  </div>\n</div>\n\n");
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