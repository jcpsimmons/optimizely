// VARIATION 1
function addContent($) {
  $(".price-total-table").after(`
<style id="ChatbotStyle">
  #ChatIcon .flex-col,
  #ChatIcon .flex-row {
    display: flex;
    flex-wrap: nowrap;
  }
  #ChatIcon .flex-col {
    flex-direction: column;
    justify-content: flex-end;
    background-color: white;
    margin: 2rem;
    padding: 1rem 0;
  }
  #ChatIcon .flex-row {
    flex-direction: row-reverse;
  }
  #ChatIcon {
    margin-top:2rem;
    display:inline-block;
    background-color: #ebebeb;
    cursor: pointer;
  }
  #ChatIcon img {
    border-radius: 100%;
    border: 2px solid white;
  }
  #ChatIcon .flex-item {
    margin: auto;
  }
  #ChatIcon .fb-tweak {
    flex-basis: 25%;
    margin-right: 2rem;
  }
  #ChatIcon .flex-row .flex-item {
    position: relative;
  }
  .green-dot {
    background-color: #45ab4e;
    height: auto;
    width: auto;
    border-radius: 100%;
    border: 2px solid white;
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
  }
  .green-dot i {
    font-size: 15px;
    margin: 5px 5px;
  }
  /* typography */
  #ChatIcon .label-text {
    font-size: 1.2rem;
    margin-right: 1rem;
    color: #4c4c4c;
    text-align: right;
  }
  #ChatIcon .label-text > span {
    color: rgb(170, 170, 170);
  }
  #ChatIcon .main-text {
    padding: 0 1rem;
    font-size: 1.8rem;
    color: #3a3a3a;
  }
  #ChatIcon .xContainer {
    margin-top: 0;
    margin-right: 1rem;
  }
</style>

<div id="ChatIcon">
  <div class="flex-row">
    <div class="flex-item xContainer" id="RemoveRepChat">
      <span
        style="font-size: 3rem; color: black; cursor:pointer;line-height:4rem"
        aria-hidden="true"
        >×</span
      >
    </div>
    <div class="flex-item fb-tweak">
      <img
        src="https://www.livingspaces.com/globalassets/images/home/2020/03/chat-girl.jpg"
        alt=""
        class="img-responsive"
      />
      <div class="green-dot">
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
    </div>
    <div class="flex-col">
      <div class="flex-item label-text">Living Spaces Team Member</div>
      <div class="flex-item main-text">
        👋 Need help with your cart? Talk to a live expert.
      </div>
    </div>
  </div>
</div>

`);
}

const updateTime = () => {
  const getTime = () => {
    var time = new Date();
    var curTime = time.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
    curTime = curTime.startsWith("0") ? curTime.replace("0", "") : curTime;
    return curTime;
  };
  setInterval(() => {
    document.querySelector(
      "#ChatIcon .label-text"
    ).innerHTML = `Living Spaces Team Member <span class="timeText">${getTime()}</span>`;
  }, 1000);
};

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
    $("#ChatIcon").remove();
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
    updateTime();
  }
}, 50);
