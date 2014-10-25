'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/view1');

}]);

app.run(['$rootScope', '$location', function($rootScope, $location) {

  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {

    if (error && !error.authenticated) {

      // do stuff here...
    }

  });

}]);

var loginRequired = function($q) {

  var deferred = $q.defer();
  var monkey = false;

  if(monkey) {

    console.log('monkey is true');
    deferred.reject({ authenticated: false });

  } else {

    console.log('return resolve');
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
