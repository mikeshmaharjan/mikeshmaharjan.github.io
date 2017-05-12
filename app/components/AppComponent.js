(function() {
    'use strict';

    angular
        .module('mm')
        .component('app', AppComponent());

    function AppComponent() {
        return {
            templateUrl: 'app/templates/app.html',
            controller: 'AppController',
            bindToController: true,
            controllerAs: 'vm'
        }
    }

})();
