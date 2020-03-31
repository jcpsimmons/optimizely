function addContent($) {
  $(".price-total-table").after("\n<style id=\"ChatbotStyle\">\n  #ChatIcon .flex-col,\n  #ChatIcon .flex-row {\n    display: flex;\n    flex-wrap: nowrap;\n  }\n  #ChatIcon .flex-col {\n    flex-direction: column;\n    justify-content: flex-end;\n    background-color: white;\n    margin: 2rem;\n    padding: 1rem 0;\n  }\n  #ChatIcon .flex-row {\n    flex-direction: row-reverse;\n  }\n  #ChatIcon {\n    margin-top:2rem;\n    display:inline-block;\n    background-color: #ebebeb;\n    cursor: pointer;\n  }\n  #ChatIcon img {\n    border-radius: 100%;\n    border: 2px solid white;\n  }\n  #ChatIcon .flex-item {\n    margin: auto;\n  }\n  #ChatIcon .fb-tweak {\n    flex-basis: 25%;\n    margin-right: 2rem;\n  }\n  #ChatIcon .flex-row .flex-item {\n    position: relative;\n  }\n  .green-dot {\n    background-color: #45ab4e;\n    height: auto;\n    width: auto;\n    border-radius: 100%;\n    border: 2px solid white;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    color: white;\n  }\n  .green-dot i {\n    font-size: 15px;\n    margin: 5px 5px;\n  }\n  /* typography */\n  #ChatIcon .label-text {\n    font-size: 1.2rem;\n    margin-right: 1rem;\n    color: #4c4c4c;\n    text-align: right;\n  }\n  #ChatIcon .label-text > span {\n    color: rgb(170, 170, 170);\n  }\n  #ChatIcon .main-text {\n    padding: 0 1rem;\n    font-size: 1.8rem;\n    color: #3a3a3a;\n  }\n  #ChatIcon .xContainer {\n    margin-top: 0;\n    margin-right: 1rem;\n  }\n</style>\n\n<div id=\"ChatIcon\">\n  <div class=\"flex-row\">\n    <div class=\"flex-item xContainer\" id=\"RemoveRepChat\">\n      <span\n        style=\"font-size: 3rem; color: black; cursor:pointer;line-height:4rem\"\n        aria-hidden=\"true\"\n        >\xD7</span\n      >\n    </div>\n    <div class=\"flex-item fb-tweak\">\n      <img\n        src=\"https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl.jpg\"\n        alt=\"\"\n        class=\"img-responsive\"\n      />\n      <div class=\"green-dot\">\n        <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n    <div class=\"flex-col\">\n      <div class=\"flex-item label-text\">Living Spaces Team Member</div>\n      <div class=\"flex-item main-text\">\n        \uD83D\uDC4B Need help with your cart? Talk to a live expert.\n      </div>\n    </div>\n  </div>\n</div>\n\n");
}

var updateTime = function updateTime() {
  var getTime = function getTime() {
    var time = new Date();
    var curTime = time.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    curTime = function () {
      if (curTime.startsWith("0")) {
        return curTime.replace("0", "");
      }

      return curTime;
    }();

    return curTime;
  };

  setInterval(function () {
    document.querySelector("#ChatIcon .label-text").innerHTML = "Living Spaces Team Member <span class=\"timeText\">".concat(getTime(), "</span>");
  }, 1000);
};

var eventListeners = function eventListeners($) {
  document.getElementById("ChatIcon").addEventListener("click", function () {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "speakWithRep",
      tags: {
        revenue: 0,
        value: 0.0
      }
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
      eventName: "Remove Speak with Rep",
      tags: {
        revenue: 0,
        value: 0.0
      }
    });
  });
  $(".messages-starticon").click(function () {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "clickChatbotIcon",
      tags: {
        revenue: 0,
        value: 0.0
      }
    });
  });
};

var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    addContent($);
    eventListeners($);
    updateTime();
  }
}, 50);