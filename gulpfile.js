const { src, dest } = require("gulp");
const babel = require("gulp-babel");

exports.default = function() {
  console.log("Transpiling experiments to build folder");
  return src("ESX*/*.js")
    .pipe(babel())
    .pipe(dest("build/"));
};