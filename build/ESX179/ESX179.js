function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var callAgent = function callAgent(question) {
  document.querySelector(".messages-starticon").click();
  var waitForAgent = setInterval(function () {
    var agentButton = _toConsumableArray(document.querySelectorAll(".kore-chat-window li.buttonTmplContentChild")).filter(function (el) {
      return el.textContent.toLowerCase().search("chat with a live agent") > -1;
    });

    if (agentButton.length >= 1) {
      agentButton[0].click();
      document.querySelector(".chatInputBox").textContent = question;
      clearInterval(waitForAgent);
    }
  }, 50);
};

_toConsumableArray(document.querySelectorAll(".BVButton")).forEach(function (el) {
  if (el.textContent.toLowerCase() == "submit") {
    el.addEventListener("click", function () {
      var question = document.querySelector(".BVQAQuestionSummary").textContent;
      callAgent(question);
    });
  }
});