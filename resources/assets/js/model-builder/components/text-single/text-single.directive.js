exports.name = 'mezzoTextSingle';
exports.directive = /*@ngInject*/ function inject(componentService){
    return {
        restrict: 'E',
        templateUrl: 'model-builder/components/text-single/text-single.html',
        link
    };

    function link(scope){
        scope.options = { label: 'test0', placeholder: 'test1' };
        componentService.options = scope.options;
    }
};