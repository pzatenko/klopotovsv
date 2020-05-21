"use strict";
const { src, dest, series, parallel, watch } = require("gulp");
const sass = require("gulp-sass");
const cleanCss = require("gulp-clean-css");
const ap = require("gulp-autoprefixer");
const modifyHTMLlinks = require("gulp-processhtml");
const webpackStream = require("webpack-stream");
const webpackProductionConfig = require("./webpack/prod");
const webpackDevelopmentConfig = require("./webpack/common");

const paths = {
    styles: {
        src: './src/css/**/*.scss',
        dest: './build/assets/css/',
        destDev: './dev/assets/css/',
    },
    scripts: {
        src: './src/js/**/*.js',
        dest: './build/assets/js/',
        destDev: './dev/assets/js/',
    },
    html: {
        src: './src/*.html',
        dest: './build/',
        destDev: './dev/',
    },
    images: {
        src: './src/imgs/**/*',
        dest: './build/assets/imgs/',
        destDev: './dev/assets/imgs/',
    },
};

const compileProdCss = () => {
    return src(paths.styles.src)
        .pipe(sass())
        .pipe(ap({
            overrideBrowserslist: [
                "last 8 version",
                "> 1%",
                "IE 10"
            ],
            grid: "autoplace",
        }))
        .pipe(cleanCss())
        .pipe(dest(paths.styles.dest))
};

const compileDevCss = () => {
    return src(paths.styles.src)
        .pipe(sass())
        .pipe(ap({
            overrideBrowserslist: [
                "last 8 version",
                "> 1%",
                "IE 10"
            ],
            grid: "autoplace",
        }))
        .pipe(dest(paths.styles.destDev))
}

const compileProdJs = () => {
    return src(paths.scripts.src)
        .pipe(webpackStream(webpackProductionConfig))
        .pipe(dest(paths.scripts.dest));
};

const compileDevJs = () => {
    return src(paths.scripts.src)
        .pipe(webpackStream(webpackDevelopmentConfig))
        .pipe(dest(paths.scripts.destDev));
};

const pages = () => {
    return src(paths.html.src)
        .pipe(modifyHTMLlinks())
        .pipe(dest(paths.html.dest));
};

const pagesDev = () => {
    return src(paths.html.src)
        .pipe(dest(paths.html.destDev));
};

const images = () => {
    return src(paths.images.src)
        .pipe(dest(paths.images.dest));
};

const imagesDev = () => {
    return src(paths.images.src)
        .pipe(dest(paths.images.destDev));
};

const watchAll = () => {
    watch(paths.scripts.src, compileDevJs);
    watch(paths.styles.src, compileDevCss);
    watch(paths.html.src, pagesDev);
    watch(paths.images.src, imagesDev);
};

const build = parallel(compileProdCss, compileProdJs, pages, images);

module.exports = {
    compileProdCss,
    compileDevCss,
    compileProdJs,
    compileDevJs,
    watchAll,
    build
};
