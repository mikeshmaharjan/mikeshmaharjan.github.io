(function() {
    'use strict';

    angular
        .module('mm')
        .controller('AppController', AppController);

    AppController.$inject = [];

    function AppController() {

        var vm = this;

        vm.test = "some text";
    }

})();
