'use strict';

angular.module('boilerplateApp')

.controller('homeController', ['$log', '$scope', '$state', '$rootScope',

    function ($log, $scope, $state, $rootScope) {
        $log.debug('homeController loading');

        $scope.login = function () {
            $rootScope.isUserConnected = true;
        };

        $scope.logout = function () {
            $rootScope.isUserConnected = false;
            $state.go('home');
        };
    }]);
