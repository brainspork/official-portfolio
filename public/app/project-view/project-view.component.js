'use strict';

angular.
  module('projectView').
    component('projectView', {
      templateUrl: 'app/project-view/project-view.template.html',
      controller: ['$http', '$routeParams', function projectViewController ($http, $routeParams) {
          var vm = this;
          vm.name = $routeParams.name;
          $http.get('asset/data/project.json').
            then(res => {
              vm.project = res.data.filter(curr => curr.name === vm.name)[0];
          });
      }]
    })
