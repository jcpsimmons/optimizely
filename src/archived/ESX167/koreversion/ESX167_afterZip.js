// ESX167
function addContent() {
  if (document.getElementById("ChatIcon")) {
    return;
  }
  if (utag_data.site_type == "desktop") {
    const desktopInsertHook = document.querySelector(
      "#delivery-options > .col-xs-12:first-of-type form"
    );
    desktopInsertHook.style.position = "relative";
    content = `
        <style> #ChatIcon { display: flex; flex-wrap: no-wrap; position: absolute; top: 0; left: 50%; transform: translateY(-25%); } #ChatIcon > * { display: inline-block; } #ChatIcon img { zoom: 50%; cursor: pointer; } @media (max-width: 1199px) { #ChatIcon { left: 55%; margin-right: 1rem; } } </style> <div id="ChatIcon" class="intercom-button"> <img class="img-responsive" src="https://www.livingspaces.com/globalassets/images/home/2020/04/chat-delivery-desktopx2.png" /> <span id="RemoveRepChat" style="font-size: 4rem; color: #333; margin-top: 3%; cursor:pointer; transform: translateY(-20.2px)" aria-hidden="true" >×</span > </div>
      `;

    // inject
    desktopInsertHook.insertAdjacentHTML("afterend", content);
  } else {
    const mobileInsertHook = document.querySelector(
      "#delivery-options .col-xs-12:first-of-type"
    );
    mobileInsertHook.style.marginBottom = 0;

    content = `
        <style> #ChatIcon { display: flex; flex-wrap: no-wrap; float:right; position: relative; } #ChatIcon > * { display: inline-block; } #ChatIcon img { zoom: 50%; cursor: pointer; } #RemoveRepChat { position: absolute; top: -8px; right: 0; background-color: #fff; border-radius: 50%; border: 1px solid #dbdbdb; transform: scale(0.8); } #RemoveRepChat span { margin: 10px 8px; } </style> <div id="ChatIcon" class="intercom-button"> <img class="img-responsive" src="https://www.livingspaces.com/globalassets/images/home/2020/04/live-chat-delivery-mobile-x2.png" /> <div id="RemoveRepChat"> <span style="font-size: 35px; color: #333; cursor:pointer;line-height:36px" aria-hidden="true" >×</span > </div> </div>
      `;

    mobileInsertHook.insertAdjacentHTML("afterend", content);
  }
}

const eventListeners = ($) => {
  // Open Kore to prompt on click
  document.getElementById("ChatIcon").addEventListener("click", () => {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "swr167",
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
      eventName: "rswr167",
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
    document.addEventListener("click", (e) => {
      if (e.target.matches("#delivery-options button")) {
        var $ = window.jQuery;
        addContent();
        eventListeners($);
      }
    });

    clearInterval(anotherInterval);
  }
}, 50);
