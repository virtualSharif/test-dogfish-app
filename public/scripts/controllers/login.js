'use strict';

angular.module('dogfish-app')
  .controller('LoginCtrl', function($scope, $state) {

    $scope.submit = function() {
      console.log('login succesful');
      $state.go('dashboard');
    }

  });
