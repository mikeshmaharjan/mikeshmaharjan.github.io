(function() {
    'use strict';

    angular
        .module('mm')
        .config(config);

    function config($routeProvider, $locationProvider) {
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
            }).otherwise({redirectTo: '/'});

        // $locationProvider.html5Mode(true);
    }

})();
