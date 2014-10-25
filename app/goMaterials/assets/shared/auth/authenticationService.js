'use strict';

var go = angular.module('go.shared.auth', []);

go.factory('authenticationService', ['$q', '$timeout', function($q, $timeout) {


  // private functions and variables here

  return {

    authenticate: function (credentials) {

      var deferred = $q.defer();

      $timeout(function() {

        deferred.resolve({user: 'fred'});

      }, 3000);

      // take the credentials and make a call to the backend
      // with them, handle result accordingly

      return deferred.promise;

    }
  };

}]);
