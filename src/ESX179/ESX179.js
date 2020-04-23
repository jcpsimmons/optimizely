const callAgent = (question) => {
  document.querySelector(".messages-starticon").click();
  let waitForAgent = setInterval(() => {
    let agentButton = [
      ...document.querySelectorAll(
        ".kore-chat-window li.buttonTmplContentChild"
      ),
    ].filter((el) => {
      return el.textContent.toLowerCase().search("chat with a live agent") > -1;
    });

    if (agentButton.length >= 1) {
      // click call agent
      agentButton[0].click();
      //   populate question
      document.querySelector(".chatInputBox").textContent = question;

      clearInterval(waitForAgent);
    }
  }, 50);
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
