const { series, parallel, watch } = require('gulp');


// Pull in each task
const clean   = require('./gulp-tasks/clean.js');
const styles  = require('./gulp-tasks/styles.js');
const scripts = require('./gulp-tasks/scripts.js');
const images  = require('./gulp-tasks/images.js');
const html    = require('./gulp-tasks/html.js');


// Set each directory and contents that we want to watch and assign the relevant task. `ignoreInitial` set to true will prevent the task being run when we run `gulp watch`, but it will run when a file changes
const watcher = () => {
  watch([
    './components/**/*.scss',
    './src/assets/styles/**/*.scss'
  ], { ignoreInitial: true }, styles);
  watch([
    './components/**/*.js',
    './src/assets/scripts/**/*.js'
  ], { ignoreInitial: true }, scripts);
};



// Minify HTML
exports.minify = series(html);


// Clean public folder
exports.clean = series(clean);


// Clean public folder then run each task in parallel
exports.build = series(clean, parallel(styles, scripts, images));


// Clean public folder then run each task in parallel
exports.dev = series(clean, parallel(styles, scripts, images), watcher);


// Run each task in parallel ready for production
exports.prod = parallel(styles, scripts, images, html);


// This is our watcher task that instructs gulp to watch directories and act accordingly
exports.watch = watcher;
