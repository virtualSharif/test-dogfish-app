'use strict';

angular.module('dogfish-app')
    .controller('LoginCtrl', function($scope, $state, AuthenticateService) {

        $scope.showErrorMessage = false;

        var compileData = function() {
            var data = {
                username: $scope.username,
                password: $scope.password
            };
            return data;
        };

        $scope.submit = function() {
            AuthenticateService.authenticate(compileData()).$promise.then(function(data) {
                $scope.showErrorMessage = !data.success;
                if (data.success) {
                    console.log(data);
                    localStorage.setItem('auth_token', data.token);
                    $state.go('dashboard');
                }
            });
        }

    });
