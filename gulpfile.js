var gulp = require('gulp');
var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss');
    mix.browserify('app.js');
    mix.task('html', 'resources/assets/html/**/*');
});

gulp.task('html', function(){
    return gulp.src('resources/assets/html/**/*').pipe(gulp.dest('public'));
});