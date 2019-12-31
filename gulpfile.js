const { src, dest } = require("gulp");
var babel = require("gulp-babel");

exports.default = function() {
  console.log("x");
  return src("ESX*/*.js")
    .pipe(babel())
    .pipe(dest("build/"));
};
