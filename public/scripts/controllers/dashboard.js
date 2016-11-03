'use strict';

angular.module('dogfish-app')
  .controller('DashboardCtrl', function($scope, $state) {
    $scope.$state = $state;

    console.log("in dashboard ctrl");
    $scope.menuItems = [];
    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible) {
            $scope.menuItems.push({name: item.name, text: item.data.text});
        }
        console.log("in for each loop : "+item.data);
        console.log(item.data);

    });

  });
