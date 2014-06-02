'use strict';

/*
 * Controllers for detection demo.
 * Pay attention to injection of dependencies (factories, entities and Angular objects).
 */
angular.module('appverseClientIncubatorApp')

.controller('homeController', ['$log', '$scope', '$state', '$rootScope',

    function ($log, $scope, $state, $rootScope) {
        $log.debug('homeController loading');

        $scope.login = function () {
            $rootScope.isUserConnected = true;
        }

        $scope.logout = function () {
            $rootScope.isUserConnected = false;
            $state.go('home');
        }
    }]);
