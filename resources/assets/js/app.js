'use strict';

var app = angular.module('mezzo-model-builder', [ 'ngRoute' ]);

app.config(require('./config'));
require('./directives')(app);
require('./controllers')(app);