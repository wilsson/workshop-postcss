var gulp    = require('gulp'),
    postcss = require('gulp-postcss'),
    stylus  = require('gulp-stylus'),
    rupture = require('rupture'),
    options = {
    	use: [rupture()]
    },
    process = [
      //require('css-mqpacker'),
      require('autoprefixer')
    ];

gulp.task('css',function(){
  gulp.src('./input/main.styl')
    .pipe(stylus(options))
    .pipe(postcss(process))
    .pipe(gulp.dest('./output'))
});