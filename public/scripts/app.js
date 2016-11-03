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
        controller: 'LoginCtrl'
    }
}, {
    name: 'dashboard',
    state: {
        url: '/dashboard',
        parent: 'base',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
    }
}, {
    name: 'overview',
    state: {
        url: '/overview',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/overview.html'
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
    });
angular.module('dogfish-app.services', ['ngResource']);
