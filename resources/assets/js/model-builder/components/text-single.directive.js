exports.name = 'mezzoTextSingle';
exports.directive = () => {
    return {
        restrict: 'E',
        templateUrl: 'directives/textSingle.html',
        link: (scope, element, attrs) => {
            scope.test = new Date();
        }
    };
};