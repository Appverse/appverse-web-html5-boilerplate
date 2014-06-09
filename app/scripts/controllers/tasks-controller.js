'use strict';

angular.module('boilerplateApp')

.controller('taskController', ['$log', '$scope',

    function ($log, $scope) {
        $log.debug('taskController loading');

        $scope.addTask = function () {
            $scope.tasks.push({
                name: $scope.newTask,
                done: false
            });
        };
    }]);
