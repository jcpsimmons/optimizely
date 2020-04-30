const callAgent = (question) => {
  Intercom("showNewMessage", question);
  // this click isn't working - might not be able to do it
  document.querySelector(".intercom-composer-send-button").click();
};

[...document.querySelectorAll(".BVButton")].forEach((el) => {
  if (el.textContent.toLowerCase() == "submit") {
    el.addEventListener("click", () => {
      //   open the chat code here
      let question = document.querySelector(".BVQAQuestionSummary").textContent;
      callAgent(question);
    });
  }
});

// testing below
Intercom("showNewMessage", "xxxxxxxxx");
Intercom("onShow", function() {
  temp = setInterval(() => {
    console.log("int");
    document.querySelector(".intercom-conversation-body textarea").focus();
    if (document.querySelector(".intercom-composer-send-button")) {
      console.log("found");
      document.querySelector(".intercom-composer-send-button").click();
      clearInterval(temp);
    }
  }, 50);
});
