(function () {
    'use strict';
    angular
        .module('todoApp')
        .controller('TodoCreationController', TodoCreationController)
    TodoCreationController.$inject = ['$scope', 'todosApi', '$state'];

    function TodoCreationController($scope, todosApi, $state) {
        $scope.todo = {};

        $scope.create = function () {
            todosApi.create({content: $scope.todo.content}).then(function (data) {
                $state.go('todos');
            });
        }
    }
})();
