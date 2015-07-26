export default class ComponentOptions {

    constructor(name, templateUrl){
        this.name = name;
        this.directive = directive(templateUrl);
    }

}

function directive(templateUrl){
    return /*@ngInject*/ function inject(componentService){
        return {
            restrict: 'E',
            templateUrl: 'model-builder/components/' + templateUrl,
            link
        };

        function link(scope){
            componentService.onOptionsChange(options => {
                scope.options = options;
            });
        }
    };
}