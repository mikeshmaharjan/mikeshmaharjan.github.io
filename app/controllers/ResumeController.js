(function () {
    'use strict';

    angular
        .module('mm')
        .controller('ResumeController', ResumeController);

    ResumeController.$inject = [];

    function ResumeController() {

        var vm = this;

        vm.resumeLink = 'https://docs.google.com/document/d/1rTEvNItk0atCE-7j7BnlxrGYbD_IvZswegZ3N6xymQ4/edit?usp=sharing';
    }

})();