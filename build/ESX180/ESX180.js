function _templateObject() {
  var data = _taggedTemplateLiteral(["<img src>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

document.querySelector("head").insertAdjacentHTML("beforeend", "\n<style>\n.out-stock {\n    width: ".concat(document.querySelector("#product-detail-page-vue").offsetWidth, "px\n}\n#ESX180 {\n    font-size:1.6rem;\n    white-space: normal;\n}\n</style>\n"));
document.querySelector(".out-stock").innerHTML = "<p id=\"ESX180\">We plan on getting more inventory, sign up to be alerted by email below</p>";
window.addEventListener("resize", function () {
  document.getElementById("ESX180").parentElement.style.width = "".concat(document.querySelector("#product-detail-page-vue").offsetWidth, "px");
});
var x = html(_templateObject());