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
        when('/projects/:name', {
          templates: '<project-view></project-view>'
        }).
        otherwise('/home');
}]);
