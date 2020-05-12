function pollingFn() {
  return parseInt(document.querySelector(".view-more-number").textContent.replace(/[^\d.]/g, "")) >= 1;
}