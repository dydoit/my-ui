'use strict';
const gulp=require('gulp');
const sass = require('gulp-sass');
const cssnano=require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
//style
gulp.task('style', function () {
    return gulp.src(['src/styles/**/*.scss','src/styles/*.scss','!src/styles/**/_*.scss','!src/styles/_*.scss'])
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: [
          "last 2 version",
          "> 0.1%",
          "ie <= 11",
          "Firefox < 20",
          "Chrome < 43",
        ]
      }))
      .pipe(sourcemaps.write('.'))
	  .pipe(gulp.dest('dist/styles'))
	  .pipe(browserSync.reload({
		stream:true
	}));
  });
//2,js文件合并，压缩，混淆
const babel = require('gulp-babel')
const concat=require('gulp-concat');
const uglify=require('gulp-uglify');
gulp.task('script',function(){
    gulp.src('src/scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('dist/scripts'))
	.pipe(browserSync.reload({
		stream:true
	}));
})
//3,图片复制
gulp.task('img',function () {
	gulp.src('src/images/*.*')
	.pipe(gulp.dest('dist/images'))
	.pipe(browserSync.reload({
		stream:true
	}));
})
//4,html处理
const htmlmin=require('gulp-htmlmin');
gulp.task('html',function(){
	gulp.src('src/**/*.html')
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({
	 	stream:true
	 }));//通知自动刷新
});

//5,启动web服务器
const browserSync=require('browser-sync');
gulp.task('serve',['style','img','html','script'],function () {
	browserSync({server: {
		baseDir:['dist']
	}},
	function(err, bs) {
    console.log(bs.options.getIn(["urls", "local"]));
	});
	gulp.watch('src/styles/**/*.scss',['style']);
	gulp.watch('src/scripts/*.js',['script']);
	gulp.watch('src/images/*.*',['img']);
	gulp.watch('src/**/*.html',['html']);
})
