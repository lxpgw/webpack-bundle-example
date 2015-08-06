var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var del = require('del');
var path = require('path');
var webpackConfig = require('./webpack.config.js');
var DIST = path.join(__dirname, 'dist');

gulp.task('clean', function(cb) {
    del(DIST, function(err) {
    	if (err) {
    		throw new gutil.PluginError('clean', err);
    	}
    	cb();
    });
});


gulp.task('webpack:build',['tasks'], function() {
    // content
});

gulp.task('webpack:dev',['tasks'], function() {
    // content
});



gulp.task('dev',['tasks'], function() {
    // content
});
gulp.task('default',['tasks'], function() {
    // content
});