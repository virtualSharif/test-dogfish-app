'use strict';

angular.module('dogfish-app')
    .controller('LoginCtrl', function($scope, $state, AuthenticateService) {

        var compileData = function() {
            var data = {
                username: $scope.username;
                password: $scope.password;
            };
            return data;
        };
        $scope.submit = function() {
            AuthenticateService.authenticate(compileData()).$promise.then(function(data){
              console.log(data);
            });
        }

    });
