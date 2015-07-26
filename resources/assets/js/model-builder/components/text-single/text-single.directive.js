exports.name = 'mezzoTextSingle';
exports.directive = /*@ngInject*/ function inject(componentService){
    return {
        restrict: 'E',
        templateUrl: 'model-builder/components/text-single/text-single.html',
        link
    };

    function link(scope){
        var options = componentService.options;
        scope.options = options;
        options.label = 'Label';
        options.placeholder = 'Placeholder';
    }
};