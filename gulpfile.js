var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var ngRegister = require('gulp-ng-register');
var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.task('html', 'resources/assets/html/**/*');
    mix.task('template-cache', 'resources/assets/js/**/*.html');
    mix.task('register', 'resources/assets/js/**/*');
    mix.sass('app.scss');
    mix.browserify('app.js');
});

gulp.task('html', function(){
    return gulp.src('resources/assets/html/**/*')
        .pipe(gulp.dest('public'));
});

gulp.task('template-cache', function(){
    return gulp.src('resources/assets/js/**/*.html')
        .pipe(templateCache())
        .pipe(gulp.dest('resources/assets/js'));
});

gulp.task('register', function(){
    return gulp.src('resources/assets/js/**/*.{controller,directive,service}.js')
        .pipe(ngRegister())
        .pipe(gulp.dest('resources/assets/js'));
});