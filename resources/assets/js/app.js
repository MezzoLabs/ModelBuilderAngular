var app = angular.module('mezzo-model-builder', [ 'ngRoute' ]);

app.config(require('./config'));
require('./register')(app);