'use strict';

angular.
  module('core').
    filter('techicon', function() {
      return function(input) {
        return `devicon-${input}-plain`;
      }
    });
