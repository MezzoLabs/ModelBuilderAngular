var app = angular.module('mezzo-model-builder', [ 'ngRoute', 'ui.bootstrap', 'templates' ]);

app.config(require('./config'));
require('./register')(app);