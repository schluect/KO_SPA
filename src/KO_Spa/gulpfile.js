/// <vs />
var gulp = require('gulp'),
 concat = require('gulp-concat'),
 mainBowerFiles = require('main-bower-files'),
 uglify = require('gulp-uglify'),
 sass = require('gulp-sass'),
 bowerNormalizer = require('gulp-bower-normalize'),
 del = require('del'),
 processhtml = require('gulp-processhtml'),
 minify = require('gulp-minify-css'),
 server = require('gulp-develop-server'),
 livereload = require('gulp-livereload'),
 gulpIgnore = require('gulp-ignore'),
 mocha = require('gulp-mocha');

var paths = {
    scripts: 'scripts/**/*.js',
    mochaScript:'node_modules/mocha/mocha.js',
    chaiScript: 'bower_components/chai/chai.js',
    mochaCSS: 'node_modules/mocha/mocha.css',
    sass: 'sass/**/*.scss',
    ko_mvc: 'scripts/MVC/*.js'
};

/*****************************DEV******************************/
gulp.task('dev:clean', function (cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['public/**/*'], cb);
});


gulp.task('dev:scripts', ['dev:copy_bowerfiles','dev:clean'], function (cb) {
    return gulp.src(paths.scripts)
      .pipe(concat('main.js'))
      .pipe(gulp.dest('public/js'));
});

gulp.task('dev:copy_bowerfiles', ['dev:clean'], function () {
    return gulp.src(mainBowerFiles(), { base: './bower_components' })
            .pipe(bowerNormalizer({ flatten: true }))
            .pipe(gulpIgnore.exclude("*.less"))
            .pipe(gulp.dest('public'));
});

gulp.task('dev:css', ['dev:copy_bowerfiles','dev:clean'], function () {
    return gulp.src(paths.sass)
            .pipe(sass())
            .pipe(concat('main.css'))
            .pipe(gulp.dest('public/css'));
});

gulp.task('dev:ko_mvc', ['dev:clean'], function () {
    return gulp.src(paths.ko_mvc)
            .pipe(concat('ko_mvc.js'))
            .pipe(gulp.dest('public/js'));
});

gulp.task('dev:watch', ['dev:css', 'dev:scripts', 'dev:copy_bowerfiles'], function () {
    gulp.watch(paths.scripts, ['dev:scripts']);
    gulp.watch(paths.sass, ['dev:sass']);
});


gulp.task('dev', ['dev:clean', 'dev:css', 'dev:scripts', 'dev:watch']);

/*****************************DEV******************************/
/*****************************TEST*****************************/
gulp.task('test:clean', function (cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['tests/js/*'], cb);
});


gulp.task('test:scripts', ['test:copy_bowerfiles', 'test:clean'], function (cb) {
    return gulp.src(paths.scripts)
      .pipe(concat('main.js'))
      .pipe(gulp.dest('tests/js'));
});

gulp.task('test:copy_bowerfiles', ['test:clean'], function () {
    return gulp.src(mainBowerFiles(), { base: './bower_components' })
            .pipe(bowerNormalizer({ flatten: true }))
            .pipe(gulpIgnore.exclude("*.less"))
            .pipe(gulpIgnore.exclude("*.css"))
            .pipe(gulpIgnore.exclude("/fonts/*"))
            .pipe(gulp.dest('tests'));
});
gulp.task('test:copy_mochachai', function (cb) {
    return gulp.src(paths.chaiScript)
      .pipe(gulp.dest('tests/js'));
});
gulp.task('test:copy_mochascript', function (cb) {
    return gulp.src(paths.mochaScript)
      .pipe(gulp.dest('tests/js'));
});
gulp.task('test:copy_mochacss', function (cb) {
    return gulp.src(paths.mochaCSS)
      .pipe(gulp.dest('tests/css'));
});
gulp.task('test:start', ['test:scripts','test:copy_bowerfiles', 'test:copy_mochascript', 'test:copy_mochacss', 'test:copy_mochachai', 'test:clean'], function () {
    server.listen({ path: './tests', env: { PORT: 3001} });
});
/*****************************TEST*****************************/
/*****************************BUILD******************************/
gulp.task('build:clean', function (cb) {
    del(['build'], cb);
});

gulp.task('build:processhtml', ['build:clean'], function (cb) {
    return gulp.src('views/**/*.hbs')
               .pipe(processhtml())
               .pipe(gulp.dest('build/views'));
});

gulp.task('build:bower', ['build:clean'],function (cb) {
    var returnVal = gulp.src(mainBowerFiles(), { base: './bower_components' })
            .pipe(bowerNormalizer({bowerJson:'./bower_build.json',  flatten: true }))
            .pipe(gulpIgnore.exclude("*.less"))
            .pipe(gulp.dest('build/public'));
    return returnVal;
});

gulp.task('build:routes', ['build:clean'], function (cb) {
    return gulp.src('routes/**/*.js')
               .pipe(gulp.dest('build/routes'));
});

gulp.task('build:app', ['build:clean'],function (cb) {
    return gulp.src(['app.js','package.json'])
               .pipe(gulp.dest('build'));
});

gulp.task('build:css', ['build:clean'], function (cb) {
    return gulp.src(paths.sass)
            .pipe(sass())
            .pipe(concat('main.min.css'))
            .pipe(minify())
            .pipe(gulp.dest('build/public/css'));
});

gulp.task('build:scripts',['build:clean'], function (cb) {
    return gulp.src(paths.scripts)
      .pipe(concat('main.main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('build/public/js'));
});

gulp.task('build',['build:clean','build:processhtml', 'build:bower', 'build:routes', 'build:app', 'build:css', 'build:scripts']);

gulp.task('build:startserver', ['build'], function () {
    server.listen({ path: './build/app.js', env: { PORT: 3000, NODE_ENV: 'postbuild' } });
});

/*****************************BUILD******************************/