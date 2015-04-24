(function () {
    'use strict';
    angular
        .module('todoApp')
        .controller('TodoListController', TodoListController);

    TodoListController.$inject = ['$scope', 'todosApi'];

    function TodoListController($scope, todosApi) {
        //console.log("TodoListCtrl");
        todosApi.getAll().then(function (data) {
            $scope.items = data.results;
            console.log("List of todos", $scope.items);
        });

        $scope.onItemDelete = function (item) {
            todosApi.deleteTodo(item.objectId);
            $scope.items.splice($scope.items.indexOf(item), 1);
        }
    }
})();
