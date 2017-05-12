(function() {
    'use strict';

    angular
        .module('mm')
        .factory('ResumeDataService', ResumeDataService);

    ResumeDataService.$inject = ['$http'];

    function ResumeDataService($http) {

        return {
            getResumeData: getResumeData
        };

        function getResumeData() {
            return $http.get('app/data/resume.json').then(function(result) {
                return result;
            });
        }

    }

})();
