function addContent() {
  if (utag_data.site_type == "desktop") {
    var desktopInsertHook = document.querySelector("#delivery-options > .col-xs-12:first-of-type form");
    desktopInsertHook.style.position = "relative";
    content = "\n      <style> #ChatIcon { display: flex; flex-wrap: no-wrap; position: absolute; top: 0; left: 50%; transform: translateY(-25%); } #ChatIcon > * { display: inline-block; } #ChatIcon img { zoom: 50%; cursor: pointer; } @media (max-width: 1199px) { #ChatIcon { left: 55%; margin-right: 1rem; } } </style> <div id=\"ChatIcon\"> <img class=\"img-responsive\" src=\"https://www.livingspaces.com/globalassets/images/home/2020/04/chat-delivery-desktopx2.png\" /> <span id=\"RemoveRepChat\" style=\"font-size: 4rem; color: #333; margin-top: 3%; cursor:pointer; transform: translateY(-20.2px)\" aria-hidden=\"true\" >\xD7</span > </div>\n    ";
    desktopInsertHook.insertAdjacentHTML("afterend", content);
  } else {
    var mobileInsertHook = document.getElementById("delivery-options");
    mobileInsertHook.style.marginBottom = 0;
    content = "\n      <style> #ChatIcon { display: flex; flex-wrap: no-wrap; float:right; position: relative; } #ChatIcon > * { display: inline-block; } #ChatIcon img { zoom: 50%; cursor: pointer; } #RemoveRepChat { position: absolute; top: -8px; right: 0; background-color: #fff; border-radius: 50%; border: 1px solid #dbdbdb; transform: scale(0.8); } #RemoveRepChat span { margin: 10px 8px; } </style> <div id=\"ChatIcon\"> <img class=\"img-responsive\" src=\"https://www.livingspaces.com/globalassets/images/home/2020/04/live-chat-delivery-mobile-x2.png\" /> <div id=\"RemoveRepChat\"> <span style=\"font-size: 35px; color: #333; cursor:pointer;line-height:36px\" aria-hidden=\"true\" >\xD7</span > </div> </div>\n    ";
    mobileInsertHook.insertAdjacentHTML("afterend", content);
  }
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
    addContent();
    eventListeners($);
  }
}, 50);