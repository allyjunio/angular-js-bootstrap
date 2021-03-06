/* Route Configuration */
define(['app', 'controllers/Home'],
    function (app, HomeCtrl) {
        'use strict';

        app.config(
            ['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/home', {templateUrl:'html/views/home.html', controller:HomeCtrl})
                    .otherwise({redirectTo:'/home'});
            }]);
    });