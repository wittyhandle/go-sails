'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ui.router',
  'go.login',
  'go.shared.auth',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/view1');

}]);

app.run(['$rootScope', '$state', function($rootScope, $state) {

  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {

      if (error && !error.authenticated) {

        $state.go('login');
      }

  });

}]);

var loginRequired = function($q) {

  var deferred = $q.defer();
  var monkey = true;

  if(monkey) {

    deferred.reject({ authenticated: false });

  } else {

    deferred.resolve('mike');

  }

  return deferred.promise;
}

var resolveWrapper = function(message) {

  return {

    loginRequired: loginRequired,
    greeting: function($q) {

      var deferred = $q.defer();
      deferred.resolve('hello ' + message + '.');

      return deferred.promise;
    }

  }

}
