'use strict';

var go = angular.module('go.login', ['ui.router']);

go.config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'components/security/login.html',
      controller: 'LoginController'
    });

}]);

go.controller('LoginController', ['$scope', '$rootScope', 'authenticationService', function($scope, $rootScope, authenticationService) {

  $rootScope.bodyClass = 'login';
  $scope.motto = 'I am the login!';
  authenticationService.authenticate({user: 'fred', password: 'secret'}).then(function(user) {
       $scope.user = user;
  });



}]);
