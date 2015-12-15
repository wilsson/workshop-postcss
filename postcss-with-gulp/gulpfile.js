var gulp  = require('gulp'),
  postcss = require('gulp-postcss'),
  process = [
    require('postcss-nested')
  ];

gulp.task('css',function(){
  gulp.src('./input/main.css')
    .pipe(postcss(process))
    .pipe(gulp.dest('./output'))
});
