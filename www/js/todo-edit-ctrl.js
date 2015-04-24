(function () {
    'use strict';
    angular
        .module('todoApp')
        .controller('TodoEditController', TodoEditController);

    TodoEditController.$inject = ['$scope', 'todosApi', '$state', '$stateParams'];

    function TodoEditController($scope, todosApi, $state, $stateParams) {
        $scope.todo = {id: $stateParams.id, content: $stateParams.content};
        console.log($scope.todo.content);

        $scope.edit = function () {
            console.log("edit is called");
            todosApi.edit($scope.todo.id, {content: $scope.todo.content}).then(function () {
                $state.go('todos');
            });
        }
    }
})();
