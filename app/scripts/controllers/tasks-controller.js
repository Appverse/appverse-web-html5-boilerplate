'use strict';

angular.module('appverseClientIncubatorApp')

.controller('taskController', ['$log', '$scope', '$state', '$rootScope',

    function ($log, $scope, $state, $rootScope) {
        $log.debug('taskController loading');

        $scope.addTask = function () {
            $scope.tasks.push({
                name: $scope.newTask,
                done: false
            });
        };
    }]);
