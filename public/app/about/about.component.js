'use strict';

angular.
  module('about').
    component('about', {
      templateUrl: 'app/about/about.template.html',
      controller: ['$http', function aboutViewController($http) {
        var vm = this;

        $http.get('asset/data/about.json').
          then(res => vm.about = res.data);
      }]
    });
