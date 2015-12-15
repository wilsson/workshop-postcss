var gulp    = require('gulp'),
    postcss = require('gulp-postcss'),
    stylus  = require('gulp-stylus'),
    rupture = require('rupture'),
    process = [
      require('autoprefixer'),
      require('css-mqpacker'),
      require('postcss-fallback'),
      require('cssgrace')
    ];

gulp.task('css',function(){
  gulp.src('./input/main.styl')
    .pipe(stylus({
      use:[rupture()]
    }))
    .pipe(postcss(process))
    .pipe(gulp.dest('./output'))
});
