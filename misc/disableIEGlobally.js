if (
  window.navigator.userAgent.indexOf("MSIE") > -1 ||
  window.navigator.userAgent.indexOf("Trident/") > -1
) {
  window.optimizely.push({ type: "disable" });
  return;
}
