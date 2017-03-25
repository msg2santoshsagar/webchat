(function() {
    'use strict';

    angular
        .module('webchatApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('chat', {
            parent: 'app',
            url: '/chat',
            data: {
                authorities: [],
                pageTitle: 'Web Chat'
            },
            views: {
                'content@': {
                    templateUrl: 'app/chat/chat.html',
                    controller: 'ChatController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
