// VARIATION 1
function addContent($) {
  $(".in-same-collection").css("margin-bottom", "2rem");
  $(".in-same-collection").after(`
  <style id="ChatbotStyle"> #ChatIcon .flex-col, #ChatIcon .flex-row { display: flex; flex-wrap: nowrap; } #ChatIconContainer { width: 100%; display: flex; } #ChatIcon .flex-col { background-color: white; margin: auto; border: 1px solid #dbdbdb; border-radius: 4px; padding: 0.5rem 1rem; flex-basis: 70%; } #ChatIcon .flex-row { flex-direction: row-reverse; align-items: center; height: 100%; } #ChatIcon { margin: 2rem auto; display: inline-block; background-color: #ebebeb; cursor: pointer; width: 45rem; height: 8.6rem; } #ChatIcon img { border-radius: 100%; border: 4px solid white; max-width: 125%; } #ChatIcon .flex-item { margin: auto; } #ChatIcon .fb-tweak { flex-basis: 11%; margin-left: 2rem; } #ChatIcon .flex-row .flex-item { position: relative; } .green-dot { background-color: #45ab4e; height: auto; width: auto; border-radius: 100%; border: 2px solid white; position: absolute; bottom: -9px; right: -13px; color: white; transform: scale(0.7); } .green-dot i { font-size: 15px; margin: 5px 5px; } /* typography */ #ChatIcon .label-text { font-size: 1.2rem; margin-right: 1rem; color: #4c4c4c; text-align: right; } #ChatIcon .label-text > span { color: rgb(170, 170, 170); } #ChatIcon .main-text { padding: 0 1rem; font-size: 1.8rem; color: #3a3a3a; } #ChatIcon .xContainer { margin-top: 0; margin-right: 1rem; } #ChatIcon .timeText { margin-left: 4px; } </style> <div id="ChatIconContainer" class="intercom-button"> <div id="ChatIcon"> <div class="flex-row"> <div class="flex-item xContainer" id="RemoveRepChat"> <span style="font-size: 4rem; color: #333; cursor:pointer;line-height:4rem" aria-hidden="true" >×</span > </div> <div class="flex-col"> <div class="flex-item main-text"> Need help finding the right item? I’m ready to help! </div> </div> <div class="flex-item fb-tweak"> <img src="https://www.livingspaces.com/globalassets/images/LP/2020/04/chat-girl-168-07.jpg" alt="" class="img-responsive" /> <div class="green-dot"> <i class="fa fa-check" aria-hidden="true"></i> </div> </div> </div> </div> </div>
  `);
}

const eventListeners = ($) => {
  // Open Kore to prompt on click
  document.getElementById("ChatIcon").addEventListener("click", () => {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "175_chatwithagent",
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
      eventName: "175_closecwa",
    });
  });

  // tracking for kore chat
  $(".messages-starticon").click(function() {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "175_clickKore",
    });
  });
};

var anotherInterval = setInterval(() => {
  if (
    typeof window.jQuery !== "undefined" &&
    document.querySelector(".messages-starticon")
  ) {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    addContent($);
    eventListeners($);
  }
}, 50);
