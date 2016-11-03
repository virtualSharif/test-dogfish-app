angular.module('dogfish-app.services')
    .factory('AuthenticateService', function ($resource) {
        'use strict';

        return {
            'authenticate': function (data) {
                var ret, restResource;
                restResource = $resource('/api/authenticate', {}, {
                    'authenticate': {
                        'method': 'POST',
                        'isArray': false
                    }
                });
                ret = restResource.authenticate(data);
                return ret;
            }
        };
    });
