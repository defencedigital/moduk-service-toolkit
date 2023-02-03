if (process.env.ELEVENTY_ENV !== 'production') {
  require('dotenv').config();
}

const { dest, src } = require('gulp');

const gulpif        = require('gulp-if');
const sassProcessor = require('gulp-sass')(require('node-sass'));
const cleanCSS      = require('gulp-clean-css');
const postCSS       = require('gulp-postcss');
const autoprefixer  = require('autoprefixer');

// Flags whether we compress the output etc
const isProduction = process.env.ELEVENTY_ENV !== 'development';

// Source sass files
const sourceFiles = [
  './components/**/*.scss',
  './src/assets/styles/**/*.scss'
];

// Grab all root Sass files, process them, sends to the output folder
const styles = (cb) => {
  
  return src(sourceFiles, {
    allowEmpty: true
  })
    
  .pipe(
    sassProcessor().on(
      'error', 
      sassProcessor.logError
    )
  )

  .pipe(gulpif(isProduction, postCSS([autoprefixer()])))

  .pipe(gulpif(isProduction, cleanCSS({ level: 2 })))

  .pipe(dest('public/assets/styles'))

  .on('done', cb);
  
  };

  module.exports = styles;
