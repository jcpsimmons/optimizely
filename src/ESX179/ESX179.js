document.addEventListener("click", function(e) {
  if (
    e.target.innerText.toLowerCase() == "submit" &&
    document.querySelector(".BVPageHeader").textContent.toLowerCase() ==
      "preview your question"
  ) {
    var question = document.querySelector(".BVQAQuestionSummary").textContent;
    Intercom("showNewMessage", question);
  }
});
