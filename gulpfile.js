const { src, dest, parallel, series, watch } = require("gulp");
const browserSync = require("browser-sync").create();

function browsersync() {
  browserSync.init({
    server: { baseDir: "src/" },
    notify: false,
    online: true,
  });
}

function scripts() {
  return src(["src/assets/js/main.js", "src/assets/js/burger.js"]).pipe(
    dest("dist")
  );
}

exports.browsersync = browsersync;
