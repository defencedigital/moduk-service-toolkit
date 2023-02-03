const { src }     = require('gulp');
const cleanPublic = require('gulp-clean');

// Cleans the public folder
const clean = (cb) => {

  return src('public', {
    read: false, 
    allowEmpty: true
  })
    
  .pipe(cleanPublic())
    
  .on('done', cb);

};

module.exports = clean;
