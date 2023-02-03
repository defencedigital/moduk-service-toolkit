const { dest, src } = require('gulp');

// Source script files
const sourceFiles = [
  'app/assets/**/*.*'
];

// Move all images into the output folder
const images = (cb) => {

  return src(sourceFiles, {
    allowEmpty: true
  })

  .pipe(dest('public/assets/images'))
  
  .on('done', cb);

};

module.exports = images;
