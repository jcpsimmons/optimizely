import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

var hp4uLite = function () {
  function hp4uLite() {
    _classCallCheck(this, hp4uLite);

    this.eligibility = false;
    this.skus = [];
    this.html = "";
    this.getSkus();
    this.genHtml();
  }

  _createClass(hp4uLite, [{
    key: "getSkus",
    value: function getSkus() {
      if (utag_data["cp.lsf-liked-items"] || utag_data["cp.lsf-recently-viewed-list"]) {
        var _this$skus, _this$skus2;

        this.eligibility = true;
        utag_data["cp.lsf-liked-items"] && (_this$skus = this.skus).push.apply(_this$skus, _toConsumableArray(JSON.parse(utag_data["cp.lsf-liked-items"])));
        utag_data["cp.lsf-recently-viewed-list"] && (_this$skus2 = this.skus).push.apply(_this$skus2, _toConsumableArray(JSON.parse(utag_data["cp.lsf-recently-viewed-list"])));
      }

      return;
    }
  }, {
    key: "genHtml",
    value: function genHtml() {
      if (this.skus.length > 4) {
        var temphtml = this.skus.map(function (sku) {
          return "<img class=\"img-responsive\" src=\"https://www.livingspaces.com/api/image?recId=".concat(sku, "&width=160\"/>");
        });
        this.html = "outerstuff".concat(temphtml.join(""), "outerstuff");
      }

      return;
    }
  }]);

  return hp4uLite;
}();

x = new hp4uLite();