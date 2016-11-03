'use strict';

angular.module('dogfish-app')
  .controller('DashboardCtrl', function($scope, $state) {
    $scope.$state = $state;

    console.log("in dashboard ctrl");

  });
