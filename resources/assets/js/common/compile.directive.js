exports.name = 'mezzoCompile';
exports.directive = /*@ngInject*/ $compile => {
    return {
        restrict: 'A',
        link: (scope, element, attrs) => {
            var field = scope.$eval(attrs.mezzoCompile);
            var directive = 'mezzo-' + field;
            var html = '<' + directive + '>';

            element.html(html);
            $compile(element.contents())(scope);
        }
    };
};