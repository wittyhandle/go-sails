'use strict';

angular.module('myApp.view2', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {

    $stateProvider
      .state('view2', {
        url: '/view2',
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl',
        data: {
          isSecure: false
        }
      });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
    $scope.label = 'I am view 2!';
}]);
