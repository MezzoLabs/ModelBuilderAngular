var app = angular.module('mezzo-model-builder', [ 'ngRoute', 'templates' ]);

app.config(require('./config'));
require('./register')(app);