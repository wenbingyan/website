////压缩 合并 引入插件
var gulp = require('gulp');
var concat = require('gulp-concat');//文件合并
var uglify = require('gulp-uglify');
//编写任务
    gulp.task('yasuo:hebing',function(){
        gulp.src('js/**/*.js')
            .pipe(concat('main.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('build/'))
    });
    gulp.task('default', ['yasuo:hebing']);
