module.exports = app => {
	register(require('./common/compile.directive.js'));
	register(require('./model-builder/model-builder.controller.js'));
	register(require('./model-builder/components/text-multi.directive.js'));
	register(require('./model-builder/components/text-single.directive.js'));

    function register(module){
        if(module.controller){
            return app.controller(module.name, module.controller);
        }

        if(module.directive){
            return app.directive(module.name, module.directive);
        }

        if(module.service){
            return app.factory(module.name, module.service);
        }
    }
};