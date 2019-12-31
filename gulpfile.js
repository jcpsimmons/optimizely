const { src, dest } = require('gulp');
const babel = require('gulp-babel');

exports.default = function () {
  console.log('x');
  return src('ESX*/*.js')
    .pipe(babel())
    .pipe(dest('build/'));
};
