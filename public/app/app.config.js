'use strict';

angular.
  module('portfolio').
    config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<home></home>'
        }).
        when('/projects', {
          template: '<project></project>'
        }).
        when('/project/:name', {
          template: '<project-view></project-view>'
        }).
        otherwise('/home');
}]);
