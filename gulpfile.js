'use strict';

const	gulp = require('gulp'),
			sass = require('gulp-sass'),
			prefixer = require('gulp-autoprefixer'),
			sourcemaps = require('gulp-sourcemaps'),
			cleanCSS = require('gulp-csso'),
			rename = require('gulp-rename'),
			browserSync = require('browser-sync'),
			concat = require('gulp-concat'),
			uglify = require('gulp-uglify-es').default,
			rigger = require('gulp-rigger'),
			imagemin = require('gulp-imagemin'),
			pngquant = require('imagemin-pngquant'),
			cache = require('gulp-cache'),
			del = require('del');


gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'dist/'
		},
		notify: false
	})
})

gulp.task('html', function() {
	return gulp.src('app/**/*.html')
	.pipe(rigger())
	.pipe(gulp.dest('dist/'))
	.pipe(browserSync.reload({stream: true}))
})

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(prefixer(['last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'], {cascade: false}))
	.pipe(gulp.dest('app/css'))
	.pipe(cleanCSS())
	.pipe(concat('main.css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(sourcemaps.write(''))
	.pipe(gulp.dest('dist/css'))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
})

gulp.task('js', function() {
	return gulp.src('app/js/main.js')
	.pipe(rigger())
	.pipe(uglify({
		mangle: {
			toplevel: true
		}
	}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}))
})

gulp.task('js-libs', function() {
	return gulp.src(['app/js/libs/**/*.js', '!app/js/libs/**/*.min.js' ])
	.pipe(uglify({
		mangle: {
			toplevel: true
		}
	}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/js/libs/'))
	.pipe(gulp.dest('dist/js/libs/'))
	.pipe(browserSync.reload({stream: true}))
})

gulp.task('img-min', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'))
})

gulp.task('clean', async function() {
	return del.sync('dist')
})

gulp.task('watch', function() {
	gulp.watch('app/**/*.html', gulp.parallel('html'));
	gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
	gulp.watch('app/js/main.js', gulp.parallel('js'));
	gulp.watch('app/js/include/**/.js', gulp.parallel('js'));
	gulp.watch(['app/js/libs/**/*.js', '!app/js/libs/**/*.min.js' ], gulp.parallel('js-libs'));
	gulp.watch('app/img/**/*', gulp.parallel('img-min'));
})

gulp.task('default', gulp.parallel('browser-sync','watch', ['html','clean','sass', 'js-libs', 'js', 'img-min']))