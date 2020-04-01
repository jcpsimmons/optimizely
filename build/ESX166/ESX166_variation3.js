function addContent($) {
  $(".cart-header .col-xs-12").css("margin-bottom", "25px");
  $(".cart-header .col-xs-12").append("\n  <style id=\"ChatbotStyle\">\n  #ChatIcon {\n    position: absolute;\n    background-color: #fff;\n    z-index: 99;\n    right: 10px;\n    top: 50px;\n    display: flex;\n    align-items: center;\n  }\n  #ChatIcon .green-dot {\n    background-color: #47ab50;\n    border-radius: 100%;\n    border: 3px solid white;\n    position: absolute;\n    bottom: -7px;\n    right: -2px;\n    transform: scale(0.6);\n  }\n  #ChatIcon .green-dot i {\n    color: white;\n    margin: 5px;\n  }\n  #ChatIcon .text-tag {\n    background-color: #333333;\n    color: #fff;\n    font-size: 14px;\n    padding: 7px 40px 7px 7px;\n  }\n  #ChatIcon .staffPhoto {\n    margin-left: -30px;\n  }\n  #ChatIcon img {\n    border-radius: 100%;\n    height: 44px;\n    width: 44px;\n    border: 2px solid white;\n    position: relative;\n  }\n</style>\n<div id=\"ChatIcon\">\n  <div class=\"text-tag\">\n    Chat with a live expert\n  </div>\n  <div class=\"staffPhoto\">\n    <img\n      src=\"https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl.jpg\"\n      alt=\"\"\n    />\n    <div class=\"green-dot\">\n      <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n</div>\n\n");
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