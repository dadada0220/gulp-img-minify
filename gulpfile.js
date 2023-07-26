const gulp = require('gulp');
// delを7系以上にすると`Error [ERR_REQUIRE_ESM]: Must use import to load ES Module`と言われるので注意
// （7系以上はrequireではなくimportで読み込むことになるので6系を使っている）
const del = require('del');
const imagemin = require('gulp-imagemin');

// パスを定義
const src = '_src/**/*';
const dist = 'dist';

function clean() {
  return del([`${dist}/**/*`]);
}

function images() {
  return gulp.src(src)
    .pipe(imagemin())
    .pipe(gulp.dest(dist));
}

function watchFiles() {
  gulp.watch(src, images);
}

exports.default = gulp.series(clean, images, watchFiles);
exports.build = gulp.series(clean, images);