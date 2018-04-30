var gulp = require('gulp'),
autoprefixer=require('autoprefixer'),
postCss = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
imports = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles',function(){
    return gulp.src('./app/assets/styles/styles.css')
               .pipe(postCss([imports,nested,mixins,cssvars,autoprefixer]))
               on('error',function(error){
                   console.log(error.toString());
                   this.emit('end');
               })
               .pipe(gulp.dest('./app/temp/styles'));
});
