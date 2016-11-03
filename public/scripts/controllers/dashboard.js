'use strict';

angular.module('dogfish-app')
    .controller('DashboardCtrl', function($scope, $state, $window, $http, FileService) {
        $scope.$state = $state;

        FileService.getAllFilesInfo().$promise.then(function(data) {
            $scope.filenames = data;
        });

        $scope.download = function(filename) {
            $http({
                method: 'GET',
                url: 'api/files/' + filename,
                headers: {
                    'x-access-token': sessionStorage.getItem('auth_token')
                },
                responseType: 'arraybuffer'
            }).success(function(data, status, headers) {
                headers = headers();

                var contentType = headers['content-type'];
                var linkElement = document.createElement('a');
                try {
                    var blob = new Blob([data], {
                        type: contentType
                    });
                    var url = window.URL.createObjectURL(blob);

                    linkElement.setAttribute('href', url);
                    linkElement.setAttribute("download", filename);

                    var clickEvent = new MouseEvent("click", {
                        "view": window,
                        "bubbles": true,
                        "cancelable": false
                    });
                    linkElement.dispatchEvent(clickEvent);
                } catch (ex) {
                    console.log(ex);
                }
            }).error(function(data) {
                console.log(data);
            });

        };
    });
