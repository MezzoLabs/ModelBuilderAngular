module.exports = /*@ngInject*/ $scope => {
    $scope.tab = 'add';
    $scope.fields = [];

    $scope.showTab = ($event, tab) => {
        $scope.tab = tab;

        $event.preventDefault();
        $(this).tab('show');
    };

    $scope.addField = field => {
        $scope.fields.push(field);
    };
};