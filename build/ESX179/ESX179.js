var experimentCode = function experimentCode(e) {
  if (e.target.innerText.toLowerCase() == "submit" && document.querySelector(".BVPageHeader").textContent.toLowerCase() == "preview your question") {
    var question = document.querySelector(".BVQAQuestionSummary").textContent;
    setTimeout(function () {
      Intercom("showNewMessage", question);
    }, 100);
  }
};

document.addEventListener("click", function (e) {
  experimentCode(e);
});