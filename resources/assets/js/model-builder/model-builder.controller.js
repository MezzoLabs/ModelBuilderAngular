exports.name = 'ModelBuilderController';
exports.controller = /*@ngInject*/ function ModelBuilderController($scope){

    $scope.tab = 'add';
    $scope.fields = [];
    $scope.selectedField = null;

    $scope.showTab = showTab;
    $scope.addField = addField;
    $scope.selectField = selectField;

    function showTab(tab, $event){
        if($event){
            $event.preventDefault();
        }

        if(tab === 'edit' && !$scope.selectedField) return;

        $scope.tab = tab;

        $('tab-heading-' + tab).tab('show');

        if(tab === 'add'){
            $scope.selectedField = null;
        }
    }

    function addField(name){
        $scope.fields.push({
            name: name,
            mainDirective: 'mezzo-' + name,
            optionsDirective: 'mezzo-' + name + '-options'
        });
    }

    function selectField(field){
        $scope.selectedField = field;

        showTab('edit');
    }

};