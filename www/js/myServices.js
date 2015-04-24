(function () {
    'use strict';
    angular
        .module('todoApp')
        .factory('todosApi', todosApi);
    todosApi.$inject = ['$http', '$q'];

    function todosApi($http, $q) {

        var todosDetails = {
            getAll: getAll,
            get: get,
            create: create,
            edit: edit,
            deleteTodo: deleteTodo
        }
        return todosDetails;

        function getAll() {
            var deffered = $q.defer();
            $http.get('https://api.parse.com/1/classes/Todo', {
                headers: {
                    'X-Parse-Application-Id': '0PHyMWinSDTUrqVtZpe3mqM6SXr7fha5Hj0X10kx',
                    'X-Parse-REST-API-Key': '8GWpDEZ6FK5qqQA4D1hQWBpvdYFTmBEff34cAx6R'
                }
            }).success(function (response) {
                console.log("getAll Data Successfully");
                deffered.resolve(response);
            }).error(function (error, status) {
                console.log("getAll Data Error");
                deffered.reject(error, status);
            })
            return deffered.promise;
        }

        function get(id) {
            var deffered = $q.defer();
            $http.get('https://api.parse.com/1/classes/Todo/' + id, {
                headers: {
                    'X-Parse-Application-Id': '0PHyMWinSDTUrqVtZpe3mqM6SXr7fha5Hj0X10kx',
                    'X-Parse-REST-API-Key': '8GWpDEZ6FK5qqQA4D1hQWBpvdYFTmBEff34cAx6R'
                }
            }).success(function (response) {
                console.log("get Data successfully!");
                deffered.resolve(response);
            }).error(function (error, status) {
                console.log("get Dat Error !");
                deffered.reject(error, status);
            })
            return deffered.promise;
        }

        function create(data) {
            var deffered = $q.defer();
            $http.post('https://api.parse.com/1/classes/Todo', data, {
                headers: {
                    'X-Parse-Application-Id': '0PHyMWinSDTUrqVtZpe3mqM6SXr7fha5Hj0X10kx',
                    'X-Parse-REST-API-Key': '8GWpDEZ6FK5qqQA4D1hQWBpvdYFTmBEff34cAx6R',
                    'Content-Type': 'application/json'
                }
            }).success(function (response) {
                console.log("Create Data Successfully");
                deffered.resolve(response);
            }).error(function (error, status) {
                console.log("Create Data Error");
                deffered.reject(error, status);
            })
            return deffered.promise;
        }

        function edit(id, data) {
            var deffered = $q.defer();
            $http.put('https://api.parse.com/1/classes/Todo/' + id, data, {
                headers: {
                    'X-Parse-Application-Id': '0PHyMWinSDTUrqVtZpe3mqM6SXr7fha5Hj0X10kx',
                    'X-Parse-REST-API-Key': '8GWpDEZ6FK5qqQA4D1hQWBpvdYFTmBEff34cAx6R',
                    'Content-Type': 'application/json'
                }
            }).success(function (response) {
                console.log("Data edit successfully");
                deffered.resolve(response);
            }).error(function (error, status) {
                console.log("Data edit error");
                deffered.reject(error, status);
            })
            return deffered.promise;
        }

        function deleteTodo(id) {
            var deffered = $q.defer();
            $http.delete('https://api.parse.com/1/classes/Todo/' + id, {
                headers: {
                    'X-Parse-Application-Id': '0PHyMWinSDTUrqVtZpe3mqM6SXr7fha5Hj0X10kx',
                    'X-Parse-REST-API-Key': '8GWpDEZ6FK5qqQA4D1hQWBpvdYFTmBEff34cAx6R',
                    'Content-Type': 'application/json'
                }
            }).success(function (response) {
                console.log("Data delete successfully");
                deffered.resolve(response);
            }).error(function (error, status) {
                console.log("Data delete error");
                deffered.reject(error, status);
            })
            return deffered.promise;

        }
    }

})();