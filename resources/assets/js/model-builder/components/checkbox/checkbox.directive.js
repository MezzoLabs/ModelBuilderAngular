exports.name = 'mezzoCheckbox';
exports.directive = /*@ngInject*/ function inject(componentService){
    return {
        restrict: 'E',
        templateUrl: 'model-builder/components/checkbox/checkbox.html',
        link
    };

    function link(scope){
        var options = componentService.options;
        scope.options = options;
        options.label = 'Label';
    }
};