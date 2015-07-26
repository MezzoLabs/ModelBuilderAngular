exports.name = 'mezzoTextSingleOptions';
exports.directive = /*@ngInject*/ function inject(componentService){
    return {
        restrict: 'E',
        templateUrl: 'model-builder/components/text-single/text-single-options.html',
        link
    };

    function link(scope){
        componentService.onOptionsChange(options => {
            scope.options = options;
            console.log(options);
        });
    }
};