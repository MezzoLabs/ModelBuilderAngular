'use strict';

var app = angular.module('mezzo-model-builder', [ 'ngRoute', 'angular-sortable-view' ]);

app.config(require('./config'));
require('./directives')(app);
require('./controllers')(app);