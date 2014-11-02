'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var styl = require('gulp-styl');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var gjshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var server = lr();
var plumber = require('gulp-plumber');

gulp.task('scripts', function() {
  gulp.src(['src/**/*.js'])
    .pipe(browserify())
    .pipe(concat('dest.js'))
    .pipe(gulp.dest('build'))
    .pipe(refresh(server))
});

gulp.task('styles', function() {
  gulp.src(['css/**/*.css'])
    .pipe(styl({compress : true}))
    .pipe(gulp.dest('build'))
    .pipe(refresh(server))
});

gulp.task('lr-server', function() {
  server.listen(35729, function(err) {
    if(err) return console.log(err);
  });
});

gulp.task('jshint', function() {

  return gulp.src([
      __dirname + '/assets/components/**/*.js',
      __dirname + '/assets/shared/**/*.js',
      __dirname + '/assets/view1/**/*.js',
      __dirname + '/assets/view2/**/*.js'])
    .pipe(plumber())
    .pipe(gjshint('.jshintrc'))
    .pipe(gjshint.reporter(stylish));

});

gulp.task('develop', function () {

  var nodemon = require('gulp-nodemon');

  var args = process.argv;

  nodemon({
    script: 'app.js',
    cwd: __dirname,
    args: args,
    ext: 'js',
    ignore: [__dirname + '/assets/bower_components/*'],
    nodeArgs: ['--debug']})
    .on('stdout', function (message) {
//      if (message.toString().indexOf('--- APP STARTED ---') > -1) {
//        if (firstTime === true) {
//          firstTime = false;
//          var interval = setInterval(function () {
//            if (!gulp.isRunning) {
//              clearInterval(interval);
//              gutil.log('Sever started after: ' + gutil.colors.green(prettyTime(process.hrtime(startTime))));
//              nOpen('http://localhost:' + devPort);
//            }
//          }, 10);
//        } else {
//          livereload(lrServer).changed('server file');
//        }
//      }
      process.stdout.write(message);
    })
    .on('stderr', function (message) {
      process.stderr.write(message);
    })
    .on('change', ['jshint'])
    .on('restart', function () {
      console.log('restarted!')
    })
});

// start here.
gulp.task('default', function() {


    gulp.run('develop');
//  gulp.run('lr-server', 'scripts', 'styles');
//
//  gulp.watch('src/**', function(event) {
//    gulp.run('scripts');
//  });
//
//  gulp.watch('css/**', function(event) {
//    gulp.run('styles');
//  });
});


