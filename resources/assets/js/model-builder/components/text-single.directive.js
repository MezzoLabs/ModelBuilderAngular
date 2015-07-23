exports.name = 'mezzoTextSingle';
exports.directive = () => {
    return {
        restrict: 'E',
        templateUrl: 'model-builder/components/text-single.html',
        link: (scope, element, attrs) => {
            scope.test = new Date();
        }
    };
};