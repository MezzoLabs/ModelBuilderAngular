exports.name = 'TextSingle';
exports.factory = () => {
    return {
        restrict: 'E',
        templateUrl: 'directives/textSingle.html',
        link: (scope, element, attrs) => {
            scope.test = new Date();
        }
    };
};