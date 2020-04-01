// VARIATION 1
function addContent($) {
  $(".price-total-table").after(`<style id="ChatbotStyle">
#ChatIconContainer,#ChatIconContainer>* {
  margin-top: 2rem;
  display: inline-flex;
}
#ChatIcon .flex-col,
#ChatIcon .flex-row {
  display: flex;
  flex-wrap: nowrap;
}
#ChatIcon .flex-col {
  flex-direction: column;
  margin-left: 1rem;
  justify-content: center;
  padding: 0 1rem;
}
#ChatIcon .flex-row {
  flex-direction: row;
}
#ChatIcon {
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 40px;
  cursor: pointer;
  transition: 0.25s;
}
#ChatIcon img {
  border-radius: 100%;
  border: 4px solid #d8d8d8;
}
#ChatIcon .flex-row .flex-item {
  position: relative;
}
.green-dot {
  background-color: #47ab50;
  height: 20px;
  width: 20px;
  border-radius: 100%;
  border: 2px solid white;
  position: absolute;
  bottom: 0;
  right: 0;
}
/* typography */
#ChatIcon .label-text {
  font-size: 1.2rem;
  margin-right: calc(40px - 1rem);
  color: grey;
  text-align: right;
}
#ChatIcon .main-text {
  font-size: 1.8rem;
  margin-right: 1rem;
}
</style>
<div id="ChatIconContainer">
<div id="ChatIcon">
<div class="flex-row">
  <div class="flex-item">
    <img
      src="https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl.jpg"
      alt=""
      class="img-responsive"
    />
    <div class="green-dot"></div>
  </div>
  <div class="flex-col">
    <div class="flex-item label-text">Living Spaces Team Member</div>
    <div class="flex-item main-text">
      👋 Need help with your cart? Talk to a live expert.
    </div>
  </div>
</div>
</div>
<div>
<span id="RemoveRepChat" style="font-size: 4rem; color: #333; margin-left:1rem; margin-top: -12px; cursor:pointer;" aria-hidden="true">×</span>
</div>
</div>
`);
}

const eventListeners = $ => {
  // Open Kore to prompt on click
  document.getElementById("ChatIcon").addEventListener("click", () => {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "speakWithRep",
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0 // Optional as float
      }
    });
    // opens Kore
    $(".messages-starticon").click();
    let waitForAgent = setInterval(() => {
      if ($("li:contains('Chat with an agent')").length > 1) {
        $("li:contains('Chat with an agent')")
          .last()
          .click();
        clearInterval(waitForAgent);
      }
    }, 50);
  });

  // close prompt on x click
  document.getElementById("RemoveRepChat").addEventListener("click", e => {
    e.stopPropagation();
    $("#ChatIconContainer").remove();
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "Remove Speak with Rep",
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0 // Optional as float
      }
    });
  });

  // tracking for kore chat
  $(".messages-starticon").click(function() {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "clickChatbotIcon",
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0 // Optional as float
      }
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
