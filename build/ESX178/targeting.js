function pol() {
  return 501 - parseFloat(document.querySelector(".progress__actual-value.text-blue.font-weight-600").textContent.replace("$", "")) < 50;
}