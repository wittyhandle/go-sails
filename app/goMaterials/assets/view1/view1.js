'use strict';

angular.module('myApp.view1', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {

    $stateProvider
      .state('view1', {
        url: '/view1',
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl',
        resolve: resolveWrapper('harry')
      });
}])

.controller('View1Ctrl', ['$scope', 'loginRequired', 'greeting', '$location', function($scope, loginRequired, greeting, $location) {
  $scope.label = 'I am view 1!';
  $scope.l = loginRequired;
  $scope.g = greeting;

  //$location.path('/login');

}]);
