var gulp    = require('gulp'),
    postcss = require('gulp-postcss'),
    stylus  = require('gulp-stylus'),
    process = [
        require('autoprefixer')
    ];

gulp.task('css',function(){
    gulp.src('./input/main.styl')
        .pipe(stylus())
        .pipe(postcss(process))
        .pipe(gulp.dest('./output'))
});


