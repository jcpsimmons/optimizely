function pollingFn() {
  return Boolean(text = Array.prototype.slice.call(document.querySelectorAll(".BV span")).map(function (i) {
    return i.innerText;
  }).filter(function (t) {
    return t.toLowerCase() == "preview your question";
  }).length);
}