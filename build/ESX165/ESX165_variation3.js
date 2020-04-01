function addContent($) {
  $(".cart-header").parent().css("position", "relative");
  $(".cart-header").parent().prepend("\n  <style id=\"ChatbotStyle\">\n    #ChatIcon .flex-col,\n    #ChatIcon .flex-row {\n      display: flex;\n      flex-wrap: nowrap;\n    }\n    #ChatIcon .flex-col {\n      flex-direction: column;\n      justify-content: flex-end;\n      color: #fff;\n      width: 100%;\n      margin: 2rem 0 2rem 2rem;\n      padding: 1rem 0;\n    }\n    #ChatIcon .flex-row {\n      flex-direction: row-reverse;\n    }\n    #ChatIcon {\n      position: absolute;\n      top:-2rem;\n      right:0;\n      width: auto;\n      cursor: pointer;\n      z-index:99;\n    }\n    #ChatIcon img {\n      border-radius: 100%;\n      border: 5px solid white;\n      float: right;\n    }\n    #ChatIcon .flex-item {\n      margin: auto;\n    }\n    #ChatIcon .fb-tweak {\n      flex-basis: 29%;\n      margin-right: 2rem;\n    }\n    #ChatIcon .flex-row .flex-item {\n      position: relative;\n    }\n    .green-dot {\n      background-color: #45ab4e;\n      height: auto;\n      width: auto;\n      border-radius: 100%;\n      border: 2px solid white;\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      color: white;\n    }\n    .green-dot i {\n      font-size: 12px;\n      margin: 0px 4px;\n    }\n    #ChatIcon .chat-bg {\n      background-color: #333333;\n      width: 100%;\n      height: 5rem;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      z-index: -1;\n    }\n    /* typography */\n    #ChatIcon .label-text {\n      font-size: 1.4rem;\n      color: #fff;\n    }\n    #ChatIcon .label-text > span {\n      color: rgb(170, 170, 170);\n    }\n    #ChatIcon .main-text {\n      font-weight: 600;\n      font-size: 1.4rem;\n      margin-left: 0\n    }\n    #ChatIcon .xContainer {\n      margin-top: 2rem;\n    }\n  </style>\n  \n  <div id=\"ChatIcon\">\n    <div class=\"chat-bg\"></div>\n    <div class=\"flex-row\">\n      <div class=\"flex-item xContainer\">\n        <span\n          id=\"RemoveRepChat\"\n          style=\"font-size: 3rem; color: #fff; cursor:pointer;line-height:4rem;margin-right: 1rem;\"\n          aria-hidden=\"true\"\n          >\xD7</span\n        >\n      </div>\n      <div class=\"flex-item fb-tweak\">\n        <img\n          src=\"https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl.jpg\"\n          alt=\"\"\n          class=\"img-responsive\"\n        />\n        <div class=\"green-dot\">\n          <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n        </div>\n      </div>\n      <div class=\"flex-col\">\n        <div class=\"flex-item main-text\">\n          Need help choosing a delivery option?\n        </div>\n        <div class=\"label-text\">Talk to a live expert</div>\n      </div>\n    </div>\n  </div>\n  \n");
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
      if ($("li:contains('Chat with an agent')").length > 1) {
        $("li:contains('Chat with an agent')").last().click();
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