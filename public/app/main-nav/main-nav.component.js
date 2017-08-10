'use strict';

angular.
  module('mainNav').
    component('mainNav', {
      templateUrl: 'app/main-nav/main-nav.template.html',
      controller: function navigationController () {
        var vm = this;

        vm.showNav = function () {
          $('nav').toggleClass('show-nav');
          $('body').toggleClass('scroll-stop');
        }

        vm.hideNav = function () {
          $('nav').removeClass('show-nav');
          $('body').removeClass('scroll-stop');
        }
      }
    });
