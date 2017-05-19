(function () {
    'use strict';

    angular
        .module('mm')
        .config(config);

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/templates/app.html',
                controller: 'AppController',
                controllerAs: 'vm'
            })
            .when('/resume', {
                templateUrl: 'app/templates/resume.html',
                controller: 'ResumeController',
                controllerAs: 'vm'
            })
            .when('/about', {
                templateUrl: 'app/templates/about.html'
            })
            .when('/contact', {
                templateUrl: 'app/templates/contact.html'
            })
            .otherwise({redirectTo: '/'});
    }

})();
