'use strict';

angular.
  module('project').
    component('project', {
      templateUrl: 'app/project/project.template.html',
      controller: ['$http', function projectController($http) {
        var vm = this;

        $http.get('asset/data/project.json').
          then(function(data) {
            vm.projects = data.data;
          }, function(error) {
            console.error(error);
          });
      }]
    })
