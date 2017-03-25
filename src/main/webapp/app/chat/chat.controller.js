(function() {
    'use strict';

    angular
        .module('webchatApp')
        .controller('ChatController', ChatController);

    ChatController.$inject = ['$stateParams', 'Auth', 'LoginService'];

    function ChatController ($stateParams, Auth, LoginService) {
        var vm = this;

        
    }
})();
