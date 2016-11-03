angular.module('dogfish-app.services')
    .factory('FileService', function($resource) {
        'use strict';

        return {
            'getAllFilesInfo': function() {
                var ret, restResource;
                restResource = $resource('/api/files', {}, {
                    'getAllFilesInfo': {
                        'method': 'GET',
                        'isArray': true,
                        'headers': {
                            'x-access-token': sessionStorage.getItem('auth_token')
                        }
                    }
                });
                ret = restResource.getAllFilesInfo();
                return ret;
            }
        };
    });
