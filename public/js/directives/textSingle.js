exports.name = 'TextSingle';
exports.factory = () => {
    return {
        restrict: 'E',
        templateUrl: 'html/directives/textSingle.html',
        link: (scope, element, attrs) => {
            scope.test = new Date();
        }
    };
};