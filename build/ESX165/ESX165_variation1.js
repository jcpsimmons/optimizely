function addContent($) {
  $(".price-total-table").after("<style id=\"ChatbotStyle\">\n#ChatIconContainer,#ChatIconContainer>* {\n  margin-top: 2rem;\n  display: inline-flex;\n}\n#ChatIcon .flex-col,\n#ChatIcon .flex-row {\n  display: flex;\n  flex-wrap: nowrap;\n}\n#ChatIcon .flex-col {\n  flex-direction: column;\n  margin-left: 1rem;\n  justify-content: center;\n  padding: 0 1rem;\n}\n#ChatIcon .flex-row {\n  flex-direction: row;\n}\n#ChatIcon {\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\n  border-radius: 100px;\n  cursor: pointer;\n  transition: 0.25s;\n}\n#ChatIcon img {\n  border-radius: 100%;\n  border: 4px solid #d8d8d8;\n  width: 11rem;\n}\n#ChatIcon .flex-row .flex-item {\n  position: relative;\n}\n.green-dot {\n  background-color: #47ab50;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  border: 2px solid white;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n/* typography */\n#ChatIcon .label-text {\n  font-size: 1.2rem;\n  margin-right: calc(40px - 1rem);\n  color: grey;\n  text-align: right;\n}\n#ChatIcon .main-text {\n  font-size: 1.8rem;\n  margin-right: 1rem;\n}\n</style>\n<div id=\"ChatIconContainer\">\n<div id=\"ChatIcon\">\n<div class=\"flex-row\">\n  <div class=\"flex-item\">\n    <img\n      src=\"https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl-168.jpg\"\n      alt=\"\"\n      class=\"img-responsive\"\n    />\n    <div class=\"green-dot\"></div>\n  </div>\n  <div class=\"flex-col\">\n    <div class=\"flex-item label-text\">Living Spaces Team Member</div>\n    <div class=\"flex-item main-text\">\n      \uD83D\uDC4B Need help with your cart? Talk to a live expert.\n    </div>\n  </div>\n</div>\n</div>\n<div>\n<span id=\"RemoveRepChat\" style=\"font-size: 4rem; color: #333; margin-left:1rem; margin-top: -12px; cursor:pointer;\" aria-hidden=\"true\">\xD7</span>\n</div>\n</div>\n");
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
    $("#ChatIconContainer").remove();
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