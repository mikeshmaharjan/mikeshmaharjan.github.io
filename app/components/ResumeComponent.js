(function() {
    'use strict';

    angular
        .module('mm')
        .component('resume', ResumeComponent());

    function ResumeComponent() {
        return {
            templateUrl: 'app/templates/resume.html',
            controller: 'ResumeController',
            bindToController: true,
            controllerAs: 'vm'
        }
    }

})();
