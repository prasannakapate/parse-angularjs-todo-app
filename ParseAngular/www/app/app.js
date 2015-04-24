(function () {
    'use strict';
    angular
        .module('ttmmApp', ['ionic'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default
                // (remove this to show the accessory bar above the keyboard for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })
        .config(function ($stateProvider, $urlRouterProvider) {
//            $ionicConfigProvider.views.transition('ios');
//            //$ionicConfigProvider.views.forwardCache(false);
//            $ionicConfigProvider.navBar.positionPrimaryButtons('left');
//            $ionicConfigProvider.navBar.positionSecondaryButtons('right');
//            $ionicConfigProvider.navBar.alignTitle('center');
//
//            // note that you can also chain configs
//            $ionicConfigProvider.backButton.text('back').icon('ion-chevron-left');
//            $ionicConfigProvider.tabs.position('bottom').style('standard');

            $stateProvider
                .state('tab', {
                    url: "/tab",
                    abstract: true,
                    templateUrl: "app/layout/tabs.html"
                })
                .state('tab.events', {
                    url: '/events',
                    views: {
                        'tab-events': {
                            templateUrl: 'app/event/event-list.html'
                        }
                    }
                })
                .state('tab.settings', {
                    url: '/settings',
                    views: {
                        'tab-settings': {
                            templateUrl: 'app/settings/settings.html'
                        }
                    }
                });
            $urlRouterProvider.otherwise('/tab/settings');
        });
})();