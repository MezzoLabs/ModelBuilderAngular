var directives = [
    require('./compile'),
    require('./textSingle')
];

module.exports = app => {
    directives.forEach(directive => {
        registerDirective(app, directive);
    });
};

function registerDirective(app, directive){
    app.directive('mezzo' + directive.name, directive.factory);
}