var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var ngRegister = require('gulp-ng-register');
var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.task('register', 'resources/assets/js/**/*');
    mix.sass('app.scss');
    mix.browserify('app.js');
    mix.task('html', 'resources/assets/html/**/*');
});

gulp.task('html', function(){
    return gulp.src('resources/assets/html/**/*')
        .pipe(gulp.dest('public'));
});

gulp.task('register', function(){
    return gulp.src('resources/assets/js/**/*.{controller,directive,service}.js')
        .pipe(ngRegister())
        .pipe(gulp.dest('resources/assets/js'));
});