(function() {
    'use strict';

    angular
        .module('mm')
        .controller('ResumeController', ResumeController);

    ResumeController.$inject = ['ResumeDataService'];

    function ResumeController(ResumeDataService) {

        var vm = this;
        vm.resumeData = [];
        vm.dateFormat = 'LLLL yyyy';
        vm.fullDateFormat = 'dd LLLL yyyy';


        load();

        function load() {
            ResumeDataService.getResumeData().then(function(result) {
                vm.resumeData = result.data;
            });
        }
    }

})();
