const { src, dest } = require("gulp");
const babel = require("gulp-babel");

exports.default = function() {
  console.log("Transpiling experiments to build folder");
  return src("src/ESX*/*.js")
    .pipe(
      babel({
        presets: [["@babel/preset-env", { modules: false }]]
      })
    )
    .pipe(dest("build/"));
};
