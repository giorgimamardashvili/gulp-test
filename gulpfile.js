const { src, dest, parallel, series, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const pug = require("gulp-pug");
const uglify = require("gulp-uglify-es").default;
const sass = require("gulp-sass")(require("sass"));
var sourcemaps = require("gulp-sourcemaps");

function browsersync(cb) {
  browserSync.init({
    server: { baseDir: "dist" },
    notify: false,
    online: false,
  });
  cb();
}
function browsersyncReload(cb) {
  browserSync.reload();
  cb();
}

function fontsTasks() {
  return src("src/assets/fonts/**/*.woff2").pipe(dest("dist/assets/fonts"));
}

function scripts() {
  return src(["src/assets/js/main.js", "src/assets/js/burger.js"])
    .pipe(uglify())
    .pipe(dest("dist/assets/js"))
    .pipe(browserSync.stream());
}

function views() {
  return src("src/*.pug")
    .pipe(pug({ options: false, pretty: true }))
    .pipe(dest("dist"));
}

function imgTask() {
  return src("src/assets/img/**/*").pipe(dest("dist/assets/img"));
}

function buildStyles() {
  return src("src/assets/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest("dist/assets/css"))
    .pipe(browserSync.stream());
}
function vendorJS() {
  const modules = [
    "node_modules/swiper/swiper-bundle.min.js",
    "node_modules/swiper/swiper-bundle.min.js.map",
  ];

  return src(modules).pipe(dest("dist/assets/js"));
}

function vendorCSS() {
  const modules = ["node_modules/swiper/swiper-bundle.min.css"];

  return src(modules).pipe(dest("dist/assets/css"));
}

function startwatch() {
  watch("src/assets/scss/*.scss", series(buildStyles, browsersyncReload));
  watch("src/assets/js/*.js", series(scripts, browsersyncReload));
  watch("src/*.pug", series(views, browsersyncReload));
  watch("src/assets/img/*", series(imgTask, browsersyncReload));
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.views = views;
exports.buildStyles = buildStyles;
exports.imgTask = imgTask;
exports.fontsTasks = fontsTasks;
exports.vendorJS = vendorJS;
exports.vendorCSS = vendorCSS;

exports.default = series(
  scripts,
  vendorJS,
  buildStyles,
  vendorCSS,
  fontsTasks,
  views,
  browsersync,
  startwatch
);
