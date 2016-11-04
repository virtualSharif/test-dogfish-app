'use strict';

var states = [{
    name: 'base',
    state: {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
    }
}, {
    name: 'login',
    state: {
        url: '/login',
        parent: 'base',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        authenticate: false
    }
}, {
    name: 'dashboard',
    state: {
        url: '/dashboard',
        parent: 'base',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        authenticate: true

    }
}, {
    name: 'overview',
    state: {
        url: '/overview',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/overview.html',
        authenticate: true
    }
}, {
    name: 'logout',
    state: {
        url: '/login'
    }
}];

angular.module('dogfish-app', [
        'ui.router',
        'snap',
        'ngAnimate',
        'dogfish-app.services'
    ])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('/dashboard', '/dashboard/overview');
        $urlRouterProvider.otherwise('/login');

        angular.forEach(states, function(state) {
            $stateProvider.state(state.name, state.state);
        });
    }).run(function($rootScope, $state) {

        //prevent state transition without login
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            if (toState.authenticate && sessionStorage.getItem('auth_token')) {
                $state.go(toState);
            } else {
                $state.go('login');
            }
        });

        $rootScope.logout = function() {
          //remove Token
          sessionStorage.removeItem('auth_token');
          $state.go('login');
        };
    });
angular.module('dogfish-app.services', ['ngResource']);
